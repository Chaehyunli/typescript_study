// 분산적인 조건부 타입
type StringNumberSwitch0<T> = T extends number ? string : number;

let a0: StringNumberSwitch0<number>; // a: string
let b0: StringNumberSwitch0<string>; // b: number

let c0: StringNumberSwitch0<number | string>; // c: string | number -> number 만 나와야할 거 같은데?? 왜??
// -> <number | string> 가 동시에 T에 들어가는 것이 아니라, 분산적으로 number랑 string이 따로 들어가서 묶이는 것!
// StringNumberSwitch<number> | StringNumberSwitch<string> -> c0: number 이렇게 작동함!

let d0: StringNumberSwitch0<boolean | number | string>; // d0: string | number
// 1 단계
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>

// 2 단계
// number | string | number

// 결과
// number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T; // T가 U로 확장된다면 never 아니라면 T 타입

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>

// 2 단계
// number | never | boolean -> never는 공집합과 같은 것이기 때문에 사라짐

// 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Exclude<number | string | boolean, string>; // B = number | boolean

// 분산적인 조건부 타입 사용 안하기
type StringNumberSwitch<T> = [T] extends [number] ? string : number; // 이렇게 할 경우 분산하지 않고 넘겨줌 -> 분산적인 조건부 타입을 막음
let c: StringNumberSwitch<number | string>; // <number | string> 자체를 T로 넘김
// c : number

let d: StringNumberSwitch<boolean | number | string>; // d: number