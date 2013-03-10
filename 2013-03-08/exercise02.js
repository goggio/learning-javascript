/**
 * @author goggio
 */
//exercise02

function exercise02(n){
	var naturals=[];
	
	
	
	//exercise02a
	for(var i=1;i<=n;i++){
		var num = Math.round( 1000*Math.random());
		naturals.push(num);
	}
	
	//exercise02b
	var odd = naturals.filter(function(item,index,array){
		return ((item%2)!==0)
	})
	
	//exercise02c
	var compare = function(value1,value2){
		return value1-value2;
	};
	odd.sort(compare);
	
	return odd;
	
	
}