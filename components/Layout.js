import { Component } from 'react'

import Footer from '../components/Footer'
import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <div className='container'>
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout
