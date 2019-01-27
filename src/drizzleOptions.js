// import ComplexStorage from './../build/contracts/ComplexStorage.json'
// import SimpleStorage from './../build/contracts/SimpleStorage.json'
// import TutorialToken from './../build/contracts/TutorialToken.json'
import FileContract from './../build/contracts/FileContract.json'
import Identity from './../build/contracts/Identity.json'
const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    // ComplexStorage,
    FileContract,
    Identity
    // SimpleStorage,
    // TutorialToken
  ],
  events: {
    Identity: ['UserCreated', 'UserUpdated', 'UserDeleted'],
    FileContract: ['fileAdded']
    // SimpleStorage: ['StorageSet']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
