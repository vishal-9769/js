
function getDiff() {
    let date1 = new Date("01/30/2018"); 
    let date2 = new Date("07/07/2019"); 
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    document.write("Total number of days between dates: "
   + Difference_In_Days);               
}            