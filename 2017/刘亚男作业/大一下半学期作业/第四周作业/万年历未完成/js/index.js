var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","候","鸡","狗","猪");
var solarTerm=new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满",
"芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
var sTermInfo=new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,
218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,
483532,504758);
var nStr1=new Array("日","一","二","三","四","五","六","七","八","九","十");
var nStr2=new Array("初","十","廿","卅");
var sFtv=new Array("0101 元旦","0214 情人节","0308 妇女节","0312 植树节","0315 消费者权益日",
"0401 愚人节","0501 劳动节","0504 青年节","0512 护士节","0601 儿童节","0701 建党节","0801 建军节",
"0910 教师节","0928 孔子诞辰","1001 国庆节","1006 老人节","1024 联合国日","1224 平安夜",
"1225 圣诞节");
var lFtv=new Array("0101 春节","0115 元宵节","0505 端午节","0707 七夕情人节","0715 中元节",
"0815 中秋节","0909 重阳节","1208 腊八节","1224 小年");
function lYearDays(y){
	var i,sum=348;
	for(i=0x8000;i>0x8;i>>=1)
	    sum+=(lunarInfo[y-1900]&i)?1:0;
	    return(sum+leapDays(y));
}
function leapDays(y){
	if(leapMonth(y))
	    return((lunarInfo[y-1900]&0x10000)?30:29);
	else
	    return(0);
}
function leapMonth(y){
	return(lunarInfo[y-1900]&0xf);
}
function monthDays(y,m){
	return((lunarInfo[y-1900]&(0x10000>>m))?30:29);
}
function Dianaday(objDate){
	var i,leap=0,temp=0;
	var baseDate = new Date(1900,0,31);
	var offset = (objDate - baseDate)/86400000;
	this.dayCyl=offset+40;
	this.monCyl=14;
	for(i=1900;i<2050&&offset>0;i++){
		temp=lYearDays(i)
		offset -= temp;
		this.monCyl +=12;
	}
	if(offset<0){
		offset =+temp;
		i--;
		this.monCyl -=12;
	}
	this.year=i;
	this.yearCyl=i-1864;
	leap=leapMonth(i);
	this.isLeap=false;
	for(i=1;i<13&&offset>0;i++){
		if(leap>0&&i==(leap+1)&&this.isLeap==false){
			--i;
			this.isLeap=true;
			temp=leapDays(this.year);
		}
		else{
			temp=monthDays(this.year,i);
		}
		if(this.isLeap==true&&i==(leap+1))
		    this.isLeap=false;
		offset -= temp;
		if(this.isLeap==false)
		    this.monCyl++;
	}
	if(offset==0&&leap>0&&i==leap+1)
	    if(this.isLeap){
	    	this.isLeap=false;
	    }
	    else{
	    	this.isLeap==true;
	    	--i;
	    	--this.monCyl;
	    }
	    if(offset<0){
	    	offset+=temp;
	    	--i;
	    	--this.monCyl;
	    }
	    this.month=i;
	    this.day=offset+i;
}
function solarDays(y,m){
	if(m==1)
	    return(((y%4==0)&&(y%100!=0)||(y%400==0))?29:28);
	else
	    return(solarMonth[m]);
}
function calElement(sYear,sMonth,sDay,week,lyear,lMonth,lDay,isLeap){
	this.isToday=false;
	this.sYear=sYear;
	this.sMonth=sMonth;
	this.week=week;
	this.lYear=lyear;
	this.lMonth=lMonth;
	this.lDay=lDay;
	this.isLeap=isLeap;
	this.lunarFestival='';
	this.solarFestival='';
	this.solarTerms='';
}
function sTerm(y,n){
	var offDate=new Date((31556925974.7*(y-1900)+sTermInfo[n]*60000)+Date.UTC(1900,0,6,2,5));
	return(offDate.getUTCDate())
}
var fat=mat=9;
var eve=0;
function calendar(y,m){
	fat=mat=0;
	var sDObj,lDObj,lY,lm,ld=1,lL,lX=0,tmp1,tmp2;
	var lDPOS=new Array(3);
	var n=0;
	var firstLM=0;
	sDObj=new Date(y,m,1);
	this.lengh=solarDays(y,m);
	this.firstWeek=sDObj.getDay();
	if((m+1)==5){
		fat=sDObj.getDay()
	}
	if((m+1)==6){
		mat=sDObj.getDay()
	}
	for(var i=0;i<this.lengh;i++){
		if(lD>lX){
			sDObj=new Date(y,m,i+1);
			lDObj=new Dianaday(sDObj);
			lY=lDObj.year;
			lM=lDObj.month;
			lD=lDObj.day;
			lL=lDObj.isLeap;
			lX=lL?leapDays(lY):monthDays(lY,lM);
			if(lM==12){
				eve=lX;
			}
			if(n==0)
			    firstLM=lM;
			    lDPOS[n++]=i-lD+1;
		}
		this[i]=new calElement(y,m+1,i+1,nStr1[(i+this.firstWeek)%7],lY,lM,lD++,lL);
		if((i+this.firstWeek)%7==0){
			this[i].color='red';
		}
	}
	tmp1=sTerm(y,m*2)-1;
	tmp2=sTerm(y,m*2+1)-1;
	this[tmp1].solarTerms=solarTerm[m*2];
	this[tmp2].solarTerms=solarTerm[m*2+1];
	if((this.firstWeek+12)%7==5)
	    this[12].solarFestival+='黑色星期五';
	if(y==tY&&m==tM)
	    this[tD-1].isToday=true;
}
function cDay(d){
	var s;
	switch (d){
		case 10:
		    s='初十';
		    break;
        case 20:
            s='二十';
            break;
        case 30:
            s='三十';
            break;
        default:
            s=nStr2[Math.floor(d/10)];
            s+=nStr1[d%10];
	}
	return(s);
}
var cld;
function drawCld(SY,SM){
	var TF=true;
	var p1=p2=""
	var i,sD,s,size;
	cld=new calendar(SY,SM);
	GZ.innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【'+Animals[(SY-4)%12]+'】';
    for(i=0;i<42;i++){
    	sObj=eval('SD'+i);
    	lObj=eval('LD'+i);
    	sObj.className='';
    	sD=i-cld.firstWeek;
    	if(sD>-1&&sD<cld.lengh){
    		sObj.innerHTML=sD+1;
    		if(cld[sD].isToday){
    			sObj.style.color='#9900FF';
    		}
    		else{
    			sObj.style.color='';
    		}
    		if(cld[sD].lDay==1){
    			lObj.innerHTML='<b>'+(cld[sD].isLeap?'闰':'')+cld[sD].lMonth+'月'+(monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'小':'大')+'</br>';
    		}
    		else{
    			lObj.innerHTML=cDay(cld[sD].lDay);
    		}
    	}
    }
}
