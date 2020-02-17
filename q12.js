let mainStr = prompt("enter Main string");
let subStr = prompt("enter new string you want to add");
let postion = prompt("enter postion where you want to add new string");

function addString(mainstring, insstring, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(insstring) == "undefined") {
     insstring = '';
   }
    return mainstring.slice(0, pos) + insstring + mainstring.slice(pos);
 }
 document.write("<strong>Main String:</strong>"+mainStr);
document.write("<br>");
 document.write("<strong>New String With subString :</strong>" + "<br>")
 
document.write( addString(mainStr,subStr,postion));