/**
 * @author goggio
 */
//exercise01

function identity(n){
	var i;
	var j;
	var stringa = ""

	for(i=1; i<=n; i++ ){
		for (j=1; j<=n; j++){
			
			if(j===n){
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
}

//esempio con n=4
identity(4);