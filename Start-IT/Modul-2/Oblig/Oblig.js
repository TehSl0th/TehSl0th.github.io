viewPlay();

function viewPlay() {
    document.getElementById('app').innerHTML = `
        <div>
            <div id="gamePlayButton" onclick="viewMenu()">Click to start game</div>
        </div>
    `;
}

function viewMenu() {
    document.getElementById('app').innerHTML = `
        <div id="gameMenu">
            <div id="gameMenuTitle">Game Title</div>
            <div id="gameMenuText">Name your character</div>
            <input type="text" id="gameMenuInput" onchange="temporaryPlayerName(this.value)" value="" placeholder="Hero"/>
            <div id="gameMenuButton" onclick="viewGame()">Click Me</div>
        </div>
    `;
}

function viewGame() {
    document.getElementById('app').innerHTML = `
        <div id="gameMain">
            <div id="gameMainSidebar">
                <h2>Name: ${model.player.name}</h2>
                <h2>Gold: ${model.player.gold}</h2>
                <button onclick="gameDrawInventory()">Inventory</button>
                <div> ${model.showInventory}</div>
            </div>

            <div id="gameMainPage">
                <h1>The beggining of a new adventure, your name; ${model.player.name}</h1>
                <input type="button" onclick="viewGameTestItem()" value="Test Page: Item">
                <input type="button" onclick="viewGameTestShop()" value="Test Page: Shop">
            </div>
        </div>
    `;
}

function viewGameTestItem() {
    document.getElementById('app').innerHTML = `
        <div id="gameMain">
            <div id="gameMainSidebar">
                <h2>Name: ${model.player.name}</h2>
                <h2>Gold: ${model.player.gold}</h2>
                <button onclick="gameDrawInventory()">Inventory</button>
                <div> ${model.showInventory}</div>
            </div>

            <div id="gameMainPage">
                <h1>Hello ${model.player.name}, here you can test out item functions</h1>
                <input type="button" onclick="gameItemAdd('Torch', 1)" value="Pick up Torch">
                <input type="button" onclick="gameItemAdd()" value="Use up Torch">
                <input type="button" onclick="gameCalcGoldAdd(), viewGameTestItem()" value="Give Gold">
                <input type="button" onclick="gameCalcGoldRemove(), viewGameTestItem()" value="Remove Gold">               
            </div>
        </div>
    `;
}

function viewGameTestShop() {
    document.getElementById('app').innerHTML = `
        <div id="gameMain">
            <div id="gameMainSidebar">
                <h2>Name: ${model.player.name}</h2>
                <button onclick="gameDrawInventory()">Inventory</button>
                <div> ${model.showInventory}</div>
            </div>

            <div id="gameMainPage">
                <h1>The beggining of a new adventure, your name is ${model.player.name}</h1>
            </div>
        </div>
    `;
}