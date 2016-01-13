$(document).ready(function() {
	$('p:last').attr('id', 'sp');
	$('p:first').remove();
	$('div:first').css({"background-color":"gray","color":"white"});
 });

var num="";
for (var j=0;j<2;j++)
{
	for (var i=0;i<7;i++)
	{
		num = num + Math.floor(Math.random()*39+1) + " ";
		
	}
	console.log(num);
	num = "";
}