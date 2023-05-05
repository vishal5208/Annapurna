// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IHotelRegistration {
    enum HotelRegistrationStatus {
        Pending,
        Approved,
        Rejected
    }

    function getHotelOwnerData(
        address _hotelOwnerAddress
    )
        external
        view
        returns (
            string memory,
            string memory,
            address,
            string memory,
            uint256,
            uint256,
            HotelRegistrationStatus
        );
}
