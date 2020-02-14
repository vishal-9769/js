let staticArray = [1,4,3,2,3,4,9,4,39,9,1,2,9,7,8,9];
let count = 0;
let frequentElement;
let mostFrequent = 1;
const findFrequentElement = array =>
{
    
    for ( let i = 0 ; i < array.length ; i++){
        for (let j=i; j < array.length ; j++){
            if ( array[i] == array[j])
                count++;
                if (mostFrequent < count){
                    mostFrequent=count;
                    frequentElement=array[i];   
                }
        }
        count=0;
    }
    
}
findFrequentElement(staticArray);
document.write("Array:" + staticArray + "<br>" + "<br>");
document.write("Frequent element is : ", frequentElement+ "<br>"+"Total Occurence is : " + mostFrequent);