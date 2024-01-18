let numbers= [];

for (let i = 0; i < 5; i++) {
    const number = prompt('Enter a number:');
    numbers.push(number);
}

console.log('Array in reverse order:')
for (let i = 4; i >= 0; i--) {
    console.log(numbers[i]);
}