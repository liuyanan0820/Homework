var search=document.getElementById('search');
var keyword=document.getElementById('keyword');
var searchResult=document.getElementById('searchResult');
search.onclick=function(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','serverjson.php?number='+keyword.value,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4) {
            if (xhr.status==200) {
                var data=eval('('+xhr.responseText+')');
                if (data.success){
                    searchResult.innerHTML="找到员工:"+data.msg;
                }
                else{
                    searchResult.innerHTML="出现错误:"+data.msg;
                }
            }
            else{
                alert('发生错误'+xhr.status);
            }
        }
    };
}
var save=document.getElementById('save');
var staffName=document.getElementById('staffName');
var staffNumber=document.getElementById('staffNumber');
var staffSex=document.getElementById('staffSex');
var staffJob=document.getElementById('staffJob');
var createResult=document.getElementById('createResult');
save.onclick=function(){
    var xhr = new XMLHttpRequest();
    xhr.open('post','serverjson.php',true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var data='name='+staffName.value
            +'&number='+staffNumber.value
            +'&sex='+staffSex.value
            +'&job='+staffJob.value;
    xhr.send(data);
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4) {
            if (xhr.status==200) {
                var data=eval('('+xhr.responseText+')')
                if (data.success) {
                    createResult.innerHTML="成功:"+data.msg;
                }
                else{
                    createResult.innerHTML="错误:"+data.msg;
                }
            }
            else{
                alert('发生错误'+xhr.status);
            }
        }
    }
}