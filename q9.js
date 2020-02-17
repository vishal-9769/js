
let unixTime = +prompt("enter Unix time stamp");

function unixTimeStamp(unixtime)
{
var dt = new Date(unixtime*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}

document.write(unixTimeStamp(unixTime));

