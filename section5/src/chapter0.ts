// 인터페이스 -> 상호 간에 약속된 규칙!!
// Type 설저과 비슷함 
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 호출 시그니처를 사용!!
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "이정환",
  sayHi: function (a?:number, b?:number) { // 이것도 호출 시그니처를 이용하여 가능
    if(typeof a == "number" && typeof b == "number"){
        console.log(a + b );
    }else{
        console.log("Hi");
    }
  },
};

type Type1 = number | string | Person; // 이런식으로 합집합과 교집합에도 사용 가능
type Type2 = number & string & Person;

// person.name = "임채현" -> readonly 이기 때문에 불가능
person.sayHi(); // hi
person.sayHi(1, 2); // 3