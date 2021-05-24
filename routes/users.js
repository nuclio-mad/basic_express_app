var express = require('express');
var angelrouter = express.Router();

const fs = require('fs')

/* GET users listing. */
angelrouter.get('/:userName', function(req, res) {
  const data = fs.readFileSync(`./database/${req.params.userName}.json`, {encoding: 'utf-8'})
  const dataParsed = JSON.parse(data)
  console.log('el tipo de dato de lo que hemos leido es: ',typeof data);
  console.log('el tipo de dato de lo que hemos leido y parseado es: ',typeof dataParsed);
  res.json(dataParsed)
});

angelrouter.post('/', function(req, res) {
  const {user, task} = req.body;
  fs.writeFileSync(`./database/${user}.json`, JSON.stringify([task]))
  res.json({success: 'Data correctamente insertado'});
});

module.exports = angelrouter;
