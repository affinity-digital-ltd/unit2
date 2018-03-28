import { Component } from 'react'

import Link from 'next/link'

import '../scss/application.scss'

class Layout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navClass: '',
      navBrandClass: ''
    }
  }

  componentDidMount () {
    if (this.props.url.pathname === '/') {
      this.setState({
        navClass: 'c-nav',
        navBrandClass: 'c-nav__brand'
      })
    }
  }

  render () {
    return <div>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${this.state.navClass}`}>
        <Link href='/'><a className={`navbar-brand ${this.state.navBrandClass}`}>Unit 1</a></Link>
      </nav>
      <div className='container'>
        { this.props.children }
      </div>
    </div>
  }
}

export default Layout
