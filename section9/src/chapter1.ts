// 조건부 타입 -> 3항 연산자를 이용하여 조건에 따라 타입을 변경 
type A = number extends string ? string : number; // number가 string을 확장하는 타입이냐?? 참이면 A는 string 타입, 거짓이면 number 타입
// -> 거짓이기 때문에 A는 number 타입!

type ObjA = { // 슈퍼 타입
  a: number;
};

type ObjB = { // 서브 타입
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // 참이기 때문에 B는 number 타입!

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number; // T에 string이 들어오면 조건문이 거짓이 되어 StringNumberSwitch가 number 타입이 됨.
// T에 number이 들어오면 조건문이 거짓이 되어 StringNumberSwitch가 string 타입이 됨.

let varA: StringNumberSwitch<number>; // varA: string

let varB: StringNumberSwitch<string>; // varB: number

function removeSpaces<T>(text: T): T extends string ? string : undefined; // T가 string이면 removeSpaces도 string 타입. 아닐 경우 undefined 타입 -> 오버로드 시그니처

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); // " "을 모두 찾아서, ""으로 바꿈
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood"); // result: string
result.toUpperCase();

let result2 = removeSpaces(undefined); // result2: undefined 