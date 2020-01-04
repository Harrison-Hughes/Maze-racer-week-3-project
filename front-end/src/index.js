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
    dropdown.append(option)
    dropdown.addEventListener("change", () => {
        playerSelected();
        personalStats(player);
    })

};

function playerSelected(){
    const info1 = document.querySelector("#info")
    const currentPlayer = document.querySelector("#name")
    currentPlayer.innerText = (select.value + " - Stats")
    
    const otherCurrentPlayer = document.querySelector("#name2")
    otherCurrentPlayer.innerText = (select1.value + " -  Stats")
    info1.append(currentPlayer, otherCurrentPlayer)
    return playerSelected

}
function personalStats(player){
    const liWins = player.matches;
    // debugger
        liWins.forEach(win => {
            win.forEach(win => allStats(win))
    })
    
    
    // return personalStats
    
}

function allStats(win){
    i = 0
    if (win === true){
        i +1
    }else{
        i +0
    }



    // const ulRatio = document.querySelector("#stats")
    // document.createElement("li")
    
    // ulRatio.append(liRatio)
}


newPlayerBtn.setAttribute("id", "button")
newPlayerBtn.innerText = "Add New Player"
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
    
    
    
    