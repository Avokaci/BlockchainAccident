pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

contract Accident {
  string[] ipfsHashes;

  function set(string[] memory hash) public {
    ipfsHashes = hash;

  }

  function get() public view returns (string[] memory) {
    return ipfsHashes;
  }
}
