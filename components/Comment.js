import { Component } from 'react'
import moment from 'moment'

class Comment extends Component {
  render () {
    const { comment } = this.props

    return <div className='c-article__comments'>
      <div className='card c-article__comment'>
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
    </div>
  }
}

export default Comment
