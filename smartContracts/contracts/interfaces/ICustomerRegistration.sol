// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICustomerRegistration {
    function getCustomer(
        address _customerAddress
    )
        external
        view
        returns (
            string memory name,
            string memory email,
            string memory phoneNumber,
            uint256 registrationDate,
            bool isRegistered
        );
}
