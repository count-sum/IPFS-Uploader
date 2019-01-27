import React, { Component } from 'react'
// import logo from '../../logo.png'
import UploadFileIPFS from '../../components/UploadFileIPFS'

import FileTable from '../../components/FileTable'
import LoginForm from '../../components/LoginForm'
import Search from '../../layouts/search/Search'
import ErrorBoundary from '../../components/ErrorBoundary'
import AccountData from '../../components/AccountData'
class Home extends Component {
  render () {
    return (
      <ErrorBoundary>
        <section className='section'>
          <div className='container'>
            <h1 className='title'>
              Upload your files to <strong>IPFS</strong>!
            </h1>
            <UploadFileIPFS {... this.props} />

            <LoginForm {... this.props} />
            <hr />




          </div>
          <div className='container'>
          <div className='container'>

            <h4>Your Account</h4>
            <AccountData accountIndex='0' units='ether' precision='3' />
            <Search {... this.props} />

            <hr />
            </div>
            <FileTable fileOwnerAddress={this.props.accounts[0]} {... this.props} />

          </div>

          {/**
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
             <div>
               <p class="heading">Following</p>
               <p class="title">123</p>
             </div>
          </div>
          <div class="level-item has-text-centered">
             <div>
               <p class="heading">Followers</p>
               <p class="title">456K</p>
             </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        */}
        </section>
      </ErrorBoundary>
    )
  }
}

export default Home
