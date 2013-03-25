/**
 * @author goggio
 */

//exercise01
function Point2D(x,y){
	this.x=x;
	this.y=y;
}

//exercise02a
function Edge(p1,p2){
	this.p1=p1;
	this.p2=p2;
}


//exercise02b
Edge.prototype.length = function () {
  return Math.SQRT(Math.pow((this.p1.x-this.p2.x),2)+Math.pow((this.p1.y-this.p2.y),2));
};

//exercise03a
function Trinagle(ed1,ed2,ed3){
	this.ed1=ed1;
	this.ed2=ed2;
	this.ed3=ed3;
}


//exercise03b
Trinagle.prototype.perimeter=function(){
	
	
	return this.ed1.length()+this.ed2.length()+this.ed3.length();
}

//exercise04
Trinagle.prototype.area=function(){
	var p=(this.perimeter()/2);
	
	return Math.sqrt(p*(p-this.ed1.length())*(p-this.ed2.length())*(p-this.ed3.length())); 
}


