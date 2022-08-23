// PlayerName
function getPlayerName(event) {
    const parentDiv = event.target.parentNode;
    const playerName = parentDiv.querySelector('h2').innerText;
    selectedPlayer('selected-player', playerName, event.target);
}

// AddSelectedPlayer
function selectedPlayer(id, player, btn) {
    const selectedPlayerParent = document.getElementById(id);

    if (playerLength() < 5) {
        const li = document.createElement('li');
        li.innerText = player;
        selectedPlayerParent.appendChild(li);
        btn.setAttribute('disabled', '');
    } else {
        alert('Your five players has been selected');
    }
}

// PlayerLength
function playerLength() {
    const selectedPlayerParent = document.getElementById('selected-player');
    console.log(selectedPlayerParent.querySelectorAll('li').length);
    const selectedPlayerLength = selectedPlayerParent.querySelectorAll('li').length;
    return selectedPlayerLength;
}

// InputValue
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    const number = parseFloat(inputValue);
    return number;
}

//  InnerText 
function getInnerText(id) {
    const innerText = document.getElementById(id);
    const getInnerText = innerText.innerText;
    const number = parseFloat(getInnerText);
    return number;
}