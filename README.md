# React Blog

This application consists in a blog developed in ExpressJS + ReactJS, using MySQL as database.

## Features

- Posts full CRUD
- English/Spanish language selector

## Installation

### Dependencies installation

React Blog requires [Node.js](https://nodejs.org/) to run.

Install the dependencies in the folder "back" and "front". They are independat applications.

```sh
npm install
```

### Database configuration

You need to set up a valid MySQL connection in the file "db" in back application.

### Start both servers

Run `npm start` in back directory to start the Express API Rest, then run `npm run dev` in front directory to start the Vite development server. Then you can access the application in port 3000. Express server will run in server 4000 as default. If the MySQL connection is correct, the database will be created automatically using Sequelize library.

## Usage

### Uploading categories

By the moment, you need to upload the categories manually. The service already exist (POST "api/categories") in back, but it's not implemented in front end. You will have to access manually to the database, or use an API CLient as Postman.

### Uploading, updating and deleting posts

In home screen, you will see all the posts stored in database. Use the button "Create new post" to upload a new one.
Each post displayed has three buttons:

- Read: to access the post full content
- Edit (pencil icon): to access to a edit form. You can update all the information of the post.
- Delete (trash icon): to permanently delete the post of the storage.

### Using images

For upload a post, you need to provide a valid image name. Test images are stored in /public/img, in the "front" directory. You can use the images there, or you can upload other images manually in this folder.
Default test images:

- travel.jpg
- travel2.jpg
- soccer.jpg
- book.jpg
- bassist.jpg
- paint.jpg
- basketball.jpg
- restaurant.jpg

### Language

Use the flags menu at top to change the language between English and Spanish.
