// object
let user = {
    id: 1,
    name: "임채현",
};
// user.id; // object 타입은 속성으로 무엇이 있는지 알 수 없기에 에러가 발생
let user2 = {
    id: 1,
    name: "임채현",
};
user2.id; // 가능!!
user2 = {
    name: "홍길동",
};
//------------------------------
let dog = {
    name: "돌돌이",
    color: "brown",
};
dog.color;
//-------------------------------
let config = {
    apiKey: "My API KEY",
};
export {};
// config.apiKey = "hacked"; // 변경 불가!!
