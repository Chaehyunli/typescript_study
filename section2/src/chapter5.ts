// 열거형 타입(enum 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해주고 사용하는 타입
// enum은 컴파일 결과 js로 바뀌어도 사라지지 않음(자바크립트의 객체로 변환  됨)

// 숫자형 enum
enum Role{
    ADMIN = 0, // 이 숫자를 쓰지 않아도, 자동으로 위에부터 0,1,2 .. 으로 자동으로 부여
    USER = 1,
    GUEST = 2,
};

enum Language {
    Korean = "ko",
    englsh = "en",
}

const user1  = {
    nmae : "임채현",
    role : Role.ADMIN, // 0 <- 관리자
    language: Language.Korean,
};

const user2  = {
    nmae : "아무개",
    role : Role.GUEST // 1 <- 일반 회원
};

const user3  = {
    nmae : "홍길동",
    role : Role.USER // 2 <- 게스트
};

console.log(user1, user2, user3); 
// { nmae: '임채현', role: 0, language: 'ko' } { nmae: '아무개', role: 2 } { nmae: '홍길동', role: 1 }

