import { Component } from 'react'
import moment from 'moment'

import CommentForm from '../components/CommentForm'

import Auth from '../lib/Auth'

class Article extends Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
    this.auth = new Auth()
  }

  canComment () {
    if (this.auth.isAuthenticated()) {
      return <CommentForm postComment={this.props.postComment} />
    } else {
      return <div className='card'>
        <div className='card-body'>
          <p>If you would like to leave a comment, then please login</p>
          <a className='btn btn-success btn-lg' onClick={this.login} >Login</a>
        </div>
      </div>
    }
  }

  login () {
    this.auth.login()
  }

  render () {
    const { post } = this.props

    return <div className='row'>
      <div className='col-lg-8 offset-lg-2'>
        <h1 className='c-article__header'>{post.title}</h1>
        <hr className='c-article__rule' />
        <p className='c-article__intro' >{post.intro}</p>
        <p className='c-article__body'>{post.body}</p>

        <div className='c-article__comments'>
          {post.comments.map((comment, index) => {
            return <div className='card c-article__comment' key={index}>
              <div className='card-header'>
                <time dateTime={comment.created_at}>{moment(comment.created_at).format('LL')}</time>
              </div>
              <div className='card-body'>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {comment.name}
                </h6>
                {comment.body}
              </div>
            </div>
          })}
        </div>
        {this.canComment()}
      </div>
    </div>
  }
}

export default Article
