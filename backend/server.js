const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/')
    .then(() => {
        console.log('Connected to DB');
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use(cors());
app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('server running at port: ' + port);
});
