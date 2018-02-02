var map;
var food;
var snake;
var timer;
var sum=0;
function Map(){
	this.width=800;
	this.height=500;
	this.color='#dddddd';
	this.position='absolute';
	this._map=null;
	this.show=function(){
		this._map=document.createElement('div');
		this._map.style.width=800+'px';
		this._map.style.height=500+'px';
		this._map.style.position=this.position;
		this._map.style.background=this.color;
		document.getElementsByTagName('body')[0].appendChild(this._map);
	};
}
function Food(){
	this.width=20;
	this.height=20;
	this.color='orange';
	this.position='absolute';
	this._food=null;
	this.x=0;
	this.y=0;
	this.show=function(){
		if(this._food==null){
			this._food=document.createElement('div');
			this._food.style.width=20+'px';
			this._food.style.height=20+'px';
			this._food.style.position=this.position;
			this._food.style.background=this.color;
			map._map.appendChild(this._food);
		}
		this.x=Math.floor(Math.random()*40);
		this.y=Math.floor(Math.random()*20);
		this._food.style.left=this.x*20+'px';
		this._food.style.top=this.y*20+'px';
	};
}
function Snake(){
	this.width=20;
	this.height=20;
	this.position='absolute';
	this.direct='';
	this.body=[[3,2,'pink',null],[2,2,'yellow',null],[1,2,'yellow',null]];
	this.setDirect=function(code){
		switch(code)
            {
                case 37:
                    this.direct='left';
                    break;
                case 38:
                    this.direct='up';
                    break;
                case 39:
                    this.direct='right';
                    break;
                case 40:
                    this.direct='down';
                    break;
            }
	}
	this.show=function(){
		for(var i=0;i<this.body.length;i++){
			if(this.body[i][3]==null){
			   this.body[i][3]=document.createElement('div');
			   this.body[i][3].style.width =20+'px';
			   this.body[i][3].style.height=20+'px';
			   this.body[i][3].style.position=this.position;
			   this.body[i][3].style.background=this.body[i][2];
			   map._map.appendChild(this.body[i][3]);
		   }
		   this.body[i][3].style.left=this.body[i][0]*this.width+'px';
           this.body[i][3].style.top=this.body[i][1]*this.height+'px';
       }
	}
    this.move = function(){
        var length = this.body.length-1;
        for(var i=length;i>0;i--){
            this.body[i][0]=this.body[i-1][0];
            this.body[i][1]=this.body[i-1][1];   
        }
        switch(this.direct){
            case 'right':
                this.body[0][0]=this.body[0][0]+1;
                break;
            case 'down':
                this.body[0][1]=this.body[0][1]+1;
                break;
            case 'left':
                this.body[0][0]=this.body[0][0]-1;
                break;
            case 'up':
                this.body[0][1]=this.body[0][1]-1;
                break;
            default:
                return;
        }
	    if(this.body[0][0]==food.x&&this.body[0][1]==food.y){
		   var x=this.body[length][0];
		   var y=this.body[length][1];
		   sum++;
		   document.title='分数'+sum+'分';
		   this.body.push([x,y,'yellow',null]);
		   food.show();
	    }
	    if(this.body[0][0]<0||this.body[0][0]>39||this.body[0][1]<0||this.body[0][1]>24){
		   alert('撞墙死了，游戏结束');
		   clearTimeout(timer);
		   return;
	    }
	    for(var i=1;i<this.body.length;i++){
           if(this.body[0][0]==this.body[i][0]&&this.body[0][1]==this.body[i][1]){
              alert('自杀死了，游戏结束');
              clearTimeout(timer);
              return;
            }
        }
	    this.show();
    }
}
window.onload=function(){
	map=new Map();
	map.show();
	food=new Food();
	food.show();
	snake=new Snake();
	snake.show();
	timer=setInterval('snake.move()',100);
	document.onkeydown=function(){
		var code;
		if(window.event){
			code=window.event.keyCode;
		}
		else{
			code=event.keyCode;
		}
		snake.setDirect(code);
	};
}