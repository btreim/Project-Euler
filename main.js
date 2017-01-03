// problem 1

var sum = 0; 
var i; 

for(i = 1; i < 1000; i++){
	if((i % 3 === 0) || (i % 5 === 0)){
		sum += i; 
	}
}

console.log(sum);

// Problem 2 

var fib = []; 
var i; 
var sum = 0; 

fib[0] = 0;
fib[1] = 1; 

for(i = 2; i < 300; i++){
  fib[i] = fib[i-1] + fib [i-2];
    if(fib[i] < 4000000 && fib[i] % 2 === 0){
      sum += fib[i];
    }
}

console.log(sum);