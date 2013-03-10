/**
 * @author goggio
 */

//exercise04
function select(data, key, arrays){
	var arr= []; 
	data.forEach(function(item,index,array){
		for (var i=0;i<arrays.length;i++){
			if(item[key]===arrays[i]){
				arr.push(item);			
			}
		}
	})
	return arr;
}
