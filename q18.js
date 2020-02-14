const arrayObject=[{Id : 1,name : 'Vishal', age : 23},
{Id : 2,name : 'Sarthak', age : 21},
{Id : 3,name : 'Mehul', age : 23},
{Id : 4,name : 'Harshvardhan', age : 22},
{Id : 5,name : 'Rushi', age : 24},
{Id : 6,name : 'Utsav', age : 20},
{Id : 7,name : 'Pranav', age : 20},
{Id : 8,name : 'Gunjan', age : 25},
{Id : 9,name : 'Chirag', age : 19},
{Id : 10,name : 'Pratik', age : 21},
];
document.write("<strong>Accending Order by Age:</strong>"+"<br>"+"<br>");
const accencding = arrayObject.sort((a,b) => (a.age > b.age ? 1:-1));
document.write(JSON.stringify(accencding)); 
document.write("<br>"+"<br>");
document.write("<strong>Deccending Order by Name:</strong>"+ "<br>"+"<br>");
const deccencding = arrayObject.sort((a,b) => (a.name > b.name ? -1:1));
document.write(JSON.stringify(accencding)); 