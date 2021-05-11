pragma solidity 0.5.16;

contract Accident{
	string ipfsHash;

  function setHash(string memory x) public {
    ipfsHash = x;
  }

  function getHash() public view returns (string memory) {
    return ipfsHash;
  }
}