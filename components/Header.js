import { Component } from 'react'

import SubscriptionForm from '../components/SubscriptionForm'

class Header extends Component {
  constructor (props) {
    super(props)

    this.signupNotification = this.signupNotification.bind(this)
  }

  signupNotification () {
    if (this.props.signupStatus.id) {
      return <div className="alert alert-success" role="alert">
        Thank you for signing up
      </div>
    } else if (Array.isArray(this.props.signupStatus.email)) {
      return <div className="alert alert-danger" role="alert">
        Email {this.props.signupStatus.email}
      </div>
    }
  }

  render () {
    return <div className='row' style={{ marginBottom: '2rem' }}>
      <div className='col-12'>
        {this.signupNotification()}
        <div className='card'>
          <div className='card-header'>
            If you would like to receive notifications about new posts, then please consider signing up.
              </div>
          <div className='card-body'>
            <SubscriptionForm {...this.props} />
          </div>
        </div>
      </div>
    </div>
  }
}

export default Header
