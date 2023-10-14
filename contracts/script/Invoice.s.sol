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
        vm.stopBroadcast();

        // vm.prank(address(vm.addr(1)));
        // invoice.newInvoice(address(vm.addr(1)));

        // vm.prank(address(vm.addr(2)));
        // invoice.newInvoice(address(vm.addr(2)));

        // address testAddress = address(
        //     0x0c4773Cc8aBd313F83686DB0eD6c947A7Fef01c6
        // );
        // // send eth to test address
        // vm.deal(testAddress, 1 ether);

        // // vm.prank(address(vm.addr(2)));
        // invoice.newInvoice(testAddress);
    }
}
