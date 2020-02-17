function chopString(chunk, string) {
    let arr = [];
    let copyChunk = chunk
    for(let i = 0; i< string.length; i+=chunk) {
        arr.push(string.slice(i,copyChunk))
        copyChunk+=chunk;
    }
    document.write(arr);
}
string = prompt("enter the string");            
chunk = +prompt ("enter the chunk value");
if(chunk > string.length ) {
    alert("Chunk value must be less than length " + string.length);
    chunk = +prompt ("enter the chunk value");
}else if (chunk == "") {
    alert("please enter chunk value");
    chunk = +prompt ("enter the chunk value");
}
chopString(chunk, string)