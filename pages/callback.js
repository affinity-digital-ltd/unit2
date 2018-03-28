import { Component } from 'react'
import Router from 'next/router'

import Auth from '../lib/Auth'

class Callback extends Component {
  componentDidMount () {
    const auth = new Auth()
    if (/access_token|id_token|error/.test(this.props.url.asPath)) {
      auth.handleAuthentication()
      Router.push('/')
    }
  }

  render () {
    return <div>Error</div>
  }
}

export default Callback
