// object
let user: object = {
    id: 1,
    name: "임채현",
}

// user.id; // object 타입은 속성으로 무엇이 있는지 알 수 없기에 에러가 발생

let user2: {
    // 객체 리터럴 타입으로 속성의 타입도 선언해야함. 
    id?:number; // 이 속성이 있을수도 있고 없을 수도 있음
    name: string;
} = {
    id: 1,
    name: "임채현",
}

user2.id; // 가능!!

user2 =  {
    name: "홍길동",
}

//------------------------------
let dog:{
    name: string;
    color: string;
} = {
    name:"돌돌이",
    color:"brown",
};

dog.color;
//-------------------------------

let config: {
    readonly apiKey: string; // 외부에서 변경하지 못하게 함
} = {
    apiKey: "My API KEY",
}

// config.apiKey = "hacked"; // 변경 불가!!
