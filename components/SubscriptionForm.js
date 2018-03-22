import { Component } from 'react'

class SubscriptionForm extends Component {
  render () {
    return <div>
      <form onSubmit={this.props.emailSubscription}>
        <div className='input-group mb-3'>
          <input name='email' type='email' className='form-control' placeholder='Your email Address' required />
          <div className='input-group-append'>
            <input type='submit' value='Sign Up' className='btn btn-outline-secondary' />
          </div>
        </div>
      </form>
    </div>
  }
}

export default SubscriptionForm
