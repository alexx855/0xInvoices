// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {Invoice} from "../src/Invoice.sol";

contract InvoiceScript is Script {
    Invoice public invoice;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        new Invoice();

        // Send some eth to these test address 
        vm.deal(address(0xc120A2aB2bE848F334E5777A7A4600d899aBC956), 1 ether);
        vm.deal(address(0xbE8727E5e87aFc90F3fdA82b37fA4062d52c5e35), 1 ether);
        vm.stopBroadcast();
    }
}
