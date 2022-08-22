const playerArray = [];

function selectPlayer(playerBtn){
 
    const PlayerName = playerBtn.parentNode.parentNode.children[0].innerText;

    const ol = document.getElementById('player');
   
    const playerlist = document.createElement('li');
    playerlist.innerText = PlayerName;

    ol.appendChild(playerlist);
}