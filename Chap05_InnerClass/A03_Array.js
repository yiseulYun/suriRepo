console.log('---------------- Array splice ----------------');

var ary1 = [100, 101, 10, 11, 1000, 1001];
var votes = ['kim', 'hong', 'lee', 'hong', 'lee', 'lee', 'hong'];
var data = {
    class: '1학년 3반',
    subject: 'Korean',
    jumsu: [
        {name: 'HongGilDong', kor: 100, eng: 60},
        {name: 'NolBu', kor: 80, eng: 60},
        {name: 'HungBu', kor: 60, eng: 60},
        {name: 'IlJimea', kor: 75, eng: 60},
        {name: 'Duli', kor: 90, eng: 60},
    ]
}

// [100, 101, 10, 11, 1000, 1001];
ary1.sort();
console.log(ary1);      // [10, 100, 1000, 1001, 101, 11]

ary1.sort(function(x, y){
    if(x > y) {
        return 1;
    }else if(x < y){
        return -1;
    }else{
        return 0;
    }
})
console.log(ary1);      // [10, 11, 100, 101, 1000, 1001]
console.log( ary1.reverse() );

// jumsu가 배열
/*
jumsu: [
    {name: 'HongGilDong', kor: 100, eng: 60},
    {name: 'NolBu', kor: 80, eng: 60},
    {name: 'HungBu', kor: 60, eng: 60},
    {name: 'IlJimea', kor: 75, eng: 60},
    {name: 'Duli', kor: 90, eng: 60},
]
*/
data.jumsu.sort(function(x, y){
    if(x.name > y.name) {
        return 1;
    }else if(x.name < y.name){
        return -1;
    }else{
        return 0;
    }
})
console.log(data.jumsu);
console.log("");

// filter. ES5

var result = [];
for(var i = 0; i < ary1.length; i++){
    if(ary1[i] % 2 === 0){
        result.push(ary1[i])
    }
}
console.log(result);


var result2 = ary1.filter( function(value){
    return value % 2 === 0;
})
console.log(result2);


var student = data.jumsu.filter( function(value, i){
    // value => {name: 'HongGilDong', kor: 100, eng: 60},
    if(value.kor >= 80){
        return value
    }
})
console.log(student);

var init = {max: 80, min: 70}
var student1 = data.jumsu.filter( function(value, i){
    if(value.kor > this.min && value.kor < this.max){
        return value
    }
}, {max: 80, min: 70} )
console.log(student1);


// map => 전체를 1개씩 가지고와서 처리할 필요가 있는 경우
var result2 = ary1.map( function(value, index){
    return value * 2;
})
console.log(result2);


var result3 = data.jumsu.map(function(value, index){
    var total = value.kor + value.eng;
    value.total = total;
    // console.log(value);
    return value;
})
console.log(result3);