import IdentityContract from '../../../../build/contracts/Identity.json'
import { loginUser } from '../loginbutton/LoginButtonActions'
import store from '../../../store'

const contract = require('truffle-contract')

export function signUpUser (name) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    return function (dispatch) {
      // Using truffle-contract we create the Identity object.
      const Identity = contract(IdentityContract)
      Identity.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Identity.
      var IdentityInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error)
        }

        Identity.deployed().then(function (instance) {
          IdentityInstance = instance

          // Attempt to sign up user.
          IdentityInstance.signup(name, { from: coinbase })
            .then(function (result) {
            // If no error, login user.
              return dispatch(loginUser())
            })
            .catch(function (result) {
            // If error...
            })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.')
  }
}
