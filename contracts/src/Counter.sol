// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract FarcasterPoints {
    address[] public users;
    mapping(string => uint256) public totalChannelPoints;
    mapping(address => string[]) public channels;
    mapping(address => mapping(string => uint256)) public channelPoints;

    function updatePoints(
        address _user,
        string[] memory _channelId,
        uint256[] memory _points
    ) public {
        require(_channelId.length == _points.length, "Invalid input");
        for (uint256 i = 0; i < _channelId.length; i++) {
            if (!channelExists(_user, _channelId[i])) {
                addChannel(_user, _channelId[i]);
            }
            channelPoints[_user][_channelId[i]] = _points[i];
        }
        if (!userExists(_user)) {
            users.push(_user);
        }
    }

    function getPoints(
        address _user,
        string[] memory _channelId
    ) public view returns (uint256[] memory) {
        uint256[] memory points = new uint256[](_channelId.length);
        for (uint256 i = 0; i < _channelId.length; i++) {
            points[i] = channelPoints[_user][_channelId[i]];
        }
        return points;
    }

    function getChannelPoints(
        address _user,
        string memory _channelId
    ) public view returns (uint256) {
        return channelPoints[_user][_channelId];
    }

    function getChannels(address _user) public view returns (string[] memory) {
        return channels[_user];
    }

    function addChannel(address _user, string memory _channelId) public {
        require(!channelExists(_user, _channelId), "Channel already exists");
        channels[_user].push(_channelId);
    }

    function calculateTotalChannelPoints(string memory _channelId) public {
        uint256 totalPoints = 0;
        for (uint256 i = 0; i < users.length; i++) {
            totalPoints += channelPoints[users[i]][_channelId];
        }
        totalChannelPoints[_channelId] = totalPoints;
    }

    function getTotalChannelPoints(
        string memory _channelId
    ) public view returns (uint256) {
        return totalChannelPoints[_channelId];
    }

    function channelExists(
        address _user,
        string memory _channelId
    ) public view returns (bool) {
        for (uint256 i = 0; i < channels[_user].length; i++) {
            if (
                keccak256(abi.encodePacked(channels[_user][i])) ==
                keccak256(abi.encodePacked(_channelId))
            ) {
                return true;
            }
        }
        return false;
    }

    function userExists(address _user) public view returns (bool) {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i] == _user) {
                return true;
            }
        }
        return false;
    }
}
