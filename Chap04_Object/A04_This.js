// A04_This.js

// page 125
function test(){
    console.log(this);      
}
test();         // window

var obj = {name: "NolBu", age: 20};
obj.fn = test;
console.log(obj);

obj.fn();
console.log("");

var timeout = function(){
    var age = 20;

    // setTimeout이 정의된 객체는 window라 window에서 age를 찾음
    setTimeout( function() {
        console.log(this.age);
    }, 1000)
}

console.log(timeout());
console.log("");


var hong = {name: "HongGilDong", age: 20, x: 10, y: 20};

var onPlus = function(x, y){
    return x + y;
}

var onMin = function(){
    return this.x - this.y;
}

hong.plus = onPlus;
hong.min = onMin;
var result1 = hong.plus(10, 20);
var result2 = hong.min();
console.log("result: ", result1, result2);

var result3 = onMin();
console.log("window: " + result3);

delete hong.plus;
delete hong.min;

// apply()
var value1 = onPlus.apply(hong, [hong.x, hong.y]);
var value2 = onMin.apply(hong)
console.log(value1, value2);

// call()
var value1 = onPlus.call(hong, hong.x, hong.y);
var value2 = onMin.call(hong)
console.log(value1, value2);