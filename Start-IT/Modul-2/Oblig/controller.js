function gamePlayerNameChange(name) {
    model.player.name = name;
}

function gameCalcGoldAdd() {
    foundGold = (4 + Math.floor(Math.random()*16));
    playerGold += foundGold;
}

function gameCalcGoldRemove() {
    lostGold = (4 + Math.floor(Math.random()*16));
    playerGold -= lostGold;
    if (playerGold < 0) {
        playerGold = 0
    }
}

function gameDrawInventory() {
    let html = ""
    for (let i = 0; i < model.player.inventory.length; i++) {
        html += `<li>item: ${model.player.inventory[i].item} count: ${model.player.inventory[i].count}</li>`;
    }
    model.showInventory = html;
    viewGame();
}

function gameItemAdd(item,count) {
    for (let i = model.player.inventory.length - 1; i >= 0; --i){
        if (model.player.inventory[i].item == item){
            console.log("added");
            return model.player.inventory[i].count += count;
        }
    }
    model.player.inventory.push({item,count}), console.log("pushed")
}

function gameItemCleanup() {
    for (let i = model.player.inventory.length - 1; i >= 0; --i) {
    if (model.player.inventory[i].count < 1) {
        model.player.inventory.splice(i,1);}
    }
}

function gameItemTorchAdd() {}
function gameItemTorchRemove() {}