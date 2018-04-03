import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import withData from '../lib/withData'

class Index extends Component {
  constructor (props) {
    super(props)

    this.emailSubscription = this.emailSubscription.bind(this)
    this.state = {
      signupStatus: {}
    }
    this.postsQuery = gql`
      query posts {
        posts {
          id
          title
          intro
          created_at
        }
      }
    `
  }

  emailSubscription (event) {
    // Use fetch API to post email address to Rails API
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const email = formData.get('email')

    fetch(`${process.env.HOST_NAME}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify({
        subscriber: {
          email: email
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        signupStatus: data
      })
    })

    form.reset()
  }

  render () {
    return <Query query={this.postsQuery}>
      {({ loading, data: { posts } }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading...</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <Header emailSubscription={this.emailSubscription} signupStatus={this.state.signupStatus} />
            <div className='row'>
              {posts.map((post, index) => {
                return <PostCard key={index} post={post} />
              })}
            </div>
          </Layout>
        }
      }
    }
    </Query>
  }
}

export default withData(Index)
