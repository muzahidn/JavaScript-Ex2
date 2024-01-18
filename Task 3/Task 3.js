let dogsName = [];

for (let i = 0; i < 6; i++) {
    const name = prompt('Enter the dog name:');
    dogsName.push(name);
}

document.addEventListener('DOMContentLoaded', () => {
    const listContaienr = document.getElementById('container');
    let HTML = ''
    
    for (let i of dogsName.reverse()) {
        HTML += `<li>${i}</li>`
    }

    listContaienr.innerHTML = HTML;
});

