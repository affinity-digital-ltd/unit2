import { Component } from 'react'

class SubscriptionForm extends Component {
  render () {
    return <form >
      <div className='input-group mb-3'>
        <input type='email' name='email' className='form-control' placeholder='Your email Address' required />
        <div className='input-group-append'>
          <input type='submit' value='Sign Up' className='btn btn-outline-secondary' />
        </div>
      </div>
    </form>
  }
}

export default SubscriptionForm
