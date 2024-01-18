let results = [];

const max = 6;
const min = 1;

function diceRolling() {
    const diceNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return diceNumber;
}

function main() {
    while (true) {
        const dice = diceRolling();
        if (dice === 6) {
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