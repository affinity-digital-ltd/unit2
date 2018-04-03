import { Component } from 'react'

import CommentForm from '../components/CommentForm'

import Auth from '../lib/Auth'

class PostComment extends Component {
  constructor (props) {
    super(props)

    this.auth = new Auth()
    this.login = this.login.bind(this)
  }

  login () {
    this.auth.login()
  }

  render () {
    if (this.auth.isAuthenticated()) {
      return <CommentForm postComment={this.props.mutation} />
    } else {
      return <div className='card'>
        <div className='card-body'>
          <p>If you would like to leave a comment, then please login</p>
          <a className='btn btn-success btn-lg' onClick={this.login} >Login</a>
        </div>
      </div>
    }
  }
}

export default PostComment
