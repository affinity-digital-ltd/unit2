import { Component } from 'react'

class CommentForm extends Component {
  render () {
    return <form onSubmit={this.props.postComment}>
      <div className='form-group'>
        <label>Name</label>
        <input name='name' className='form-control' required />
      </div>
      <div className='form-group'>
        <label>Body</label>
        <textarea name='body' className='form-control' required />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary'>Post Comment</button>
      </div>
    </form>
  }
}

export default CommentForm
