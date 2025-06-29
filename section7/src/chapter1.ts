// 첫번째 사례
function swap0(a: any, b: any) { // 이 방법은 불안정
  return [b, a];
}

function swap<T, U>(a: T, b: U) { // 입력 받은 첫번째 인자와 두번째 인자와 다를 경우에는 이렇게 선언
  return [b, a];
}

const [a, b] = swap("1", 2); // swap<string, number>(a: string, b: number): (string | number)[] 로 추론

// 두번째 사례
function returnFirstValue0(data: any){ // 이 방법은 불안정
    return data[0]
}

function returnFirstValue1<T>(data: T[]) { // 그냥 data: T 로 할 경우, 아직 모르는 unknown에 data에 배열 data[0]를 쓰지 말라고 에러!!
  return data[0];
}

let num = returnFirstValue1([0, 1, 2]); // number 타입으로 정상 추론
// 0

function returnFirstValue2<T>(data: [T, ...unknown[]]) { // 배열 타입이 아닌, 튜플 타입으로 작성!! -> 이 경우 str은 number로 추론
  return data[0];
}
let str = returnFirstValue2([1, "hello", "mynameis"]); // 이전과 같이 data: T[]만 할 경우 str은 (string | number)[]로 추론 됨. 
// -> [1, "hello", "mynameis"] 가 (string | number)[]이기 때문!!

// 세번째 사례 -> length 속성이 있는 타입만 매개변수로 받아 length를 반환
interface A {
  length: number;
}

interface B extends A {} // T extends { length: number } 와 같음

function getLength0(data: any){ // 이 방법은 불안정
    return data.length;
}

function getLength<T extends { length: number }>(data: T) { // T의 타입을 number 타입의 length 속성을 가지고 있는 타입을 확장
  return data.length;
} 

getLength("123");

getLength([1, 2, 3]);

getLength({ length: 1 });

// getLength(undefined);

// getLength(null);