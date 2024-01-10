// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract CrypTube {
    // Declaring the videoCount 0 by default
    uint256 public videoCount = 0;
    // Name of your contract
    string public name = "CrypTube";
    // Creating a mapping of videoCount to Video
    mapping(uint256 => Video) public videos;

    // Create a struct called 'Video' with the following properties:
    struct Video {
        uint256 id;
        string hash;
        string title;
        string description;
        string location;
        string category;
        string thumbnailHash;
        string date;
        address author;
    }

    // Create a 'VideoUploaded' event that emits the properties of the video
    event VideoUploaded(
        uint256 id,
        string hash,
        string title,
        string description,
        string location,
        string category,
        string thumbnailHash,
        string date,
        address author
    );

    constructor() {
        console.log("Deploying CrypTube");
    }

    // Function to upload a video
    function uploadVideo(
        string memory _videoHash,
        string memory _title,
        string memory _description,
        string memory _location,
        string memory _category,
        string memory _thumbnailHash,
        string memory _date
    ) public {
        // Validating the video hash, title and author's address
        require(bytes(_videoHash).length > 0, "Video hash must be provided");
        require(bytes(_title).length > 0, "Title must be provided");
        require(msg.sender != address(0), "Sender address must be valid");

        // Incrementing the video count
        videoCount++;
        // Adding the video to the contract
        videos[videoCount] = Video(
            videoCount,
            _videoHash,
            _title,
            _description,
            _location,
            _category,
            _thumbnailHash,
            _date,
            msg.sender
        );
        // Triggering the event
        emit VideoUploaded(
            videoCount,
            _videoHash,
            _title,
            _description,
            _location,
            _category,
            _thumbnailHash,
            _date,
            msg.sender
        );
    }
}