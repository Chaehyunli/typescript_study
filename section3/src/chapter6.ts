// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // Person 타입의 빈 객체를 만들고, 이후에 속성을 지정하고 싶을 때
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
}; 

// 이 경우에는, 초과 프로러티 검사에 의해 bread 속성에서 에러가 발생!!
// let dog = {
//  name: "돌돌이",
//  color: "brown",
//  breed: "진도",
//}; 

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // as Dog를 통해 Dog 타입으로 단언함.

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never; // num1 은 never 타입으로 단언 -> number 타입이 never 타입의 슈퍼 타입이기에 가능
let num2 = 10 as unknown; // num2 은 unknown으로 단언 -> number 타입이 unknown 타입의 서브 타입이기에 가능 

// let num3 = 10 as string; // 오류 발생!! -> number 타입이 string 타입의 슈퍼 타입도 아니고 서브 타입도 아니기 때문에 타입 단언이 불가!!
let num3 = 10 as unknown as string; // 이런 식(중간에 unknown을 끼고 단언)으로 가능은 하지만, 좋은 방법은 아님

// const 단언
let num4 = 10 as const; // const num4 = 10과 같은 효과

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // cat의 모든 속성 값이 readOnly가 되어 변경이 불가하게 됨

// cat.name = ''

// Non Null 단언 -> 이 값이 Null 또는 undefined가 아니라고 단언하는 것
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "임채현"
};

// const len: (number | undefined) = post.author?.length; // author이 있으면 정상적으로 number가 되지만, 없을 경우, post.author?.length가 undefined가 됨
// const len: number = post.author?.length; -> 이렇게 사용하면 post.author?.length의 값이 number 혹은 undefined 로 반환되는데, 이는 number로 선언한 len에 맞지 않음

const len: number = post.author!.length; // -> author! 을 사용하여 author 값은 Null 또는 undefined가 아니라고 단언해서 오류가 사라짐
