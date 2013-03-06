//exercise02
var i;
var j;
var stringa = ""

for(i=1; i<=10; i++ ){
	for (j=1; j<=10; j++){
		if(j===10){
			if((i*j)<10)
			stringa += i*j+"  ";
			else
			stringa += i*j+" ";
			}
		else {
			if((i*j)<10)
			stringa += i*j+",  ";
			else
			stringa += i*j+", ";
			}
			
	}
	console.log(stringa);
	stringa="";
}