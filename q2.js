let totalNumber = +prompt('enter Total Element:');
let arr=[];
let number;
let even
let j=1;
//let i=0;
for ( let k=0 ; k<totalNumber; k++){
    number=prompt('enter number');
     even = number.split("");
}




for ( let i = 0 ; i < even.length ; i++){

     if ( even[i] % 2 == 0 && even[j] % 2 == 0){
        arr.push(even[i] +"-"+ even[j]);
    }
    else{
        arr.push(even[i],even[j]);
    }
    j++;
}
    


document.write(arr.join(",")); 