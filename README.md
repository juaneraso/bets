# Acertemos technical test

Technical test of a rest full API, using Node.js,express and mongoDB 

## Getting Started

You will need the env variable MONGODB_CNN to connect to the database.

### Prerequisites
 
- Node.js


### Setup project 


```bash
 $ npm install 

 $ cp .env.example .env
```
You will need to update the value of MONGODB_CNN in the new .env file.

### Running the App 

```bash
 $ npm run start:dev
```

### API endpoints 

- GET /bets/productos/ 
- GET /bets/productos/:id
- POST /bets/productos/
- PUT /bets/productos/:id
- DELETE /bets/productos/:id