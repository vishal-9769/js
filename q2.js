function addDashBetweenEven(number) {
    let result= [];
    for (let i=0; i<number.length; i++) {
        if (number[i]%2 == 0 && number[i+1]%2 == 0) {
            result.push(number[i],'-');
        }
        else {
            result.push(number[i]);
        }
    }
    document.write(result.join('')); 
}
let number = prompt("enter Number");
addDashBetweenEven(number);