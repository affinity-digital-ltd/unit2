import { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import Article from '../components/Article'
import withData from '../lib/withData'

class Post extends Component {
  constructor (props) {
    super(props)
    this.postComment = this.postComment.bind(this)
  }

  postComment (event) {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)

    this.props.mutate({
      variables: {
        postId: this.props.data.post.id,
        name: formData.get('name'),
        body: formData.get('body')
      },
      update: (proxy, { data: { addComment } }) => {
        const data = proxy.readQuery({
          query: postQuery,
          variables: {
            id: this.props.data.post.id
          }
        })
        data.post.comments.push(addComment)

        proxy.writeQuery({ query: postQuery, data })
      }
    })

    form.reset()
  }

  render () {
    const { data: { post, loading } } = this.props

    if (loading) {
      return <Layout {...this.props}>
        <p>Loading..</p>
      </Layout>
    } else {
      return <Layout {...this.props}>
        <Article post={post} postComment={this.postComment} />
      </Layout>
    }
  }
}

const addComment = gql`
  mutation addComment($postId: ID!, $name: String!, $body: String!) {
    addComment(postId:$postId, name:$name, body:$body) {
      id
      name
      body
      created_at
    }
  }
`

const postQuery = gql`
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

const Data = compose(
  graphql(postQuery, {
    options: (props) => ({
      variables: {
        id: props.url.query.id
      }
    })
  }),
  graphql(addComment)
)(Post)

export default withData(Data)
