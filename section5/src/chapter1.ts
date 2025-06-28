// 인터페이스의 확장
type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal { // name, color 속성을 Animal에서 가져옴 -> 공통된 것을 따로 모야 빼는 것과 유사
    // name: "hello"; -> Interface로 name: string으로 하였지만, 이와 같이 Dog에서 hello string 리터럴 타입으로 다시 선언도 가능
    // 아무 타입으로나 다시 선언 가능한 것이 아니라, 다시 선언하는 타입이 이전 타입의 서브 타입이어야만 가능!!(name: number의 경우에는 허용 x)
    isBark: boolean;
}

const dog: Dog = {
    name: "", // Dog에서 hello string 리터럴 타입으로 다시 선언할 경우에는 여기에서 에러가 발생함!!
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {} // 이와 같이 2개의 interface를 확장 받을 수도 있음

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
};