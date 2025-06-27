//함수 타입 표현식
type Operation = (a: number, b: number) => number; // type으로 함수의 반환값 타입을 지정할 수 있음 (타입 별칭)

const add: (a: number, b: number) => number = (a, b) => a + b;
const add1: Operation = (a, b) => a + b; // 같은 기능, 타입 별칭이기 때문에, Operation 부분에 (a: number, b: number) => number 를 그대로 넣어도 가능함

const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니쳐 (콜 시그니쳐)
type Operation2 = { // 함수도 객체임
  (a: number, b: number): number;
  // name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1,2);
// add2.name; // 함수도 객체이기 때문에, 이렇게 점 표기법으로 접근 가능!! 하지만, 아직 함수의 name 속성을 지정해준적이 없기 때문에 결과는 나오지 않음