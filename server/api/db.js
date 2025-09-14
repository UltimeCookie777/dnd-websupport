require('dotenv').config();
const registerRouter = require('./routes/register');
const mongoose = require('mongoose');
const db = mongoose.connection;


mongoose.connect(process.env.DATABASE_URL, {});

mongoose.set('strictQuery', true);
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('DB up'));