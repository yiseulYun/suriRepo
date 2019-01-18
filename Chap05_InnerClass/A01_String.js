
console.log('------------- String --------------');
var str1 = 'HongGilDong';
var str2 = new String('NolBu');
var str3 = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사';

console.log( "str3.charAt(5): " + str3.charAt(5) );

// 문자의 위치
console.log( str3.indexOf("백두산") );
console.log( str3.indexOf("신성진") );

// 결합
console.log( str3.concat(str2) );

// 대소문자로 변경
console.log( str2.toUpperCase() );
console.log( str2.toLowerCase() );

// 문자열 추출
// substr(시작번호, 몇개)
console.log( str3.substr(5, 3) );
console.log( str3.substr(-5, 3) );

// substring(시작번호, 종료번호-1)
// 1. -가 붙은 수는 전부 0으로 변경
// 2. 뒤의 수가 적은 숫자면 앞 뒤 위치를 변경한다.
console.log( str3.substring(5, 8) );

// -8을 0으로 변경하고 뒤 숫자가 5보다 작으므로 뒤집어서 0, 5로 검색
console.log( str3.substring(5, -8) );

// 뒤 값이 없으면 5부터 문자 끝까지
console.log( str3.substring(5) ); 
console.log( str3.substring(-5) ); 

// slice() => -가 제대로 동작함
console.log( str3.slice(5) ); 
console.log( str3.slice(-5) ); 

console.log( str3.slice(5, 8) ); 
console.log( str3.slice(-5, -8) );  // error는 아님.
console.log( str3.slice(-8, -5) );  // error는 아님.

console.log('------------- Number --------------');
var num = 12345.6789;
console.log( Number.MAX_VALUE );
console.log( Number.MIN_VALUE );
console.log( Number.isFinite(num) );
console.log( Number.isNaN(num) );
console.log( num.toFixed(2) );