// 제네릭 인터페이스 -> 제네릭 함수를 만들 때와 유사
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = { // 타입으로 정의할 때, KeyPair<string, number>처럼 매개변수의 타입을 선언해야함
  key: "key", 
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니쳐
interface NumberMap {
  [key: string]: number; // key의 타입은 string, value의 타입은 number 
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V; // value의 타입을 바꾸어 사용 가능
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭 
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

// 제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 유저 / 개발자 유저
interface Student {
  type: "student";
  school: string;
}

interface Developer { // student와 developer는 서로 서로소 관계임
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

interface User0{
  name: string;
  profile: Student | Developer; // 이 것과 같은 기능
}

function goToSchool0(user: User0) { // 학생 유저만 가능
  if(user.profile.type !== "student"){
    console.log("잘못 오셨습니다");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

function goToSchool(user: User<Student>) { // 학생 유저만 가능 -> 제네릭 인터페이스를 사용함
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); developer 타입의 유저는 goToSchool의 함수의 매개변수로 올 수 없음!!

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};