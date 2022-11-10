const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const config = require('./config.js')[process.env.NODE_ENV||"dev"]
console.log(config)
const port = config.port;

const client = new Client({
    connectionString: config.connectionString,
});

client.connect();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res)=>{
    res.send('Its working!')
})

app.get('/', (req, res)=> {
    client.query(`SELECT * FROM players`)
    .then(result =>{
        res.send(result.rows)
    })
    .catch(e=> {
        res.status(500).send(e)
    })
});

app.get('/:id', (req, res)=>{
    client.query
})





app.listen(port, () => {
    console.log(`Our app running on ${port}`)
})