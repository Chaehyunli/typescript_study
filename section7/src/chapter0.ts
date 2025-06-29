// 제네릭
function func0(value: any){
    return value;
}

let num0 = func(10);

let bool0 = func(true);

let str0 = func("string");

// 이렇게 매개변수로 받은 타입의 변수를 리턴하는 함수를 만들고 싶을 때, any를 사용해서 할 순 있지만, 이는 위험함!!
// -> 이럴 때 사용하는 것이 제네릭 함수임!!

// 제네릭 함수 -> 포괄적, 일반적 이라는 뜻!!
function func<T>(value: T): T { // func<타입 변수 T 선언>(매개변수 value를 타입 변수로 T로): 반환값도 타입 변수 T
  return value;
}

let num = func(10);
// num.toUpperCase();
num // 여기서 num은 number로 추론!

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]); // 타입 변수 T에 [number, number, number]가 들어감 -> arr가 [number, number, number]의 튜플 타입으로 추론 
// let arr = func([1, 2, 3] as [number, number, number]); 와 같음

// TypeScript에서 길이(length) 속성이 있는 값만 허용하는 함수
function getLength<T extends { length: number }>(data: T) { // 타입 변수 T에 extends를 통해 number 타입의 length 속성이 있는 값만 하용함.
    
  return data.length;
}

getLength("hello"); // 5 (문자열은 length 속성이 있음)
getLength([1, 2, 3]); // 3 (배열도 length 속성이 있음)
getLength({ length: 10, name: "이정환" }); // 10
// getLength(123) -> number 타입에는 length가 없음 -> 에러!!