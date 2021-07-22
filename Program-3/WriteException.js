//creating an empty array, then looping over it until we *2 the ith value
var populate=[]
for(var i=0; i<100; i++){
populate[i]=i*2;
}
//here we are using a for/of loop to iterate over the array populate array
//Next we are going to be randomly throwing an error in the up coming loop
//if the random number generated is equal to our error number we throw an error
var x;
var errorNumber=7;

for(x of populate){
  try{
    // returns a random integer from 0 to 10
    var RandomError= Math.floor(Math.random() * 11);  
    //checking if our random number matches our error number from earlier
    (RandomError==7 ? myFunction():null)
    console.log(`${x}`)
  } catch(err){
      console.log("error caught")
  }
}
//customer error function 
function myFunction(){
  throw "Random Error";
}