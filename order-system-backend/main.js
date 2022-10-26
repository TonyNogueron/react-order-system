const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const cors = require('cors');

const order = require('./routes/order');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', order);

app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));

