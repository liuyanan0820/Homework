var ctx=document.getElementById('myCanvas').getContext("2d");
ctx.translate(200,20);
for(var i=1;i<50;i++){
	ctx.save();
	ctx.transform(0.95,0,0,0.95,30,30);
	ctx.rotate(Math.PI/12);
	ctx.beginPath();
	ctx.fillStyle='rgba(255,0,0,'+(1-(i+10)/40)+')';
	ctx.arc(0,0,50,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}
