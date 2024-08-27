# LoopBox Platform Project

## Overview

The LoopBox Platform is a web-based application designed to support the circular economy by facilitating the exchange of resources and information among businesses. This README outlines the project's directory structure and provides a brief description of each file and folder's purpose within the project.

## Project Structure

### Root Directory

- **/client**: Contains all frontend code, built with React.
- **/server**: Contains all backend code, using Node.js and potentially Express.js for the framework.
- **README.md**: This file, providing an overview and documentation for the project.
- **package.json**: Manages project dependencies and scripts for Node.js.

### Client (Frontend)

- **/public**
  - **index.html**: The main HTML file served to visitors.
  - **favicon.ico**: The icon that appears in the browser tab.
- **/src**
  - **/assets**
    - **/images**: Static images used across the frontend.
    - **/styles**: Global stylesheets for the application.
  - **/components**: Reusable React components.
    - **/common**: General components like buttons and inputs.
    - **/layout**: Components for layout such as headers and footers.
    - **/user**: User-related components like profile forms.
    - **/project**: Project-specific components, e.g., project lists.
  - **/contexts**: Contexts for React state management.
  - **/hooks**: Custom React hooks for shared logic.
  - **/pages**: Components representing full pages.
  - **/services**: Services for making API calls.
  - **App.js**: Root React component that includes routing.
  - **index.js**: Entry point for React, renders the App component.
  - **package.json**: Frontend-specific dependencies and scripts.

### Server (Backend)

- **/config**: Configuration settings, like database connections.
- **/controllers**: Functions to handle requests based on the route.
- **/middleware**: Middleware functions for request processing.
- **/models**: Data models for the application's database.
- **/routes**: Route definitions that connect to controllers.
- **/services**: Business logic separate from controller logic.
- **/utils**: Utility functions for common tasks.
- **index.js**: The main server file that starts the backend application.
- **package.json**: Backend-specific dependencies and scripts.

## Getting Started

1. **Prerequisites**: Ensure Node.js and npm are installed.
2. **Installation**: Run `npm install` in both `/client` and `/server` directories to install dependencies.
3. **Running the Application**:
   - For the frontend, navigate to `/client` and run `npm start`.
   - For the backend, navigate to `/server` and run `npm run dev` (assuming a script for nodemon or similar).

## Contribution Guidelines

- **Feature Development**: Use feature branches, named appropriately for the feature or fix being developed.
- **Code Reviews**: Merge requests should be reviewed by at least one other team member before merging into the main branch.
- **Issues**: Use the GitHub issues tracker to manage bugs and feature requests.

## Additional Documentation

- **API Documentation**: Located in `/server/docs`, outlining available endpoints and usage.
- **Component Documentation**: Comments within component files in `/client/src/components` describe the purpose and usage of each component.

## Contact

For more information on contributing to the LoopBox Platform project, please contact:

- **Aziz Ali**: Full-stack developer - azizali@kth.se
- **Alexander Järvheden**: Project leader & Fullstack developer - jarvh@kth.se