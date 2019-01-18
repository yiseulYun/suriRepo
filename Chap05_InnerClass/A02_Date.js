console.log('------------- Date --------------');
var today = new Date();

var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var yoil = today.getDay();
var ary = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]

console.log(date);
console.log(time);
console.log(yoil);
console.log(ary[today.getDay()]);

console.log( today.toLocaleDateString() );
console.log( today.toLocaleTimeString() );

var str = today.toLocaleString()
console.log( str );
console.log("");

console.log('------------- Math --------------');
var num = 1234.5678;

var r = Math.round(num);            // 반올림
console.log(r);

console.log( Math.floor(num) );     // 버림
console.log( Math.ceil(num) );      // 올림