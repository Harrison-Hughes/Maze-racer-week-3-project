const usersURL = "http://localhost:3000/users"


window.addEventListener('DOMContentLoaded', () => {
    
    loadPlayerData();
    addEventListeners();
    
})

const addEventListeners = () => {
    document.querySelector("body h2").addEventListener('click', startGame)
}

const startGame = () => {
    canvas.style.visibility = 'visible'
    draw();
}

const loadPlayerData = () => {
}
