// A02_Array.js

var ary1 = new Array();

var ary2 = [10, 11, new Date(), "Hong", true];

// 추가
ary2.push(20);          // 배열 뒤에 추가
ary2.unshift(50);       // 배열 앞에 추가
console.log(ary2);

// 삭제
ary2.pop();             // 배열 가장 뒤쪽 1개 삭제
ary2.shift();           // 배열 가장 앞쪽에서 1개 삭제
console.log(ary2);

// 위치 지정 추가. 빈 방이 생성된다
ary2[10] = "NolBu";
console.log(ary2, ary2.length);

// 위치지정 삭제
ary2.length = 5;
console.log(ary2, ary2.length);


// 요소 중간을 조작
// 2번째에 요소 추가
// 배열 2번째에 0개를 300으로 치환. 치환할 값이 0이면 추가
ary2.splice(2, 0, 300);
console.log(ary2, ary2.length);

// 2번째에 요소 변경
// 배열 2번째에 1개를 500으로 치환. 
ary2.splice(2, 1, 500);
console.log(ary2, ary2.length);

// 배열 2번째부터 3개를 1000으로 치환. 
ary2.splice(2, 3, 1000);
console.log(ary2, ary2.length);

ary2.splice(2, 3, 1000, 2000);
console.log(ary2, ary2.length);
console.log("");

// 문자열로 변환
var str = ary2.join(", ");
console.log(str);

// for in => index를 돌려준다
for(var i in ary2){
    console.log(ary2[i]);
}
console.log("");


// ES2015 (ES6)
// for of => value를 돌려준ㄷ
for(var i of ary2){
    console.log(i);
}
console.log("");