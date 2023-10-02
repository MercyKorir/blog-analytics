# Blog Analytics and Search Tool

This is a Blog Analytics and Search Tool Built with Express.js, Node.js and lodash that allows you to analyze blog data and search for blogs by keywords.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Caching](#caching)
- [Contributing](#contributing)
- [License](#license)

## About

This project is a web application that fetches and analyzes blog data from a third-party API. It provides insights into blog statistics and offers a search functionality to filter blogs based on keywords. The application utilizes caching to improve response times for repeated requests.

## Features

- Fetch and display blog analytics.
- Search for blogs by keywords.
- Utilize caching to improve performance.

## Getting Started

To set up the project and run it on your local machine, do the following.

### Prerequisites

- [Node.js](https://nodejs.org) installed on your computer
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Installation

1. Clone the repository:
   `git clone https://github.com/MercyKorir/blog-analytics.git`

2. Navigate to the project directory:
   `cd blog-analytics`

3. Install the project dependencies:
   `npm install`

### Usage

1. Start the Express Server:
   `npm start`

2. Make cURL request to the API endpoints:
   `curl --request GET --url http://localhost:5050/api/blog-stats`

   and

   `curl --request GET --url http://localhost:5050/api/blog-search?query=<your_keyword e.g privacy>`

   e.g `curl --request GET --url http://localhost:5050/api/blog-search?query=privacy`

  or

2. Use API Platforms such as [Postman](https://www.postman.com/) to make requests:
   `http://localhost:5050/api/blog-stats`

   and

   `http://localhost:5050/api/blog-search?query=<your_keyword>`

   e.g `http://localhost:5050/api/blog-search?query=privacy`

  or

2. Open you browser and navigate to the url:
   `http://localhost:5050/api/blog-stats`

   and

   `http://localhost:5050/api/blog-search?query=<your_keyword>`

   e.g `http://localhost:5050/api/blog-search?query=privacy`

## Caching

This project uses caching to store and retrieve analytics results and search results for a certain period. The caching mechanism ensures that the same requests made within the caching period return cached results instead of re-fetching and re-analyzing the data.

## Author

[Mercy Korir](https://github.com/MercyKorir)