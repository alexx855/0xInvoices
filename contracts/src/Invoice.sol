// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

error NotOwner();
error EmptyEncryptedData();

contract Invoice is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 private _nextTokenId;
    string private _baseInvoiceURI = "https://0x-invoices.vercel.app/api/metadata/";

    // Event emitted when a new invoice is created
    event InvoiceCreated(address indexed owner, uint256 indexed tokenId);

    mapping(uint256 => bytes) private _encryptedData;
    mapping(uint256 => bytes) private _encryptedKey;
    constructor()
        ERC721("LitInvoice", "LINV")
        Ownable(msg.sender) 
    {}

    // set the base URI
    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseInvoiceURI = baseURI;
    }

    function getBaseInvoiceURI() public view returns (string memory) {
        return _baseInvoiceURI;
    }

    function getOwner(uint256 tokenId) public view returns (address) {
        return ownerOf(tokenId);
    }

    // return encrypted data and key for tokenId
    function getInvoiceData(uint256 tokenId) public view returns  (bytes memory, bytes memory) {
        // only the owner can view the data
        if (msg.sender != ownerOf(tokenId)) {
            revert NotOwner();
        }

        return (_encryptedData[tokenId], _encryptedKey[tokenId]);
    }

    // store the encrypted data for tokenId
     function _setTokenEncryptedData(uint256 tokenId, bytes memory encryptedData) internal {
        _encryptedData[tokenId] = encryptedData;
    }

    // store the encrypted key for tokenId
    function _setTokenEncryptedKey(uint256 tokenId, bytes memory encryptedKey) internal {
        _encryptedKey[tokenId] = encryptedKey;
    }

    // create new invoice with encrypted data
    function createInvoice(bytes memory encryptedData, bytes memory encryptedKey) public {
        if (encryptedData.length == 0 || encryptedKey.length == 0) {
            revert EmptyEncryptedData();
        }
        
        uint256 tokenId = _nextTokenId++;
        string memory metadataURI = string(abi.encodePacked(_baseInvoiceURI,  Strings.toString((tokenId))));
       
        _safeMint(msg.sender, tokenId);
        _setTokenEncryptedData(tokenId, encryptedData);
        _setTokenEncryptedKey(tokenId, encryptedKey);
        _setTokenURI(tokenId, metadataURI);

        emit InvoiceCreated(msg.sender, tokenId);
    }

    // The following functions are overrides required by Solidity.
    
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}