var countDownDate = new Date("February 4, 2019 00:00:00").getTime();
var Time = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒 ";
    if (distance < 0) {
        clearInterval(Time);
        document.getElementById("demo").innerHTML="倒计时结束";
    }
},1000);
