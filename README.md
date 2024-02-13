# URLSnip - URL Shortener

## Overview

URLSnip is a contemporary URL shortening and tracking service designed to simplify link management and provide insights into link usage. This project encompasses user authentication, URL shortening, tracking click statistics, and managing user profiles.

## Features

- **URL Shortening:** Quickly shorten long URLs for easy sharing and tracking.
- **User Authentication:** Secure user accounts with login and signup features.
- **History Tracking:** Keep track of shortened URLs, including original links, click counts, and creation dates.
- **User Profiles:** Personalized experience with user profiles and logout functionality.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pkmanas22/URL-Shortner.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd url-shortner
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a .env file:**
   ```bash
   cp .env.example .env
   ```
   Then, open the .env file in a text editor and customize the following variables according to your preferences:
   
   `MONGO_URL: MongoDB connection URL.`

   `PORT: Port number for the server.`

   `SECRET_KEY: Secret key for JWT token encryption.`
   
5. **Start the server:**
   ```bash
   npm start
   ```
5. **Start the server with Nodemon (for development):**
   ```bash
   npm run dev
   ```
6. **Access the Application:**

   Open your web browser and go to `http://localhost:[PORT]/`.

## Usage

**Login or Register:**

- Create an account or log in to start using URLSnip.

**Shorten URLs:**

- Enter a long URL in the input field and click "Shorten Now!"

**View History:**

- Check your history for details on shortened URLs, including original links, click counts, and creation dates.

**Redirect to Original URLs:**

- Click on shortened links to redirect to the original URL.

**Logout:**

- Securely logout when finished.

## Project Structure

- **views:** EJS templates for dynamic HTML rendering.
- **public:** Static files (CSS, images, JS) for the front-end.
- **routers:** Express route handlers for different sections.
- **models:** MongoDB models for data storage.
- **middlewares:** Custom middleware for authentication and authorization.
- **controllers:** Functions handling different aspects of the application logic.
- **index.js:** Main entry point for the Express application.

## Dependencies

- **express:** Web application framework for Node.js.
- **ejs:** Embedded JavaScript templating for dynamic HTML.
- **mongoose:** MongoDB object modeling tool.
- **cookie-parser:** Middleware for parsing cookies.
- **nodemon:** Development tool for automatic server restarts.
- **jsonwebtoken:** JSON Web Token implementation.
- **short-id:** Library for generating short and unique IDs.
- **uuid:** Library for creating unique identifiers.

## Notes

- Ensure MongoDB is installed and running.
- Customize the application to match your branding and preferences.
- Contributions, issue reports, and suggestions are welcome!
- Feel the ease of managing your links with URLSnip!
