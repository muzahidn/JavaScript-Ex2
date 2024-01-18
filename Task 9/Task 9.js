function even(originalArray) {
    let evenArray = [];

    for (let i of originalArray) {
        if (i % 2 === 0) {
            evenArray.push(i);
        }
    }
    return evenArray;
}

const myNumbers = [2, 7, 4];
const evenNumbers = even(myNumbers);

console.log('Original Array: ', myNumbers);
console.log('Even Numbers Array: ', evenNumbers);