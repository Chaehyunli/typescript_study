// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed // value의 값이 number 일 경우에는 toFixed 메서드 적용
// value => string : toUpperCase // value의 값이 string 일 경우에는 toUpperCase 메서드 적용
// value => Date : getTime // value의 값이 Date 일 경우에는 getTime 메서드 적용
// value => Person : name은 age살 입니다. // value의 값이 Person 일 경우에는 name은 age살 입니다.적용

function func(value: number | string | Date | null | Person) { // Date는 Node.js 가 기본적으로 제공하는 내장 객체임(클래스)

    value; // 여기에서는 value를 string | number | Date | Person | null 로 추론
    // 때문에 아래와 같은 연산은 불가하기 때문에 타입 좁히기가 필요함
    // value.toFixed()                                      // 에러!!
    // value.toUpperCase()                                  // 에러!!
    // value.getTime()                                      // 에러!!
    // console.log(`${value.name}은 ${value.age}살 입니다`)   // 에러!!

    if (typeof value === "number") {
        console.log(value.toFixed()); // 여기에서는 value를 number 타입으로 추론
    } else if (typeof value === "string") {
        console.log(value.toUpperCase()); // 여기에서는 value를 string 타입으로 추론
    } else if (value instanceof Date) { // A instanceof B 는 A가 B의의 instance일 경우 true를 반환 (B에는 항상 클래스가 들어와야함. type은 불가)
        console.log(value.getTime());
        // typeof는 Date를 반환하지 않기에, typeof value === "Date" 는 항상 false!!
        // Date의 타입은 onject 임. 하지만, typeof value === "object"를 할 경우, null 또한, object로 판단되어 value를 (Date | Person | null) 로 추론하기 때문에 getTime() 사용 불가능!!
    } else if (value && "age" in value) { // value instanceof Person은 사용 불가
        // "age" in value을 통해, value를 Person으로 추론 가능(age 속성을 가지고 있는 것은 Person 뿐!!)
        // 하지만, "age" in value 만 할 경우, value가 null일 수도 있기 때문에, value && 를 추가
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}