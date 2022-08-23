// Calculate per player budget
document.getElementById('player-calculate').addEventListener('click', function () {
    const players = playerLength();
    const PerPlayerBudget = getInputValue('player-budget');
    const totalPlayerBudget = document.getElementById('total-player-budget');
    if (PerPlayerBudget) {
        const total = players * PerPlayerBudget;
        totalPlayerBudget.innerText = total;
    } else {
        alert('please give player budget in the box');
    }
});

// Calculate total budget
document.getElementById('total-calculate').addEventListener('click', function () {
    const totalPlayerBudget = getInnerText('total-player-budget');
    const manager = getInputValue('manager');
    const coach = getInputValue('coach');
    const totalCost = document.getElementById('total');
    if (manager && coach) {
        const total = totalPlayerBudget + manager + coach;
        totalCost.innerText = total;
    } else {
        alert('please give budget in the box');
    }
});