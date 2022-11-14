const playersList = document.getElementById('players');

const base_url = 'https://packers-api.onrender.com/'

fetch(base_url)
.then(response => response.json())
.then(players => {
    players.forEach(player => {
        const playerName = document.createElement('div');
        const playerJN = document.createElement('li');
        const playerPosition = document.createElement('li');
        const playerHeight = document.createElement('li');
        const playerWeight = document.createElement('li');
        const playerExperience = document.createElement('li');
        const playerCollege = document.createElement('li');
        
        playerName.innerText = player.full_name;
        playerJN.innerText = player.jersey_num;
        playerPosition.innerText = player.position;
        playerHeight.innerText = player.height;
        playerWeight.innerText = player.weight;
        playerExperience.innerText = player.experience;
        playerCollege.innerText = player.college;
        
        
        playersList.append(playerName);
        playerName.append(playerJN);
        playerName.append(playerPosition);
        playerName.append(playerHeight);
        playerName.append(playerWeight);
        playerName.append(playerExperience);
        playerName.append(playerCollege);
        playerName.classList.add('card');
        
    });
})
