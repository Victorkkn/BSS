let i = 0;
let divisor = 3;

while(i<10000){
	if(i % divisor===0){
		console.log(`${i} é divisível por ${divisor}`);

	}else{
		console.log(`${i} não é divisível por ${divisor}`);
	}
	i=i+1
}