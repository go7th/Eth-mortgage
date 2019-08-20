pragma solidity ^0.5.8;

contract Hello {
    function sayHi() public returns (string memory) {
        return "hello world";
    }
    function echo(string memory name) public returns (string memory) {
        string memory newname = name;
        return newname;
    }
}
