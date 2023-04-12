function fibonacci(num) {
// your code here
	let firstNum=0;
	let secondNum=1;
	let temp;
	int ans=0;
	if(num==1){
		ans=firstNum;
	}else if(num==2){
		ans=secondNum;
	}else{
		for (let index = 3; index <= num; index++) {
			temp=secondNum;
			secondNum=firstNum+secondNum;
			firstNum=temp;	
		}
		ans=secondNum;
	}
	return ans;
}

module.exports = fibonacci;
