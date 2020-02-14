const userDetails =[
    {id : 1, name : "abc" , Age : 25, hobbies : ['reading','writing','drawing']},
    {id : 1, name : "xyz" , Age : 26, hobbies : ['reading','travelling','dancing']},
    {id : 1, name : "pqr" , Age : 24, hobbies : ['travelling','writing','drawing']},
    {id : 1, name : "cid" , Age : 21, hobbies : ['reading','music','singing']},
    {id : 1, name : "did" , Age : 22, hobbies : ['dancing','writing','singing']},];
/* let arr=[];
for (let i=0; i< userDetails.length ; i++)
{
    for (let j=1 ; j< userDetails.length;j++){
        if (userDetails[i].hobbies[i] == userDetails[j].hobbies[i]){
            arr.push(userDetails[j].name);
      }
    }
    
}
 */
/* console.log(userDetails[0].hobbies[0]);
console.log(userDetails[1].hobbies[1]);*/
 
//for ( let i =0 ; i < userDetails.length ; i++){
const createGroup = userDetails.reduce((a,b) => (a.hobbies == b.hobbies ? -1:1));
//}
console.log(createGroup); 


