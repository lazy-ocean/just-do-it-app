<p align="center"><a href="https://justdoltapp.herokuapp.com/" rel="noopener noreferrer" target='_blank'><img width=55% src="./app/public/img/Just Do It App Card.png"></a></p>

A basic todo app: create your account or try as a guest, add, edit and delete your tasks. Supports dark and light theme.

## Link

**[Just Do It App](https://justdoltapp.herokuapp.com/)** on Heroku.

> Might be openning a bit slow due to Heroku specifics.

## Stack and used technologies

- [React.js](https://reactjs.org/): frontend
- [Express.js](https://expressjs.com/): server and basic api
- [React-Router](https://reacttraining.com/react-router/core/guides/philosophy): in-app routing
- [Heroku](https://www.heroku.com/): deploy

## Work in progress

This is a work in progress! I am or soon will be working on:

- [ ] Server errors handling
- [ ] Splitting tasks by categories
- [ ] On-the-go password validation and more compex user profile
- [ ] Cleaner animations
- [ ] Databases integration
- [ ] Tests

...and maybe something more

## Deployment on your computer

1. Clone this repo

2. Run `npm start` to start the Express app

```
$ cd just-do-it-app
$ npm run start
```

3. Run `npm start` from the _app_ directory to start the React app

```
$ cd app
$ npm run start
```

4. Your app is served at http://localhost:3000/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/1200px-Antu_dialog-warning.svg.png" alt="Just Do It Logo" title="warning" align="left" height="30" />Some files are hidden as secrets: session secret key, salt for password encryption and users' storage.  
If you're running a local version, add this params to .env file to the root of your project:

```
echo 'SECRET_KEY=<your key>' >> .env
echo 'SALT=<your key>' >> .env
```
