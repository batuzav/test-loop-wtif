const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { loop } = require('./services.js');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/public')); 


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log(`Se esta escuchando en el puerto ${PORT}`);
	loop();
});
