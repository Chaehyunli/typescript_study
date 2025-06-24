// 열거형 타입(enum 타입)
//  여러가지 값들에 각각 이름을 부여해 열거해주고 사용하는 타입
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
;
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["englsh"] = "en";
})(Language || (Language = {}));
const user1 = {
    nmae: "임채현",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.Korean,
};
const user2 = {
    nmae: "아무개",
    role: Role.GUEST // 1 <- 일반 회원
};
const user3 = {
    nmae: "홍길동",
    role: Role.USER // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
// { nmae: '임채현', role: 0, language: 'ko' } { nmae: '아무개', role: 2 } { nmae: '홍길동', role: 1 }
