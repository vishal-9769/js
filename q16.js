let rupeeArray = [];
let thousand= rupee => {
    let position = rupee.length % 3;
    if(position == "0") {
        position = 3;
    } 
        for(i=0; i<rupee.length; i+=3) {
        if( i == 0 ){
            rupeeArray.push(rupee.slice(0,position)+ ",");
            i += position;
        }
        rupeeArray.push(rupee.substr(i,3)+ ",");     
    }   
};
let rupee = prompt("enter Ruppee");
thousand(rupee);
document.write(rupeeArray.join("").slice(0, -1)); 