import React from 'react'
import PropTypes from 'prop-types'

//import { NETWORKS } from '../util/constants'

// Add colours in corresponding to the networks, guess it is like setting the class
const Nav = props => (
  <nav className='navbar is-light' aria-label='main navigation'>
    <div className='navbar-brand'>
      <a className='navbar-item' href='/'>
        <strong><i className='fas fa-upload' /> {props.appName}</strong>
      </a>
      <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarIPFS'>
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </a>
    </div>
    <div id='navbarIPFS' className='navbar-menu'>
      <div className='navbar-start'>

        <a className='navbar-item' href='/search'>
          <strong><i className='fas fa-search' /> Search</strong>
        </a>
      </div>
      <div className='navbar-end'>

        <a className='navbar-item' href=''>
          <strong><i className='fas fa-book' /> About </strong>
        </a>

      </div>
    </div>
    {/**  shown on mobile
        <div class="navbar-menu is-active">
            <a className="navbar-item">
            <div className="tags has-addons">
            </div>
            </a>
        </div>
        */}
  </nav>
)

Nav.propTypes = {
  appName: PropTypes.string,
  networkId: PropTypes.number
}
export default Nav
