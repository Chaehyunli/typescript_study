// infer
// inference -> 추론하다 -> R을 추론해라
type FuncA = () => string;

type FuncB = () => number;

type ReturnType0<T> = T extends () => string ? string : never; // 함수의 반환값이 string인지만 검사 가능

type A0 = ReturnType0<FuncA>; // A0 = string
// T에 () => string가 들어감 -> 참이므로 string

type B0 = ReturnType0<FuncB>; // B0 = never
// T에 () => number가 들어감 -> 거짓이므로 never

type ReturnType<T> = T extends () => infer R ? R : never; // 함수의 반환값이 string인지 number인지 모두 검사 가능
// T extends () => infer R 가 참이 되는 R 타입을 찾아서 R 타입을 반환

type A = ReturnType<FuncA>; // A = string -> T에 FuncA가 들어감. FuncA 타입이 () => infer R 가 되는 R을 찾아 R 반환

type B = ReturnType<FuncB>; // B = number -> T에 FuncB가 들어감. FuncB 타입이 () => infer R 가 되는 R을 찾아 R 반환

type C = ReturnType<number>; // C = never -> T에 number가 들어감. number 타입이 () => infer R 가 되는 R이 없기 때문에 never 반환

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never; // T 가 Promise<infer R> 인가? 확인
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // T에 Promise<number>을 전달
// number

type PromiseB = PromiseUnpack<Promise<string>>; // T에 Promise<string>을 전달
// string