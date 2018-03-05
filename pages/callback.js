import { Component } from 'react'

import Auth from '../lib/Auth'

class Callback extends Component {
  componentDidMount () {
    const auth = new Auth()
    if (/access_token|id_token|error/.test(this.props.url.asPath)) {
      auth.handleAuthentication()
    }
  }

  render () {
    return <div>here</div>
  }
}

export default Callback
