Project Setup

Since this project utilizes cookies for authentication, you need to create a .env file to store sensitive information, such as the JWT_SECRET. Steps to Set Up the .env File:

Create a .env file in the root directory of the server (if it doesn't already exist).

Add the following environment variable to the .env file:

JWT_SECRET=your_secret_key_here

Replace your_secret_key_here with a strong, secure secret key used for signing JWT tokens and refresh the server.

Ensure that the server is able to read environment variables by using the dotenv package (which should already be included in the server dependencies).


---


🚀 Server Setup

    Navigate to the server directory:

cd server

    Install server dependencies:

npm install

    Start the server:

npm run dev

💻 Client Setup

    Navigate to the client directory:

cd client

    Install client dependencies:

npm install

    Start the client:

npm run dev

🔥 Both server and client run with npm run dev — make sure to start both for full functionality!


---


Core Features

*  User Authentication
  
*  Register, Login, Logout
  
*  Change password functionality (refactored to TypeScript with modals)
  
*  Form validation with real-time feedback (e.g., fields turn red on incorrect input)
  
*  CRUD Operations
  
*  Create, Read, Update, Delete content/items
  
*  Fully functional with proper validation and error handling
  
*  User Interaction
  
*  Comments and reviews on products (refactored to TypeScript with modals)
  
*  Personalized user space/dashboard to manage products
  
*  Likes on items (users can like items they didn’t create)
  
*  Live Chat
  
*  Real-time messaging between users using Socket.io
  
*  Persistent chat history
  
*  User nicknames
  
*  Simple and intuitive UI (minimize/expand chat window)
  
*  Works seamlessly with existing app features
  
*  Responsive Design

*  Works well on desktop and mobile devices

---

✨ New Features

-  Video Feature
  
-  Upload videos directly from PC
  
-  Videos stored in a server-side upload folder
  
-  Automatically added to a video catalog
  
-  Delete videos (with modals for confirmation)
  
-  Likes on Items
  
-  Users can like items (only those they haven’t created)
  
-  Single-click like functionality
