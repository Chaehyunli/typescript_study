// 선언 합침 -> 타입 별칭과 다르게 동일한 이름으로 선언된 인터페이스들 사이에 에러가 나지 않음
// 동일한 이름의 인터페이스들은 합쳐짐!! 
// 하지만, 같은 속성에 대해서 타입이 충돌 나는 경우에는 에러!!
interface Person {
  name: string; 
}

interface Person {
  name: string; // 만약에 nameL number를 하면 이전의 선언과 충돌이 발생해서 에러가 발생!!
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

// 모듈 보강 -> 보통 선언 합침은 이러한 모듈을 보강하는 역할로 사용함.
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};