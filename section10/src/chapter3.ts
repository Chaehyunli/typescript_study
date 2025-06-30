// Exclude<T, U>
// -> 제외하다, 추방하다
// -> T에서 U를 제거하는 타입

// Exclude<T, V>를 직접 구현해보기
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;
// 1 단계
// Exclude<string, boolean> | Exclude<boolean, boolean>

// 2 단계
// string | never

// 최종적으로는 string

// Extract<T, U>
// -> T에서 U를 추출하는 타입

// Extract<T, V>를 직접 구현해보기
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // B = boolean

// ReturnType<T>
// -> 함수의 반환값 타입을 추출하는 타입 

// ReturnType<T, V>를 직접 구현해보기
type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // ReturnA = string

type ReturnB = ReturnType<typeof funcB>; // ReturnA = string