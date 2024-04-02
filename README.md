# Pegasi API technical test

Using MEAN stack

- MongoDB version **^6.5.0**
- Express version **^4.19.2**
- NodeJS version **21.5.0**
- AngularJS version **17.1.0**
- TypeScript version **^2.6.2**

## For front end client:
 [pegasi-frontend](https://github.com/Jinara/pegasi-frontend)

## Installation

Install pegasi-api with npm

```bash
  npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Jinara/pegasi-api
```

Go to the project directory

```bash
  cd pegasi-api 
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
    


## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### POST user
```http
  POST /api/users
```

#### Put user
```http
  PUT /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update|




## Acknowledgements

 - [Followed this repo as example](https://github.com/IT-Labs/MEAN-Stack)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Using Joi for validations](https://joi.dev/api/?v=17.12.2)
