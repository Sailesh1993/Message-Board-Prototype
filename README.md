# Message Board Prototype
This project involves creating a Fullstack project with React on the frontend and NodeJS and Express framework on the backend. The goal is to create a single-page message board prototype with channels and messages.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#project-structure)
    - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Implementation Overview](#implementation-overview)

## Features
- Multiple named channels.
- Users can select a channel from a list.
- View messages in the selected channel.
- Submit new messages to the selected channel.
- Simple and clean user interface.

# Getting Started

### Prerequisites
- [Node.js] (https://nodejs.org/)
- [npm] (https://www.npmjs.com/)

### Installation

1. Navigation to the project directory:
    - cd Message-Board_Prototype

2. Install dependencies for backend: 
    - cd backend
    - npm install express body-parser
3. Install dependencies for frontend:
    - cd frontend
    - npx create-react-app react-board
    - npm install axios
    - npm install @mui/material @emotion/react @emotion/styled

## Usage
1. Start the frontend server.
    - cd react_board
    - npm start
    - The server will run on 'http://localhost:3000.
2. Start the backend server
    - cd backend
    - node app.js
    -'http://localhost:3001

## Project Structure
```
Message-Board_Prototype
|-- backend
|   |-- src
|   |   |-- controllers
|   |   |    |-- messageController.js
|   |   |-- model
|   |   |    |-- messageModel.js
|   |   |-- routes
|   |   |    |-- messageRoutes.js
|   |-- app.js
|   |-- package-lock.json
|   |-- package.json
|-- frontend
|   |-- public
|   |   |-- index.html
|   |-- src
|   |   |-- components
|   |   |    |-- ChannelList.js
|   |   |    |-- ChannelMessages.js
|   |   |-- App.js
|   |   |-- index.css
|   |   |-- index.js
|   |   |-- reportWebVitals.js
|   |-- package-lock.json
|   |-- package.json
|-- README.md
```

## Technologies Used
 - React
 - Axios
 - Material-UI
 - NodeJS
 - Express
 
 ## Implementation Overview

 - Implemented
    - The backend is implemented using NodeJS and Express.
    - Three main routes are implemented:  
        - GET endpoint for querying channels: http://localhost:3001/channels
        - GET endpoint for querying channel’s messages: http://localhost:3001/messages/:channel
        - POST endpoint for submitting new messages to a channel:http://locahost:3001/:channel
    - In-memory storage is used to store channels and messages.
    - The frontend is developed using React.
    - Components include ChannelList, ChannelMessages.
    - Channels are loaded on application load, and messages are loaded dynamically based on     
      channel selection.
- What's Missing or Could Be Improved
    - Better error Handling
    - Smoooth UI-Design.
    - use of real database to persist the channels and user messages
    - Authorization and authentication