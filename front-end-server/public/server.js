const main = document.getElementById('main');
const submitButton = document.getElementById('text-button');
const newPlayer = document.getElementById('hire');

const base_url = 'https://packers-api.onrender.com/'
// const base_url = 'http://localhost:9999/'

function createCards(){
    const playersList = document.getElementById('results');
    fetch(base_url +'players')
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {
            const playerCard = document.createElement('span');
            const deletePlayer = document.createElement('button');
            deletePlayer.id = 'delete';
            const editPlayer = document.createElement('button');
            editPlayer.id = 'edit';
            const editPlayerBox = document.createElement('input');
            const playerInfo = document.createElement('div');
            const playerName = document.createElement('h2');
            const playerJN = document.createElement('ul');
            const playerPosition = document.createElement('ul');
            const playerHeight = document.createElement('ul');
            const playerWeight = document.createElement('ul');
            const playerExperience = document.createElement('ul');
            const playerCollege = document.createElement('ul');
            
    
            
            
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
            editPlayerBox.classList.add('weightText');

        editPlayer.addEventListener('click', function(){
            var textValue = document.getElementsByClassName('weightText')[0].value
            console.log(textValue)
            fetch(base_url + 'players/' + player.player_id,{
                method: 'PATCH',
                body: JSON.stringify({
                    weight: textValue,
                }),
                headers: {
                    'Content-type': 'application/json'
                    },
                })
                .then((response) => response.json())
                .then(createNewCard());
        })

    //fire player
        deletePlayer.addEventListener('click', function(){
            fetch(base_url + 'players/' + player.player_id,
            { method: 'DELETE' })
            .then(playerCard.remove())
        })

    });
    })
}


newPlayer.addEventListener('click', function(){
    var newName = document.getElementById('new-name');
    newName = newName.value;
    var newJersey = document.getElementById('jersey');
    newJersey = newJersey.value;
    var newPosition = document.getElementById('position');
    newPosition = newPosition.value;
    var newHeight = document.getElementById('height');
    newHeight = newHeight.value;
    var newWeight = document.getElementById('weight');
    newWeight = newWeight.value;
    var newExperience = document.getElementById('experience');
    newExperience = newExperience.value;
    var newCollege = document.getElementById('college');
    newCollege = newCollege.value;
    const requestPost = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            full_name: newName,
            jersey_num: newJersey,
            position: newPosition,
            height: newHeight,
            weight: newWeight,
            experience: newExperience,
            college: newCollege})
    }
    console.log(requestPost);
    fetch(base_url +'players', requestPost)
    .then(response => response.json())
    .then(data =>{
        createNewCard();
    })
})

function createNewCard(){
    var playersList = document.getElementById('results');
    playersList.remove();
    playersList = document.createElement('div');
    playersList.id = 'results';
    main.append(playersList);
    createCards();
}
createCards();



