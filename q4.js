
const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
}

let staticArray = [1,2,3,4,6,9,10,5];
document.write("Befor Suffel Old Array: "+ staticArray + "<br>" + "<br>");
shuffle(staticArray);
document.write("After Suffel new Array: " + staticArray);
