console.log('------------------ RegExp ------------------');
var str = '전화번호는 010-1234-5678 또는 010-4567-8945입니다';

// 실행 시점에서 컴파일 됨
var reg = new RegExp(/01[0678]-\d{3,4}-\d{4}/, "g");

// 호출 시점에서 컴파일됨
var pattern = /01[0678]-\d{3,4}-\d{4}/g;

// 매치되는 요소가 있니?
var result = reg.test(str);
console.log(result);

// 매칭되는 값을 추출
var tel = str.match(reg);
console.log(tel);

// 한글만 추출
var ptn = /[가-힁]+/g;
var hangul = str.match(ptn);
console.log(hangul);