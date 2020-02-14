let date=prompt("enter date in yyyy-mm-dd format");
let d = new Date(date);

let month = d.getMonth();
console.log(month);
let monthArray=["January","February","March","April","May","June","july","August","September","Octomber","November","December"];
document.write("Current Month: "+monthArray[month]);



