let arr1= [11, 12, 13, 14, 15, 16];
let arr2= [11, 12, 13, 14, 17, 18, 11];
let diff_arr1 =[];
let diff_arr2 =[];
let l1 = arr1.length;
let l2 = arr2.length;
let max= 0;
document.write("Array1 : " +arr1 + '<br>')
if (l1 > l2) max =l1;
else max =l2;
for(let i = 0; i < max; i++){
    if(!arr1.includes(arr2[i])) {
        arr1.push(arr2[i]);
        diff_arr1.push(arr2[i]); 
    } 
    if(!arr2.includes(arr1[i])) {        
        diff_arr2.push(arr1[i]); 
    }
}
document.write("Array 2: " +arr2)
document.write('<br> Array2 - Array1 is: '+diff_arr1);
document.write('<br> Array1 - Array2 is: '+diff_arr2);    