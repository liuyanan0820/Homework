window.onload=function(){
	var list=document.getElementById('list');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
}
function animate(offset){
	var newLeft=parseInt(list.style.left)+offset;
	list.style.left=newLeft+'px';
	if(newLeft<-2500){
		list.style.left=-500+'px';
	}
	if(newLeft>-500){
		list.style.left=-2500+'px';
	}
}
prev.onclick=function(){
	animate(500);
}
next.onclick=function(){
	animate(-500);
}
var timer;
function play(){
	timer=setInterval(function(){
		next.onclick()
	},8400)
}
play();
var boxshow=document.getElementsByClassName('boxshow');
function stop(){
	clearInterval(timer);
}
boxshow.onmouseover=stop;
boxshow.onmouseout=play;
var buttons=document.getElementById('buttons').getElementsByTagName('span');
var index=1;
function buttonsShow(){
	for(var i=0;i<buttons.length;i++){
		if(buttons[i].className=='on'){
			buttons[i].className='';
		}
	}
	buttons[index - 1].className='on';
}
prev.onclick=function(){
	index-=1;
	if(index<1){
		index=5;
	}
	buttonsShow();
	animate(500);
}
next.onclick=function(){
	index+=1;
	if(index>5){
		index=1;
	}
	buttonsShow()
	animate(-500);
}
for(var i=0;i<buttons.length;i++){
	(function(i){
		buttons[i].onclick=function(){
			var clickIndex=parseInt(this.getAttribute('index'));
			var offset=500*(index-clickIndex);
			animate(offset);
			index=clickIndex;
			buttonsShow();
		}
	})
	(i)
}
