# No-SQL-social-network-api ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description: 
This project uses No-SQL-Database to create a social network api using mongoose and express. 

## Table of Contents:

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Instructions](#instructions)
* [Technology](#technology)
* [License](#license)
* [Questions](#questions)
* [Walk Through](#walk-through)

## User Story:
    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria: 
    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia Core for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia Core
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

If you wish to run this code locally:
* clone repo from GitHub and run `git clone <url copied from respository>`
* run `npm install`
* run `npm start` to start the server


## Technology

* JavaScript
* Node.js
* Express.js
* MongoDb
* Mongoose

## License

This project is licensed under MIT

## Questions

* Created by Jessica Sheleg
* [Project Repository](https://github.com/JSheleg/no-sql-social-network-api)
* [GitHub Portfolio](https://github.com/JSheleg)

## Walk Through

* UsersRoot: [/users](https://drive.google.com/file/d/1u_JBjPFvzul7EG9L3NPh2HdY9Uw39GeC/view)
* UsersById[/users/:id](https://drive.google.com/file/d/1_fmPGJxCx7Ikk3Icb3vz-ZyT2eUQCot6/view)
* UserFriends[/users/:id/friends/:friendsId](https://drive.google.com/file/d/1bK9czgnNBouy-9b4BFGISvzvKOy08m07/view)
* ThoughtRoot[/thoughts](https://drive.google.com/file/d/1WBGun61D7AjndQ6V82n1EFSGk2cfagPF/view)
* ThoughtsById[/thoughts/:id](https://drive.google.com/file/d/1Sf9Q198O0WaIIqSul6bELbPoLK7xACQL/view)
* CreateReaction[thoughts/:thoughtId/reactions](https://drive.google.com/file/d/1wJg-sTLDJJK2Q0lN5jXP_bHvDjPwEFpf/view)
* DeleteReaction[/thoughts/:thoughtId/reactions/:reactionId](https://drive.google.com/file/d/1hzXHr66hNjLoLiJBq6zFPOTap9FlvC1Z/view)
