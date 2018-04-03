import { Component } from 'react'

class Article extends Component {
  render () {
    const { post } = this.props

    return <div>
      <h1 className='c-article__header'>{post.title}</h1>
      <hr className='c-article__rule' />
      <p className='c-article__intro' >{post.intro}</p>
      <p className='c-article__body'>{post.body}</p>
    </div>
  }
}

export default Article
