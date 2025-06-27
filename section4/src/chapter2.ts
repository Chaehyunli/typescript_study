// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입의 함수 a
let b: B = () => 10; // 10 리터럴 타입의 함수 b

a = b; // 업캐스팅!! 
// b = a; // 다운캐스팅!! 오류!!

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 반환값을 기준으로 호환성을 판단할 때와 다르게, 매개변수를 기준으로 호환성을 판단할 때는 업캐스팅은 허용이 안되고, 다운캐스팅이 허용이 됨. 
// c = d; // 업캐스팅!! 
d = c; // 다운캐스팅!! 

type Animal = { // 슈퍼 타입
  name: string;
};

type Dog = { // 서프 타입
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;  // 업캐스팅!!
dogFunc = animalFunc; // 다운캐시팅!!

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // 업캐스팅을 허용할 경우, Animal에서 Dog를 접근하려고 할 수 도 있기 때문에, 매개변수에서는 업캐스팅을 막아놓은 것!! 
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name); // 다 타입이 공통으로 가지고 있는 속성에 대한 접근이기 때문에, 매개변수에서는 다운캐스팅이 허용됨.
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 매개변수가 1개인 함수 func2에서 매개변수를 2개인 함수 func1으로으로 취급하는 건 가능!!  
// func2 = func1; // 반대의 경우에는 불가능!!
