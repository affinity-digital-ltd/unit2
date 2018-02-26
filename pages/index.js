import { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import SubscriptionForm from '../components/SubscriptionForm'
import PostCard from '../components/PostCard'
import withData from '../lib/withData'

class Index extends Component {
  render () {
    let { data: { posts } } = this.props

    return <Layout {...this.props}>
      <div className='row' style={{marginBottom: '2rem'}}>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              If you would like to receive notifications about new posts, then please consider signing up.
            </div>
            <div className='card-body'>
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        {posts.map((post, index) => {
          return <PostCard key={index} post={post} />
        })}
      </div>
    </Layout>
  }
}

let postsQuery = gql`
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
