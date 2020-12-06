pragma solidity ^0.5.0;

contract Accident {
  string name;

  function set(string memory _name) public {
    name = _name;
  }

  function get() public view returns (string memory) {
    return name;
  }
}
