function allPlayers() {
    fetch(usersURL)
    .then(resp => resp.json())
    .then(data => eachPlayer(data));
}

function eachPlayer(player){
    player.forEach(p => {
        dropDownMenu(p)
    })
}

function dropDownMenu(p) {
    const dropMenu = document.querySelector('.dropbtn')
    const option = document.createElement('option')
    option.innerText = p.name

    dropMenu.append(option)
}