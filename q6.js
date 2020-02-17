let arr= [];
function arrayFill(start, end, step) {
    try {
        if(step <= 0) {
            throw "Value of step must be positive and greater than 0";
        }
        else if (end <= start) {
            throw "value of end must be greater than starting value"
        }
        else {
            if (typeof start == "string" && typeof end == "string") {
                if (start.length == 1 && end.length ==1) {
                    while(start.charCodeAt(0) <= end.charCodeAt(0)) {
                        arr.push(start);
                        start = String.fromCharCode(start.charCodeAt(0) + step);
                    }
                    document.write(arr);
                }
                else {
                    throw "String must be only one character";
                }
            }                   
        }
    }
    catch(e) { 
        alert (e);
    }
}
let startIndex = prompt("enter the Start Index");
let endIndex = prompt("enter the End Index");
let step = +prompt("enter the Step value");
arrayFill(startIndex, endIndex, step);