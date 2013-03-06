//exercise03
var i;
var j;
var stringa = ""

for(i=1; i<=10; i++ ){
	for (j=1; j<=10; j++){
		if(j===10){
			if(i===j)
			stringa += 1+"  ";
			else
			stringa += 0+"  ";
			}
		else {
			if(i===j)
			stringa += 1+",  ";
			else
			stringa += 0+",  ";
			}
			
	}
	console.log(stringa);
	stringa="";
}