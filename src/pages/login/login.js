import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'
import styled from 'styled-components'
import { AuthContext } from '../../context/auth'
import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg'

function Login () {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container direction='column' justify='center' spacing={5} >
        <Grid item >
          <Logo />
        </Grid>
        <Grid
          item xs={12}
          container
          justify='center'
        >
          <GitHubButton onClick={login} >
            Entrar com github
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
 padding: 20px;
 `
const Logo = styled(MainLogo)`
  width: 100%;
 `
const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
 `

export default Login
