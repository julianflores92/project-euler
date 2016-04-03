
function euler1(){
	var total=0;
	num = document.getElementById("p1_input");
	for(i=0;i<num.value;i++){
		if(i%3==0||i%5==0){
			total+=i;
		}
	}
	document.getElementById('results1').innerHTML = total;
}

function euler2(){
	var fib1=1;
	var fib2=2;
	var total=0;
	var max=document.getElementById("p2_input");
	var nextFib=fib2;

	for(i=fib2;i<max.value;i=nextFib){
		if(i%2==0){
			total+=i;
		}
		nextFib+=fib1;
		fib1=fib2;
		fib2=nextFib
	}
	document.getElementById('results2').innerHTML = total;
}

function euler3(){
	var number = document.getElementById("p3_input");
	var factor = 1;
	isPrime = true;
	for(i=2;i<number.value;i++){
		if(number.value%i==0){
			isPrime=true;
			for(j=2;j<i;j++){
			   if(i%j==0){
			   	isPrime = false;
			   }
			}
			if(i>factor && isPrime == true){
				factor=i;
				isPrime=true;
			}
		}
	}
	
	if(number.value!=1 && factor==1){
		factor=number.value;
	}
	document.getElementById('results3').innerHTML = factor;
}