# Tastemate

Tastemate is a mobile web application to upload recipes and exchange meals with your neighbors. Featuring a matching system akin to Tinder. I built this app from scratch.


## Getting started:
1. Clone the repo:

   ```bash
      git clone https://github.com/xavierfapa/tastemate
      cd tastemate
    ```
2. Obtain Cloudinary API Key and API Secret:

   - After creating your account, navigate to Settings (bottom left corner).
   - You will find the Cloudinary Name (bottom left corner), under Product Environment.
   - Click on the "Access Keys" section to find your API Key and API Secret.
3. Set .env in server folder:
   ```env
      DB_NAME=your DB name
      DB_HOST=your host
      PORT=your DB port

      CLOUDINARY_CLOUD_NAME=your cloudinary name
      CLOUDINARY_API_KEY=your cloudinary api key
      CLOUDINARY_API_SECRET=your cloudinary api secret
   ```
4. Set .env.local in client folder:

   ```env
      VITE_APP_URL=your server url
   ```
5. Install the dependencies and run the server:

   ```bash
      cd server && npm install
      npm start
    ```
6. Install the dependencies and run the client:

   ```bash
      cd client && npm install
      npm run dev
    ```

## Tech stack:

Tastmate uses:
- [React.js](https://react.dev/) as frontend framework
- [React Context](https://react.dev/reference/react/createContext) for state management
- [TypeScript](https://www.typescriptlang.org/) language
- [Vite](https://vitejs.dev/) as build tool
- Vanila [CSS](https://www.css3.com/) 
- [Express](https://expressjs.com/) for backend server
- [MongoDB](https://www.mongodb.com/) as database
- [Mongoose](https://mongoosejs.com/) as ORM

## Author:

Xavier Fàbrega: [GitHub](https://github.com/xavierfapa/) - [Linkedin](https://www.linkedin.com/in/xavierfabregapascual/)
