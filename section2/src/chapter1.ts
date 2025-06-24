// number 
let num1: number = 123;
let num2: number = NaN;
let num3: number = -Infinity;

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;
let str4: string = `hello ${str3}`;

// boolean
let bool1: boolean = true;

// null
let null1: null = null; // null 값이외의 다른 값은 담을 수 없음

// undefined
let unde1: undefined = undefined;

// let numA: number = null; 
// number 타입 변수에는 원래는 null을 넣을 수 없음
// tsconfig.json에서 "strictNullChecks": false 하면 가능 

// 리터럴 타입 -> 타입스크립트에서만 있는 타입임
let numA: 10 = 10; // 변수의 타입을 그 값(10) 자체로 선언
// numA = 12; 이런 건 불가능하게 됨
let strA:"hello" = "hello";
