// 맵드 타입 -> interface에서는 사용할 수 없고, 타입 별칭에서만 사용 가능!!
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = { // User 타입 중에 모든 속성이 없어도 되는, 일부 속성만 있어도 되는 타입 -> 수정 요청을 보낼 때, 수정하는 속성만 보내기 위함
  [key in "id" | "name" | "age"]?: User[key]; //  [key in "id" | "name" | "age"]? 는 User의 key가 어떤 값인지 정의, User[key] 는 value 값을 정의 -> ? 로 User의 모든 속성이 선택적 속성이 됨 
}; // User[key] 는 key의 값이 "id", "name", "age"로 변할 때마다, 각각 number, string, number가 됨

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = { // 모든 속성에 readonly 속성을 줌
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

const user = fetchUser();
// user.id = 1; -> readonly이기 때문에 수정 x -> 에러!!

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "이정환",
  age: 25,
});