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

//TEST TO SEE IF ITS RUNNING CORRECTLY
app.get('/test', (req, res)=>{
    res.send('Its working!')
})

//GET ALL PLAYERS
app.get('/players', (req, res)=> {
    
    client.query(`SELECT * FROM players`)
    .then(result =>{
        res.send(result.rows)
    })
    .catch(e=> {
        res.status(500).send(e)
    })
});

//GET A SPECIFIC PLAYER BY ID
app.get('players/:id', (req, res)=> {
    async function getPlayer(){
        try{
            const result = await client.query(`SELECT * FROM players WHERE player_id = ${req.params.id}`)
            if(result.row.length == 0){
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.send(result.rows)
        } catch (e){
        console.log(e.stack);
    }
    }
    getPlayer();
});

//HIRE A NEW PLAYER
app.post('/players', (req, res)=>{
    let newPlayer = (req.body);
    let full_name = newPlayer.full_name;
    let jersey_num = newPlayer.jersey_num;
    let position = newPlayer.position;
    let height = newPlayer.height;
    let weight = newPlayer. weight;
    let experience = newPlayer.experience;
    let college = newPlayer.college;
    var values = [full_name, jersey_num, position, height, weight, experience, college] 
    client.query(`INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) 
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, values)
    .then(result => {
        res.status(201).send(result.rows);
    })
    .catch(e=>{
        console.error(e.stack);
    })
})
//ADD A PLAYER
app.patch('/players/:id', (req, res)=>{
    console.log('editing')
    let newPlayer = (req.body);
    let full_name = newPlayer.full_name || '';
    let jersey_num = newPlayer.jersey_num || -1;
    let position = newPlayer.position || '';
    let height = newPlayer.height || -1;
    let weight = newPlayer. weight || -1;
    let experience = newPlayer.experience || '';
    let college = newPlayer.college || '';
    async function fixingPlayer(){
        try{
            const result = await client.query(`UPDATE players SET 
            full_name = COALESCE(NULLIF('${full_name}', ''), full_name), 
            jersey_num = COALESCE(NULLIF(${jersey_num}, -1), jersey_num), 
            position = COALESCE(NULLIF('${position}', ''), position), 
            height = COALESCE(NULLIF('${height}', -1), height), 
            weight = COALESCE(NULLIF(${weight}, -1), weight), 
            experience = COALESCE(NULLIF('${experience}', ''), experience), 
            college = COALESCE(NULLIF('${college}', ''), college)
            WHERE player_id = ${req.params.id} RETURNING *`)
            res.send(result.rows);
        }catch(e){
            console.error(e.stack);
        }

    }
    fixingPlayer();
})

//FIRE A PLAYER
app.delete('/players/:id', (req, res) => {
    async function firePlayer(){
        try{
            const result = await client.query(`DELETE FROM players WHERE player_id = ${req.params.id}`)
            res.send(result.rows);
        } catch (e){
            console.error(e.stack)
        }
    }
    firePlayer();
})



app.listen(port, () => {
    console.log(`Our app running on ${port}`)
})