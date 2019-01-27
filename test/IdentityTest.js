const Identity = artifacts.require("./Identity.sol");

contract('Identity', function(accounts) {

  it("...should sign up and log in a user.", function() {
    return Identity.deployed().then(function(instance) {
      IdentityInstance = instance;

      return IdentityInstance.signup('testuser', {from: accounts[0]});
    }).then(function() {
      return IdentityInstance.login.call();
    }).then(function(userName) {
      assert.equal(web3.toUtf8(userName), 'testuser', "The user was not signed up.");
    });
  });
  it("...should update the existing user.", function() {
    return Identity.deployed().then(function(instance) {
      IdentityInstance = instance
      
      return IdentityInstance.update('coolUser');
    }).then(function() {
      return IdentityInstance.login.call();
    }).then(function(userName) {
      assert.equal(web3.toUtf8(userName), 'coolUser', "The user was not signed up.");
    });
  });
  
  it("...should destroy the existing user.", function() {
    return Identity.deployed().then(function(instance) {
      IdentityInstance = instance
      
      return IdentityInstance.destroy();
    }).then(function() {
      // assert.equal(web3.toUtf8(userName), 'testuser', "The user was not signed up.");
    });
  });
});