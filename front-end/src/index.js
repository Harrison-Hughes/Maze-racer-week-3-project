document.addEventListener('DOMContentLoaded', function(){
    allPlayers();
})

const select = document.querySelector('select')
const select1 = document.querySelector('#select1')
const menus = [select,select1]
const menusBlock = document.querySelector('#dropdowns')
const newPlayerBtn = document.createElement('button');

function allPlayers() {
    fetch(usersURL)
    .then(resp => resp.json()) 
    .then(data => eachPlayerGenerator(data, menus));
};

function eachPlayerGenerator(player, menus){
    menus.forEach(dropdown => {
        player.forEach( player => dropDownMenu(player,dropdown))
    })
};

function dropDownMenu(player, dropdown) {
    const option = document.createElement('option')
    option.innerText = player.name
    option.value = player.name
    dropdown.append(option)


};

menusBlock.addEventListener("change", e => {
    const playerId = parseInt(e.target.selectedIndex)
    const fromDropdown = e.target.parentNode.name
    console.log(fromDropdown)
    // debugger
    getUser(playerId)
    .then(player => {
        if (fromDropdown === "form2") {
            playerSelected(e.target,"",player);
            
        } else {
            playerSelected(e.target,"2",player);
            
        }

    })


    // playerSelected(getUser(playerId))
    // personalStats(player);
})

const getUser = id => {
    return fetch(usersURL+"/"+id)
    .then(resp => resp.json())
}

function playerSelected(select,name, player){
    const info1 = document.querySelector("#info")
    const stat = document.querySelector(`#stats${name}`)
    const currentPlayer = document.querySelector(`#name${name}`)
    currentPlayer.innerText = (select.value + " Statistics")
    stat.innerText = personalStats(player)
    
    // const otherCurrentPlayer = document.querySelector("#name2")
    // otherCurrentPlayer.innerText = (select1.value + " Statistics")
    info1.append(currentPlayer)
    // return playerSelected

}
function personalStats(player){
    const liWins = player.matches 
    const filteredWins = liWins.filter(win => win.win === true)
    const avg = filteredWins.length / liWins.length
    
    // debugger
        return avg*100

        // console.log(filteredWins)
            
    }
    
    
    // return personalStats
    


// function winStats(win){
//     const playerWin = win.win
//         if (playerWin == true)
    // const li = win.matches.map (|m| m.win ? 1 : 0)
    

    

    // const ulRatio = document.querySelector("#stats")
    // document.createElement("li")
    
    // ulRatio.append(liRatio)



newPlayerBtn.setAttribute("id", "button")
newPlayerBtn.innerText = "Create Player"
menusBlock.appendChild(newPlayerBtn);
newPlayerBtn.addEventListener("click", () => {
    newPlayerBtn.disabled = true;
    newField()
})

function newField(){
    const player_info = document.createElement("input");
    player_info.setAttribute("id", "new-entry")
    player_info.setAttribute("type", "text");
    player_info.setAttribute("placeholder", "TYPE YOUR NAME...");
    document.body.appendChild(player_info);
    
    const submit = document.createElement("button")
    submit.innerText = ("Submit")
    submit.setAttribute("class", "btn-success")
    document.body.appendChild(submit)
    
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        submit.disabled = true;
        const newName = player_info.value 
        
        fetch(usersURL, {
            method: "POST",
            
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: newName,
            })
        })
        .then(resp => resp.json())
        .then(name => {eachPlayerGenerator(name, menus)})
        // .then(()=>{
            //     document.querySelector("#new-entry").reset();
            // })
        })
        
    }   
    
    
    
    
    // function disableOppositeMenu(){
    //     const firstSelection = select.value
    //     const secondSelection = select1.value
    //         if (firstSelection === secondSelection) {
    //             secondSelection.disabled = true;
    //         } else {
    
    //         }
    // }
    
    
    
    
    // User.second.matches.map {|m| m.win ? 1 : 0}