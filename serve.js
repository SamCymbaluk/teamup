const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./api/routes');
const port = 80;

dotenv.config();

const app = express();
const db = require('./api/util/postgres');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes(db));

app.use(express.static(path.join(__dirname,  '/dist/teamup')));

app.listen(port, () => console.log(`Express started on port ${port}`));
