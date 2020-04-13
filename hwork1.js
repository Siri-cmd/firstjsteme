//1.display in the console the numbers from 1 to 20
var i = 1;						
   while (i<=20) {					
   console.log(i);					
   i++;								
   }

//2.display in the console the odd numbers from 1 to 20
var i = 1;  						 
 while (i<=20){ 					
   if (i % 2 === 1){ 				
     console.log(i);			   
   }
    i++;       						 
 }	
 
//3.compute the sum of the elements of an array and display it in the console
var scala = [50, -3, -19, 121, 7, 45, 0, 74, 10, -54]

function sumOfNumbers(scoreList) { 
  var i = 0;						
  var sum = 0;						
  while (i < scoreList.length) {    
    sum = sum + scoreList[i];		
    i++;							
  }
  return sum;
}
console.log(sumOfNumbers(scala));

//4.compute the maximum of the elements of an array and display it in the console
var scala = [50, -3, -19, 121, 7, 45, 0, 74, 10, -54]

function maxOfNumbers(scoreList) { 
   var max = scoreList[0]; 
  for (var i = 1; i < scoreList.length; i++) { 
    if (scoreList[i]>max) {  
      max=scoreList[i];  
    }
  }
  return max;
}
console.log(maxOfNumbers(scala));

//5.compute how many times a certain element appears in an array
var scala = [50, -3, -19, 121, 7, 45, 0, 74, 10, 45]

function lookUpNumber(scoreList, lookedUpNo) { 
   var count = 0; 
  for (var i = 0; i < scoreList.length; i++) { 
        if (scoreList[i]===lookedUpNo) {
      count = count + 1; 
    }
  }
  return count; 
}
console.log(lookUpNumber(scala, 45));

//Challenge
//using nested for generate the following pattern

function myMatrix(n) { 
    var matrics = []; 
    for (var i=0; i<n; i++) {
      matrics[i] = [];  
        for (var j=0; j<n; j++) {
            if((i%2===0 && j%2===1)||(j%2===0 && i%2===1)){ 
              matrics[i][j]=1;          
            }else{
             matrics[i][j]=0;
            }
        }
    }
  return matrics;
}

function printMat(matrix){
    for (var i=0; i<matrix.length; i++) {
      console.log(matrix[i]);       
    } 
}
console.log(printMat(myMatrix(4)));
// sper ca am inteles cerinta la challange.
