import { Component } from 'react'

class CommentForm extends Component {
  render () {
    return <form>
      <div className='form-group'>
        <label>Name</label>
        <input name='name' className='form-control' />
      </div>
      <div className='form-group'>
        <label>Body</label>
        <textarea name='body' className='form-control' />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary'>Post Comment</button>
      </div>
    </form>
  }
}

export default CommentForm
