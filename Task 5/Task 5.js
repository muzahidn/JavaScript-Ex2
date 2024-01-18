let numbers = [];

function promptForNumber() {
    while (true) {
        let userInput = parseInt(prompt("Enter a number:"));

        if (numbers.includes(userInput)) {
            alert('number has already been given');
            break
        }
        numbers.push(userInput);
    }
    const newArray = numbers.sort((a, b) => a - b);
    newArray.forEach(data => console.log(data));
}

promptForNumber();
