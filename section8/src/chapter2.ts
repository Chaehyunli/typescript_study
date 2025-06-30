// keyof 연산자 -> 객체 타입에 적용하는 연산자
interface Person0 {
    name : string;
    age : number;
}

function getPropertyKey0(person: Person0, key: "name" | "age") { // key: string으로 하면 Person의 속성이 아닌 것에 접급하려하기 때문에 오류!!
  return person[key];
}

const person0:Person0 = {
  name: "이정환", 
  age: 27,
};

getPropertyKey0(person0, "name"); 

//----------------------------------------------------------------------------------
const person = {
  name: "이정환", 
  age: 27,
};

type Person = typeof person; // 아래의 person 객체에서 타입을 추론해서 Person 타입을 만듬

function getPropertyKey(person: Person, key: keyof typeof person) { // keyof person은 person 객체 타입의 모든 속성을 합집합 형태로 추출 -> "name" | "age" 와 동일  
    // keyof 뒤에는 반드시 타입이 와야함. keyof person의 경우처럼 객체가 오면 오류 발생!! -> keyof Person 혹은 keyof typeof person 으로 해야함. 
    return person[key];
}

getPropertyKey(person, "name"); // 이정환