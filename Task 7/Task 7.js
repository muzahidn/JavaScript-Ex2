let results = [];

const min = 1;

function diceRolling(diceSide) {
    const diceNumber = Math.floor(Math.random() * (diceSide - min + 1)) + min;
    return diceNumber;
}

function main() {
    const diceSide = parseInt(prompt('Enter '));
    while (true) {
        const dice = diceRolling(diceSide);
        if (dice === diceSide) {
            break;
        }
        results.push(dice);
    }
    const listContaienr = document.getElementById('container');
    let HTML = ''

    for (let i of results) {
        HTML += `<li>${i}</li>`
    }

    listContaienr.innerHTML = HTML;
}

main();