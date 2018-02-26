import { Component } from 'react'
import moment from 'moment'

class Article extends Component {
  render () {
    let { post } = this.props

    return <div class='row'>
      <div class='col-lg-8 offset-lg-2'>
        <h1 class='c-article__header'>{post.title}</h1>
        <hr class='c-article__rule' />
        <p class='c-article__intro' >{post.intro}</p>
        <p class='c-article__body'>{post.body}</p>

        <div class='c-article__comments'>
          {post.comments.map((comment, index) => {
            return <div class='card c-article__comment' key={index}>
              <div class='card-header'>
                <time datetime={comment.created_at}>{moment(comment.created_at).format('LL')}</time>
              </div>
              <div class='card-body'>
                <h6 class='card-subtitle mb-2 text-muted'>
                  {comment.name}
                </h6>
                {comment.body}
              </div>
            </div>
          })}
        </div>
        {/* <% unless session[:userinfo].present? %>
          <p>If you would like to leave a comment, then please login</p>
          <a class="btn btn-success btn-lg" href="/auth/auth0">Login</a>
        <% end %>
        <%= render 'comments/form' if session[:userinfo].present? %> */}
      </div>
    </div>
  }
}

export default Article
