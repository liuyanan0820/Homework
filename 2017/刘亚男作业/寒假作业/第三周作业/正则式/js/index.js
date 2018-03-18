var s = "小明89分， 晓红68分，  琪琪59分，  虎虎98分";
var a = s.match(/\d+/g);
var avg = a.reduce(function(obj, item){ return obj + parseFloat(item);},0) / a.length; 
var result = s.replace(/(\d+)分/g, function(){
     console.log(arguments[0]);
     console.log(arguments[1]);
    var n = parseFloat(arguments[1]);

    return n + "分" + "(" + ((n > avg) ? ("超出平均分" + (n - avg)) : ("低于平均分" + (avg - n))) + "分)";
});
console.log(result);
document.write(result);