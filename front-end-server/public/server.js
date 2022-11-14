const playersList = document.getElementById('results');
const submitButton = document.getElementById('text-button');


const base_url = 'https://packers-api.onrender.com/'


fetch(base_url)
.then(response => response.json())
.then(players => {
    players.forEach(player => {
        const playerCard = document.createElement('span');
        const deletePlayer = document.createElement('button');
        const editPlayer = document.createElement('button');
        editPlayer.innerText = 'Edit';
        deletePlayer.innerText = 'Delete';
        const playerInfo = document.createElement('div');
        playerInfo.classList.add('info');
        const playerName = document.createElement('h2');
        playerName.classList.add('full-name');
        const playerJN = document.createElement('ul');
        const playerPosition = document.createElement('ul');
        const playerHeight = document.createElement('ul');
        const playerWeight = document.createElement('ul');
        const playerExperience = document.createElement('ul');
        const playerCollege = document.createElement('ul');
        
        playerName.innerText = player.full_name;
        playerJN.innerText = 'Jersey Number: ' + player.jersey_num;
        playerPosition.innerText = 'Position: ' + player.position;
        playerHeight.innerText = 'Height: ' + player.height +'"';
        playerWeight.innerText = 'Weight: ' + player.weight + 'lbs';
        playerExperience.innerText = 'Experience: ' + player.experience;
        playerCollege.innerText = 'College: ' + player.college;
        
        playerCard.append(playerName);
        playerCard.append(playerInfo);
        playerInfo.append(playerJN);
        playerInfo.append(playerPosition);
        playerInfo.append(playerHeight);
        playerInfo.append(playerWeight);
        playerInfo.append(playerExperience);
        playerInfo.append(playerCollege);
        playerCard.append(deletePlayer);
        playerCard.append(editPlayer);
        playersList.append(playerCard);
        playerCard.classList.add('card');
        
        deletePlayer.addEventListener('click', function(){
            console.log(player.player_id);
            fetch(base_url + 'players/' + player.player_id,
            { method: 'DELETE' })
            .then(playerCard.remove())
        })
    });
})




