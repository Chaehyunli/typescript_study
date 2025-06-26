// 대수 타입 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입으로 나뉨

// 합집합 타입 - Union 타입
let a: string | number | boolean; // string 타입과 number의 합집합
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    language: "",
    color: "",
};

// let union4: Union1 = {
//    name: "",
// }

// 교집합 타입 - Intersection 타입

let variable: number & string; // variable에 마우스 커서를 올려보면 never 타입이라 나옴.

type Intersection = Dog & Person; 

let intersection1: Intersection = { // 아래의 객체 속성 중 하나라도 빠지면 에러가 발생!!
  name: "",
  color: "",
  language: "",
};