import { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import withData from '../lib/withData'

class Index extends Component {
  render () {
    const { data: { posts, loading } } = this.props

    if (loading) {
      return <Layout {...this.props}>
        <p>Loading...</p>
      </Layout>
    } else {
      return <Layout {...this.props}>
        <Header />
        <div className='row'>
          {posts.map((post, index) => {
            return <PostCard key={index} post={post} />
          })}
        </div>
      </Layout>
    }
  }
}

const postsQuery = gql`
  query posts {
    posts {
      id
      title
      intro
      created_at
    }
  }
`

const PostsData = graphql(postsQuery)(Index)

export default withData(PostsData)
