# Sample node.js service

Node.js service that provides the two API endpoints (to get comments and posts) from an external API "".

## Installation

To install the project, you need to follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the server.

## Endpoints

The following endpoints are available on the API:

- 'GET /api/comments'
Retrieves comments from the external API.

Optional query parameters:
limit: Limits the number of comments returned in the response. If not provided, the default limit is 10.

- 'GET /api/posts'
Retrieves posts from the external API.

Optional query parameters:
limit: Limits the number of posts returned in the response. If not provided, the default limit is 10.


## Contributors

- [Emediong Amos](https://github.com/Emeamos)
