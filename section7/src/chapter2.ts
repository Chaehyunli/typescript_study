// map 메서드
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // (it) => it * 2 라는 콜백 함수를 arr의 모든 요소에 적용해서 새로운 배열 newArr를 만듬 -> it은 number 타입으로 추론
// [2, 4, 6]

function map0<T>(arr: T[], callback: (item:T) => T){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map0(["hi", "hello"], (it) => it.toUpperCase()); // 정상 작동
// map0(["hi", "hello"], (it) => parseInt(it)); // number타입으로 반환된 값을 T 타입인 string에 넣으려해서 에러!! 

function map<T, U>(arr: T[], callback: (item: T) => U) { // 2개의 타입 변수 T, U를 사용
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => parseInt(it)); // 이 경우, T에는 string 타입, U에는 number 타입이 들어가서 정상적으로 작동

// forEach
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it)); // arr의 각 요소에 콜백 함수 (it) => console.log(it) 를 반복 수행

function forEach<T>(arr: T[], callback: (item: T) => void){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it) => { // arr2 가 number 타입이면 it 또한 number 타입이 되어 toFixed를 사용할 수 있어야함. -> it에 number로 정상 추론
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});