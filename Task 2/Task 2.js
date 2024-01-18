let number = prompt('Enter the number of participants:');
let participantNames = [];

for (let i = 0; i < number; i++) {
    const name = prompt('Enter the participant name:');
    participantNames.push(name);
}

document.addEventListener('DOMContentLoaded', () => {
    const listContaienr = document.getElementById('container');
    let HTML = ''
    
    for (let i of participantNames) {
        HTML += `<li>${i}</li>`
    }

    listContaienr.innerHTML = HTML;
});

