// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract Twitter is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(string => address) public peoples;

    constructor()
        payable
        ERC721(
            "Testing ETH India Twitter Contract - Frontend-1",
            "ETH-INDIA-TEST"
        )
    {
        console.log("Twitter Contract Initilized...");
    }

    function register(string calldata url, string memory user_name) public {
        require(peoples[user_name] == address(0), "NFT already Minted!!");

        peoples[user_name] = msg.sender;
        uint256 newRecordId = _tokenIds.current();
        _safeMint(msg.sender, newRecordId);
        _setTokenURI(newRecordId, url);
        _tokenIds.increment();
    }
}
