const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRouter = require('./routes/vote');
const cors = require('cors');


mongoose.connect('mongodb://localhost/votingApp', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then (() => console.log('Connected to Db ..'))
.catch(err => console.error('Failed to connect ..', err))


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use('/', indexRouter);


app.listen(process.env.PORT || 4000, () => console.log('Server listening on port 4000'))