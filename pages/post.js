import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import Article from '../components/Article'
import Comment from '../components/Comment'
import PostComment from '../components/PostComment'

import withData from '../lib/withData'

class Post extends Component {
  constructor (props) {
    super(props)

    this.postComment = this.postComment.bind(this)
    this.addComment = gql`
      mutation addComment($postId: ID!, $name: String!, $body: String!) {
        addComment(postId:$postId, name:$name, body:$body) {
          id
          name
          body
          created_at
        }
      }
    `
    this.postQuery = gql`
      query post($id: ID!) {
        post(id:$id) {
          id
          title
          intro
          body
          created_at
          comments {
            id
            name
            body
            created_at
          }
        }
      }
    `
  }

  postComment (event, addComment) {
    event.preventDefault()
    const form = event.target

    addComment({
      variables: {
        postId: this.props.url.query.id,
        name: form.name.value,
        body: form.body.value
      }
    })

    form.reset()
  }

  render () {
    return <Query query={this.postQuery} variables={{id: this.props.url.query.id}}>
      {({ loading, error, data: { post } }) => {
        if (loading) {
          return <Layout {...this.props}>
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <p>Loading..</p>
              </div>
            </div>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <Article post={post} />
                <Mutation mutation={this.addComment}
                  update={(cache, { data: { addComment } }) => {
                    const updatedPost = Object.assign({}, post, { comments: post.comments.concat([addComment]) })
                    cache.writeQuery({
                      query: this.postQuery,
                      variables: {id: this.props.url.query.id},
                      data: { post: updatedPost }
                    })
                  }}>
                  {addComment => {
                    return <div>
                      {post.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index} />
                      })}
                      <PostComment mutation={(event) => this.postComment(event, addComment)} />
                    </div>
                  }}
                </Mutation>
              </div>
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Post)
