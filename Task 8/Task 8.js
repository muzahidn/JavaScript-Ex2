function concat(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

const myArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const concatenatedString = concat(myArray);
document.body.innerHTML = `<h1>${concatenatedString}</h1>`;