import { Component } from 'react'

import SubscriptionForm from '../components/SubscriptionForm'

class Header extends Component {
  render () {
    return <div className='row' style={{ marginBottom: '2rem' }}>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header'>
            If you would like to receive notifications about new posts, then please consider signing up.
              </div>
          <div className='card-body'>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </div>
  }
}

export default Header
