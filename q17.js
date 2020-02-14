
const creatTable = () =>{
    let rowno= +prompt('enter number of row:');
    let colno= +prompt('enter no of coloumn:');
    for (let i=0 ; i < rowno ; i++){
        let  table = document.getElementById("tab").insertRow(i);
    for (let j=0; j < colno ; j++){
            let a=table.insertCell(j);
            a.innerHTML="row-"+i+" "+"col-"+j;
        }
    }
}
 
