const userDetails =[{id : 1, name : "abc" , Age : 25, hobbies : ['reading','writing','drawing']},
{id : 1, name : "xyz" , Age : 26, hobbies : ['reading','travelling','dancing']},
{id : 1, name : "pqr" , Age : 24, hobbies : ['travelling','writing','drawing']},
{id : 1, name : "uvw" , Age : 21, hobbies : ['reading','music','singing']},
{id : 1, name : "efg" , Age : 22, hobbies : ['dancing','writing','singing']},];
function getListByHobbies(userDetails){
let map = new Map();
let user=[];
for(let i=0;i<userDetails.length;i++)
{
for(let j=0;j<userDetails[i].hobbies.length;j++)
{
if(map.has(userDetails[i].hobbies[j]))
{
user = map.get(userDetails[i].hobbies[j]);
user.push(userDetails[i].name);
map.set(userDetails[i].hobbies[j],user);
}
else{
let user=[];
user.push(userDetails[i].name);
map.set(userDetails[i].hobbies[j],user);
}                    
}
}
return map;
}       
let arrayMap = getListByHobbies(userDetails);


for ( let key of arrayMap.keys()){
    document.write("<strong>"+key+"</strong>")
    document.write("<br>")
    document.write(arrayMap.get(key));
    document.write("<br>")
}

