# Tastemate

Tastemate is a mobile web application to upload recipes and exchange meals with your neighbors. Featuring a matching system akin to Tinder. I built this app from scratch.


## Getting started:
1. Clone the repo:

   ```bash
      git clone https://github.com/xavierfapa/tastemate
      cd tastemate
    ```

2. Set .env in server folder:
   ```env
      DB_NAME= your DB name
      DB_HOST= your host
      PORT= your DB port
   ```
3. Set .env.local in client folder:

   ```env
      VITE_APP_URL= your server url
   ```
4. Install the dependencies and run the server:

   ```bash
      cd server && npm install
      npm start
    ```
5. Install the dependencies and run the client:

   ```bash
      cd client && npm install
      npm run dev
    ```

## Tech stack:

tindArt uses:
- [React.js](https://react.dev/) as frontend framework
- [React Context](https://react.dev/reference/react/createContext) for state management
- [TypeScript](https://www.typescriptlang.org/) language
- [Vite](https://vitejs.dev/) as build tool
- [CSS] vanila CSS
- [Express](https://expressjs.com/) for backend server
- [MongoDB](https://www.mongodb.com/) as database
- [Mongoose](https://mongoosejs.com/) as ORM

## Author:

Xavier Fàbrega: [GitHub](https://github.com/xavierfapa/) - [Linkedin](https://www.linkedin.com/in/xavierfabregapascual/)
