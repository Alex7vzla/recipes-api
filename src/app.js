// Dependencies
const express = require('express');
const cors = require('cors');
const db = require('./utils/database');
// Files
const {port} = require('./config');
// Routes
const userRouter = require('./users/users.router');
const authRouter = require('./auth/auth.router');
const initModels = require('./models/initModels');
const categoryRouter = require('./categories/categories.routes');
const recipesRouter = require('../src/recipes/recipes.routes');
const ingredientsRouter = require('../src/ingredients/ingredients.router');

// Initial Configs
const app = express();
app.use(express.json());
app.use(cors());

// Database initialization
db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

initModels();

app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('./api/v1/recipes', recipesRouter);
app.use('./api/v1/ingredients', ingredientsRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});

