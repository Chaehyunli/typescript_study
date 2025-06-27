// 타입 추론 -> 함수에서의 매개변수는 타입 추론이 잘 안되기 때문에, 명시가 필요
let a = 10; // number 라고 추론
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") { // return 결과와 매개변수의 기본값을 가지고 타입을 추론
  return "hello";
}

let d; // any 타입으로 추론 -> 아무런 추론 정보가 없을 때에는 any로 추론을 함

d = 10; // 이 줄 이후에는 d를 number 타입으로 추론!!
d.toFixed(); // d는 number 타입!!

d = "hello";
d.toUpperCase(); // 여기에서는 d를 string 타입으로 추론
// d.toFixed();

const num = 10; // const로 선언할 경우, number가 아니라 10이라는 수의 number 리터럴 타입으로 추론됨
const str = "hello"; // const로 선언할 경우, string이 아니라 "hello"의 string 리터럴 타입으로 추론됨

let arr = [1, "string"]; // string와 number의 합집합 타입의 배열로 추론 (string | number)[]