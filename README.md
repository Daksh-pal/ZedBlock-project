
# Deployment

Run the following command to clone the repository.
 
 ``` bash
 https://github.com/Daksh-pal/Zedblock-todo.git
 ```

 Go to frontend
 ```bash
cd frontend
npm install
```
Go to backend
```bash
cd backend
npm install
```
Create a ".env" file and define the following keys
```bash
MONGO_URI = your MongoDB database URL
PORT =your port number
JWT_SECRET =your JSON web token secret key
```


Go to backend and frontend directory and start the server
```bash
cd backend
nodemon server.js
```
```bash
cd frontend
npm start
```
