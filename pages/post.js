import { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import Article from '../components/Article'
import withData from '../lib/withData'

class Post extends Component {
  render () {
    const { data: { post, loading } } = this.props

    if (loading) {
      return <Layout {...this.props}>
        <p>Loading..</p>
      </Layout>
    } else {
      return <Layout {...this.props}>
        <Article post={post} />
      </Layout>
    }
  }
}

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

const PostData = graphql(postQuery, {
  options: (props) => ({
    variables: {
      id: props.url.query.id
    }
  })
})(Post)

export default withData(PostData)
