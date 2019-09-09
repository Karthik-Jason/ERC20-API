const express = require('express');
const app = express();

const supremeRouter = require('./supremeRouter');

app.use(express.json());
app.use('/supreme',supremeRouter);

app.listen(3000,() => console.log('listening to 3000 port'));