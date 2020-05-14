const express = require('express');
const server = express();
const bodyParser = require('body-parser')
const path = require('path');
const index = require('./routes/index');
const cors = require('cors');

server.use(express.static(path.join(__dirname, 'build')));
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/ping', function (req, res) {
 return res.send('pong');
});

server.use('/', index);

server.listen(process.env.PORT || 3001);