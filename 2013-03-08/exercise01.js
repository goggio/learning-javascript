/**
 * @author goggio
 */
//exercise01
function exercise01(n){
	var naturals=[];
	var temp=n;
	var ritorno=[];
	var somma=[];
	//exercise01a
	for(var i=1;i<=n;i++){
		
		naturals.push(temp);
		temp= temp-1;
	}
	naturals.reverse();
	
	//exercise01b
	var even = naturals.filter(function(item, index, array){
 	return (!(item%2));
	});
	
	//exercise01c
	var doubleNumber = naturals.map(function(item, index, array){
    return item * 2;
    });
    
    //exercise01d
    ritorno = doubleNumber.filter(function(item, index, array) {
    return ((item%4)===0);
    });
    
    //exercise01e
    somma= doubleNumber.filter(function(item, index, array) {
    return ((item%4)!==0);
    });
    
    somma=somma.reduce(function(prev, cur, index, array){
    return prev + cur;
    });

    return ritorno;
}







