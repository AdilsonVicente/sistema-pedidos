import { PureComponent } from 'react'
import t from 'prop-types'

export class ErrorBoundary extends PureComponent {
  state = { hasError: false };

   prototype = {
     children: t.func.isRequired
   };

   static getDerivedStateFromError (error) {
     console.log('error getDerivedStateFromError:', error.message)
     return { hasError: true }
   }

   componentDidCatch (error, info) {
     console.log('error: ', error)
     console.log('info:', info)
   }

   render () {
     return this.props.children(this.state.hasError)
   }
}
