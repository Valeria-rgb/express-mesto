const express = require('express');
const app = express();
const path = require('path');
const usersRouter = require('./routes/users');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`);
});
