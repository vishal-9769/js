let arr=[];
for( let i=97 ; i <=122; i++){
    let s=String.fromCharCode(i);
    arr.push(s);
}
let ne =[];
for( let j=0; j<=arr.length; j+=2)
{
    ne.push(arr[j]);
    
}
document.write(ne);