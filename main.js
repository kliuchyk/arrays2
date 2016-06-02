document.getElementById('runFunction').onclick = function fibo(n){
	var f1=1, f2=1;
	var n = document.getElementById('num').value; 
	for(var i=2;i<n;i++){
		var F=f1+f2;
		f1=f2;
		f2=F;
	}
	document.getElementById('result').value=F;
	return F;
}

document.getElementById('reset').onclick = function clearFields() {
	document.getElementById('num').value = '';
	document.getElementById('result').value = '';
}