// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

// 함수 내에서는 User 타입을 아래의 것으로 사용
function func(){
    type User = {

    }; 
}

let user: User = {
    id:1,
    name: "임채현",
    nickname: "chaehyun",
    birth: "2001/01/04",
    bio: "안녕하세요",
    location: "수원시"
}

let user2: User = {
    id:2,
    name: "홍길동",
    nickname: "chaehyun",
    birth: "2001/01/04",
    bio: "안녕하세요",
    location: "수원시"
}

// 인덱스 시그니처
type CountryCodes = {
    //Korea: string;
    //UnitedState: string;
    //UnitedKinfdom: string;
    [key : string] : string; // String : String 인 속성을 모두 허용
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
}; 

type CountryNumberCodes = {
    //Korea: string;
    //UnitedState: string;
    //UnitedKinfdom: string;
    [key: string]: number; // 빈 속성도 허용
    // 하지만 Korea라는 속성은 무조건 있어야 해!! 라고 하면 이렇게 지정
    Korea: number; // 이 속성의 타입은 위의 number와 일치시켜줘야 함.
};

let countryNumberCodes: CountryNumberCodes = {
   Korea: 410 ,
};