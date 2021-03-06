import React, { lazy, useContext, useEffect, useState, Suspense } from 'react'
import t from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import { AuthContext } from './context/auth'
import firebase from './services/firebase'

import { HOME, LOGIN } from 'routes'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário: ', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.providerData[0].displayName.split(' ')[0]
        }
      })
      setDidCheckUserIn(true)
    })
  }, [setUserInfo])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.prototypes = {
  location: t.object.isRequired
}

export default App
