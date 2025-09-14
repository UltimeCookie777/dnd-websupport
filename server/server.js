require('./api/db');
const express = require('express');
const registerRouter = require('./api/routes/register');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/db', registerRouter);

app.get('/', (req, res) => {
    res.send('Hello Wolrd!');
});

app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}`);
});