pragma solidity ^0.5.0;

// Test setter and getter
contract small_Test_Contract {

    string public someString;

    constructor() public {

    }

    function setSomeString(string memory _someString) public {
        someString = _someString;
    }

}
