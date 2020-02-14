let totalNumberOfElement = +prompt('Enter Total number of Element for Both Array:');
let array1=[];
let array2=[];
let unionArray=[];
for ( let i = 0; i< totalNumberOfElement; i++){
    let elemOfFirstArray=+prompt(`Enter ${i} element:`);
    array1[i]=elemOfFirstArray;
}

for ( let i = 0; i< totalNumberOfElement; i++){
    let elemOfSecondArray=+prompt(`Enter ${i} element:`);
    array2[i]=elemOfSecondArray;
}

const unionOfArray = (arr1,arr2) =>{
    for ( let i=0; i<arr1.length ; i++){
        for ( let j =0; j<arr2.length; j++){
            if (!arr1[i].includes(arr2[j])){
                unionArray.push(arr[i]);
            }
        }
    }
}
unionOfArray(array1,array2);
document.write(unionArray);