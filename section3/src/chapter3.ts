// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // number 타입에 number 리터널 타입을 업캐스팅

// 객체 타입간의 호환성 -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
type Animal = { // 슈퍼 타입 -> name과 color 속성이 있으면 Animal 타입이다!!라고 보는 것
  name: string;
  color: string;
};

type Dog = { // 서브 타입 -> name, color, bread 속성이 모두 있어야 Dog 타입이다!! 라고 보는 것
  name: string;
  color: string;
  breed: string;
};

// 따라서 객체 타입에서는 속성(property)의 수가 적은 것이 더 큰 개념!!

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // animal 타입에 dog 타입을 업캐스팅!!
// dog = animal; // 다운캐스팅이기 떄문에 오류!!

type Book = { // 슈퍼 타입 
  name: string;
  price: number;
};

type ProgrammingBook = { // 서브 타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // book 타입에 programingBook 타입을 업캐스팅!!
// programmingBook = book; // programingBook 타입에 book 타입을 다운캐스팅 하는 건 불가!! -> 에러!! 

console.log(book); // book 객체 안에 실제로는 skill이 있음
// {
//  name: "한 입 크기로 잘라먹는 리액트",
//  price: 33000,
//  skill: "reactjs" // 여전히 존재!
// }

book.name
book.price
// book.skill // 하지만, 이렇게는 접근 불가!!

// 초과 프로퍼티 검사 -> 아래 같은 형식으로 객체를 생성할 때 하는 검사
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // book = programmingBook 랑 같은 역할 아닌가??
  // 에러!! 객체를 초기화하면서 생성할 때에는 객체 타입 Book에 있는 속성만 정의해야함.
};

let book3: Book = programmingBook; // 이렇게 선언하면 초과 프로러티 검사를 피할 수 있음

function func(book: Book) {}

func({ // 매개변수로 객체 리터럴을 직접 넘길 때는 객체의 속성과 타입이 일치해야함.
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});
 
func(programmingBook); // 이 경우에는 programmingBook 타입이 book 타입으로 업캐스팅!!
