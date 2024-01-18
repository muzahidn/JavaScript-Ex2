let numbers = [];

while (true) {
    const number = parseInt(prompt('Enter the number:'));
    if (number === 0) {
        break;
    }
    numbers.push(number);
}
const newArray = numbers.sort((a, b) => b - a);
newArray.forEach(data => console.log(data));
