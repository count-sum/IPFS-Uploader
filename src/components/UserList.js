import React, { Component } from 'react'
import { AccountData } from 'drizzle-react-components'
import ErrorBoundary from './ErrorBoundary'

class UserList extends Component {
  constructor (props, context) {
    super(props)
    this.drizzle = this.context.drizzle
    this.web3 = this.props.web3
    this.contracts = this.props.contracts
    this.Identity = this.props.contracts.Identity
    this.state = {
      allUsers: []
    }
  }
  // need to add redux react router
  componentDidMount () {
    let allUsers = []
    let currentUserKey
    // Check that the contract is actually initialized
    if (this.drizzle.contracts.Identity &&
        this.props.contracts.Identity &&
        this.props.contracts.Identity.initialized
    ) {
      for (let i = 0; i < 10; i++) {
        // Get dataKeys for cache access
        currentUserKey = this.drizzle.contracts.Identity.methods.allUsers.cacheCall()
        // Check that the data is cached
        if (this.props.contracts.Identity.allUsers[currentUserKey]
        ) {
          allUsers.push(this.props.contracts.Identity.allUsers[currentUserKey].value)
        }
      })
    }
  }
  render () {
    return (
      <ErrorBoundary>
        <section className='section'>
          <div className='container'>
            { allUsers.length !== undefined &&
            allUsers.map(user => {
              <a href={'users/' + user}>{user}</a>
            })
            }
          </div>
        </section>
      </ErrorBoundary>
    )
  }
}

export default UserList
