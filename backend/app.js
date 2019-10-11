const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: function() { return true; } }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());


const cats = require('./routes/cats');

app.use('/cats', cats);

app.listen(port, () => console.log(`Example app listen on port ${port}!`));

module.exports = app;

