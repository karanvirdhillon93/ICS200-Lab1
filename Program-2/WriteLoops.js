//creating an empty array, then looping over it until we *2 the ith value
var populate=[]
for(var i=0; i<100; i++){
populate[i]=i*2;
}

//here we are using a for/of loop to iterate over the array populate array
var x;
for(x of populate){
  console.log(`x of ${x}`)
}
