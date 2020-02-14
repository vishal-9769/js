let staticArray = [{ firstname: "Vishal", lastname: "Vyas" },
{ firstname: "Mehul", lastname: "Gajera" },
{ firstname: "Utsav", lastname: "Mevada" },
{ firstname: "Chirag", lastname: "Prajapati" },
{ firstname: "Gunjan", lastname: "Parekh" },
{ firstname: "Pratik", lastname: "Makadia" },
{ firstname: "Abhi", lastname: "Soni" },
{ firstname: "Sarthak", lastname: "Shah" },
{ firstname: "Harshvardhan", lastname: "Rajpurohit" },
{ firstname: "Rushi", lastname: "Bhagat" },
];

let deleteAtPosition = prompt('Enter postion:');
let fname = prompt('enter new Firstname:');
let lname = prompt('enter new Lastname:');

const deleteElement = (deleteAtPosition,fname,lname) =>{
    delete staticArray[deleteAtPosition];
    staticArray[deleteAtPosition]={firstname:fname,lastname:lname};
    
};
let i=0;
deleteElement(deleteAtPosition,fname,lname);
document.write(JSON.stringify(staticArray));
