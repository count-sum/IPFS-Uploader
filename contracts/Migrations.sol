pragma solidity ^0.5.0;


contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  /// classic migrations
  constructor() public {
    owner = msg.sender;
  }

  /// completed integer
  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  /// new_address Ethereum address for new migration
  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
