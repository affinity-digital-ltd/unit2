import { Component } from 'react'

import Layout from '../components/Layout'
import SubscriptionForm from '../components/SubscriptionForm'
import PostCard from '../components/PostCard'

class Index extends Component {
  render () {
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
        {/* <% @posts.each do |post| %>
          <PostCard />
        <% end %> */}
      </div>
    </Layout>
  }
}

export default Index
