# Nodejs Load Balancer
Express-based load balancer utilizing cluster module with a round-robin routing approach

## About
Whilst working on other projects, I usually found myself having to write user login/signup logic so I created a boilerplate to
speed things up. I made this one with simplicity in mind as a lot of API Boilerplates for user management seemed too complex for my
use cases.

## Running the Project
Clone the Repo.
Make sure you have latest version of Node.js installed.

### Install Dependencies
```
npm install
```
```
npm install artillery -g
```

### Start Server
```
npm start
```

### Run Tests
CD to root of the project
```
artillery run test.yml
```
