// 사용자 정의 타입가드
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog { // 함수가 true를 리턴하면 animal 객체가 Dog 타입이다!! 라고 하는 것
  return (animal as Dog).isBark !== undefined; // animal as Dog가 없을 경우에는 타입이 좁혀지지 않은 상태이기 때문에 에러가 남!!
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal; // animal is Dog에 의해서 animal을 Dog 타입으로 추론함 (저게 없을 경우에는 animal 타입으로 추론함)
  } else if ("isScratch" in animal) {
    // 고양이
    animal; // 위와 같은 방식으로 aniaml is Cat에 의해서 aniaml을 Cat 타입으로 추론함
  }
}