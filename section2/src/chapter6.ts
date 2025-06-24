// any
// 특정 변수의 타입을 확실히 모를 때

let anyVar: any = 10; // js처럼 어떤 타입이든 저장할 수 있게 함
anyVar = "hello"; // string
anyVar = true; // boolean
anyVar = {}; // 객체
anyVar = () => {}; // 함수

// anyVar.toUpperCase(); 
// 사용 가능. 하지만 js처럼 runtime에서는 에러가 발생함

let num: number = 10;
num = anyVar; // 모든 타입의 변수에 any 타입의 변수를 넣을 수도 있음.

// unknown
let unknownVar: unknown;

unknownVar = ""; // 이 부분은 any와 동일
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 모든 타입의 변수에 unknown 타입의 변수를 넣을 수 없음
// unknownVar.toUpperCase() // 불가

// 이런 식으로만 가능  
if (typeof unknownVar === "number") {
  num = unknownVar;
} 

// 그래서 일반적으로 특저 변수이 타입을 확실히 모를 때는 any보단 unkown이 더 안전함.
