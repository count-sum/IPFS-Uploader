import { drizzleConnect } from 'drizzle-react'
import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import IPFSPdf from './IPFSPdf'

import '@fortawesome/fontawesome-free/css/all.css'
/*
 * Create component.
 */

class LoadingContainer extends Component {
  render () {
    if (this.props.web3.status === 'failed') {
      if (this.props.errorComp) {
        return this.props.errorComp
      }

      return (
        <main className='container loading-screen'>
          <div className='pure-g'>
            <div className='pure-u-1-1'>
              <h1>
                <span className='icon has-text-warning'>
                  <i className='fas fa-exclamation-triangle' />
                </span>
              </h1>
              <p>This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or other Web3-enabled software.</p>
            </div>
          </div>
        </main>
      )
    }

    if (this.props.web3.status === 'initialized' && Object.keys(this.props.accounts).length === 0) {
      return (
        <main className='container loading-screen'>
          <div className='card'>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <p> Oh-Oh?!?! </p>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>
                  Warning &nbsp;
                    <span className='icon has-text-danger'>
                      <i className='fas fa-ban' />
                    </span>
                  </p>
                  <p className='subtitle is-6'>Why am I seeing this message?</p>
                </div>
              </div>
              <div className='content'>
                <strong> We can't find any Ethereum accounts! </strong> <p> Please check and make sure Metamask or your browser are pointed at the correct network and your account is unlocked. </p> Please download an Ethereum Browser such as Metamask.
                {/** <a href="#">#css</a> <a href="#">#responsive</a> */}
                <br />
              </div>
            </div>
            <footer className='card-footer'>
              <a href='https://metamask.io/' className='card-footer-item'>
                <span className='icon has-text-info'>
                  <i className='fab fa-ethereum' />
                </span>
                  Get MetaMask
              </a>
              <a href='' className='card-footer-item'>
                <span className='icon has-text-info'>
                  <i className='fas fa-book' />
                </span>
                  Read Docs
              </a>
            </footer>
          </div>
          <br />
          <br />
          <hr />

        </main>
      )
    }
    if (this.props.drizzleStatus.initialized) {
      return Children.only(this.props.children)
    }
    if (this.props.loadingComp) {
      return this.props.loadingComp
    }
    return (
      <main className='container loading-screen'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
              <br /><br /><br />
              <h3>Dapp is loading...</h3>
          </div>
        </div>
      </main>
    )
  }
}
LoadingContainer.contextTypes = {
  drizzle: PropTypes.object
}
/*
 * Export connected component.
 */
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  }
}
export default drizzleConnect(LoadingContainer, mapStateToProps)
