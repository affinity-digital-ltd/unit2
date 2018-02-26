import { Component } from 'react'
import moment from 'moment'
import Link from 'next/link'

class PostCard extends Component {
  truncate (string) {
    if (string.length > 99) {
      return `${string.substr(0, 99)} ...`
    } else {
      return string
    }
  }

  render () {
    let {post} = this.props

    return <div className='col-xs-12 col-md-6 col-lg-3' style={{alignItems: 'stretch', display: 'flex'}}>
      <div className='card c-card'>
        <div className='card-body'>
          <h5 className='card-title'><Link href='post_path(post)'><a>{post.title}</a></Link></h5>
          <h6 className='card-subtitle mb-2 text-muted'><time dateTime={post.created_at}>{moment(post.created_at).format('LL')}</time></h6>
          <p className='card-text'>{this.truncate(post.intro)}</p>
        </div>
      </div>
    </div>
  }
}

export default PostCard
