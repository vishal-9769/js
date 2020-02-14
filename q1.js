// question 1
let arr=[];
let n= +prompt('Enter number of Elemet you want');
for (let i=0; i<=n ; i++)
{
    let arr1= +prompt(`enter element${i}:`);
    arr[i]=arr1;
}
for (let j=0; j<=arr.length-1 ; j++)
{
    document.write(arr[j]+",");
}

let el=[];
let elem = +prompt('Enter number of element ');
const getElement = (n) =>{
  
    if ( n == null){
        return el= [arr[0],arr[arr.length-1]];
    }
    else{
        return el=[arr.slice(0,elem),arr.slice(arr.length - elem)];
    }

}

let ans=getElement(elem);
document.write("<br>");
document.write(`first ${elem} and Last ${elem} elements: `+ans);