// A03_JSON.js

// page 118
var data = {
    id: 100,
    name: "HongGilDong",
    "tel": ["1235", "3556"],
    hireDate: new Date()
}

// 객체를 JSON 데이터로 변경
var jsonData = JSON.stringify(data);
console.log(jsonData);

// json 값을 javascript 객체로 변경
var jsData = JSON.parse(jsonData);
console.log(jsData);
console.log("");

// JSON.parse()도 동일한 형태로 변경 가능
var jsonData2 = JSON.stringify(data, function(key, value){
    if(key === "hireDate"){
        return new Date(value).toLocaleString()
    }else{
        return value;
    }
})
console.log(jsonData2);