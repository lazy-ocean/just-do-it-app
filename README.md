<p align="center"><a href="https://justdoltapp.herokuapp.com/" rel="noopener noreferrer" target='_blank'><img width=55% src="./app/public/img/Just Do It App Card.png"></a></p>

A basic todo app: create your account or try as a guest, add, edit and delete your tasks. Supports dark and light theme.

## Link

**[Just Do It App](https://justdoltapp.herokuapp.com/)** on Heroku.

> Might be openning a bit slow due to Heroku specifics.

## Stack and used technologies

- [React.js](https://reactjs.org/): frontend
- [Vite](https://vitejs.dev/): build tool and dev server
- [Express.js](https://expressjs.com/): server and basic api
- [React-Router](https://v5.reactrouter.com/): in-app routing
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

```bash
cd just-do-it-app
```

2. Install dependencies

Install dependencies for both the root project and the app directory:

```bash
# Install root dependencies
yarn install

# Install app dependencies
cd app
yarn install
cd ..
```

3. Set up environment variables

Some files are hidden as secrets: session secret key, salt for password encryption and users' storage.  
If you're running a local version, create a `.env` file in the root of your project:

```bash
# Generate SECRET_KEY (32 bytes = 64 hex characters)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate SALT (16 bytes = 32 hex characters)
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

Add the generated values to your `.env` file:

```bash
echo 'SECRET_KEY=<your-generated-secret-key>' >> .env
echo 'SALT=<your-generated-salt>' >> .env
```

Or create the `.env` file manually:

```
SECRET_KEY=<your-generated-secret-key>
SALT=<your-generated-salt>
```

4. Run the application

Start both the Express server and the React development server with one command:

```bash
yarn dev
```

This will start:
- Express server on http://localhost:4000
- Vite dev server on http://localhost:3000

Your app will be available at http://localhost:3000/

**Alternative:** Run servers separately in different terminals:

```bash
# Terminal 1: Express server
yarn start

# Terminal 2: React app (from root directory)
yarn dev:client
```

5. Production build

To build the React app for production:

```bash
yarn build
```

Then start the production server:

```bash
yarn start
```

The Express server will serve the built React app from `app/build/`.
