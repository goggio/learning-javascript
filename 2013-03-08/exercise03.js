/**
 * @author goggio
 */
//exercise03

//exercise03a
function capitalize(stringa){
	var stringaCap=stringa[0].toUpperCase()+stringa.slice(1,stringa.length);
	return stringaCap;
	}
	
	
//exercise03b
function capitalizeText(text){
	for(var i=1;i<=text.length;i++){
		if(text[i]===" "&& i!==text.length-2){
			text=text.slice(0,i+1)+text[i+1].toUpperCase()+text.slice(i+2,text.length);
			}
	}
	return text;
}
