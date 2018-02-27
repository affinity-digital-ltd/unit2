import { Component } from 'react'
import moment from 'moment'

class Article extends Component {
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
                <time datetime={comment.created_at}>{moment(comment.created_at).format('LL')}</time>
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
        {/* <% unless session[:userinfo].present? %>
          <p>If you would like to leave a comment, then please login</p>
          <a className="btn btn-success btn-lg" href="/auth/auth0">Login</a>
        <% end %>
        <%= render 'comments/form' if session[:userinfo].present? %> */}
      </div>
    </div>
  }
}

export default Article
