//var dataset = [5, 10, 15, 20, 25];
var name = "";
var height;
var weight;
var obj = [];


function getAttr () 
{	
	d3.csv("presidents.csv", function(error,rows) {
		    obj = data.map(function(d) { return [ d["Name"], +d["Height"], +d["Weight"] ]; });
	});
  
  getHgtWgt();
  
	
}

function getHgtWgt () 
{

name = document.getElementById("presname").value;
	
	d3.select('p')
		.text("Height: " + obj.length)
		.append('p')
		.text("Weight: " + name);
	
	
}

 


 



 