const { response } = require("express");

const playersList = document.getElementById('results');
const submitButton = document.getElementById('text-button');



// const base_url = 'https://packers-api.onrender.com/'
const base_url = 'http://localhost:9999/'


fetch(base_url +'players')
.then(response => response.json())
.then(players => {
    players.forEach(player => {
        const playerCard = document.createElement('span');
        const deletePlayer = document.createElement('button');
        const editPlayer = document.createElement('button');
        const editPlayerBox = document.createElement('input');
        const playerInfo = document.createElement('div');
        const playerName = document.createElement('h2');
        const playerJN = document.createElement('ul');
        const playerPosition = document.createElement('ul');
        const playerHeight = document.createElement('ul');
        const playerWeight = document.createElement('ul');
        const playerExperience = document.createElement('ul');
        const playerCollege = document.createElement('ul');
        const newPlayer = document.getElementById('hire');

        
        
        editPlayer.innerText = 'Edit Weight';
        deletePlayer.innerText = 'Delete';
        playerName.innerText = player.full_name;
        playerJN.innerText = 'Jersey Number: ' + player.jersey_num;
        playerPosition.innerText = 'Position: ' + player.position;
        playerHeight.innerText = 'Height: ' + player.height +'"';
        playerWeight.innerText = 'Weight: ' + player.weight + 'lbs';
        playerExperience.innerText = 'Experience: ' + player.experience;
        playerCollege.innerText = 'College: ' + player.college;
        
        playerCard.append(editPlayer);
        playerCard.append(editPlayerBox);
        playerCard.append(playerName);
        playerCard.append(playerInfo);
        playerInfo.append(playerJN);
        playerInfo.append(playerPosition);
        playerInfo.append(playerHeight);
        playerInfo.append(playerWeight);
        playerInfo.append(playerExperience);
        playerInfo.append(playerCollege);
        playerCard.append(deletePlayer);
        playersList.append(playerCard);
        playerCard.classList.add('card');
        playerName.classList.add('full-name');
        playerInfo.classList.add('info');
        editPlayerBox.classList.add('text');
        
        newPlayer.addEventListener('click', function(){
            var newName = document.getElementById('new-name');
            var newJersey = document.getElementById('jersey');
            var newPosition = document.getElementById('position');
            var newHeight = document.getElementById('height');
            var newWeight = document.getElementById('weight');
            var newExperience = document.getElementById('experience');;
            var newCollege = document.getElementById('college');
            fetch(base_url + 'players', {method: 'POST'})
            .then()

        })

        editPlayer.addEventListener('click', function(){
            console.log(player.weight);
            var textValue = document.getElementsByClassName('text')[0].value
            console.log(textValue)
            fetch(base_url + 'players/' + player.player_id,
            { method: 'PATCH'})
            .then(player.weight = textValue)
        })

        deletePlayer.addEventListener('click', function(){
            console.log(player.player_id);
            fetch(base_url + 'players/' + player.player_id,
            { method: 'DELETE' })
            .then(playerCard.remove())
        })
        
    });
})




