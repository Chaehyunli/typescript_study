// unknown 타입 -> 타입계층도에서 가장 위에 위치
function unknownExam(){
    let a: unknown = 1; // unknown 타입에 number 타입을 업캐스팅
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar; number 타입에 known 타입을 다운캐스팅 -> 에러!!!
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

// never 타입 -> 타입계층도에서 가장 아래에 위치 (집합으로 보면 공지합)
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc(); // number 타입에 never 타입을 업캐스팅
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10; // never 타입에 number 타입을 다운캐스팅 -> 에러!!
    // let never2: never = "string";
    // let never3: never = true;
}

// void 타입 -> 반환값이 없는 함수
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined; // void 타입에 undefined 타입을 업캐스팅
}

// any 타입 -> 모든 타입의 슈퍼 타입이기도 하고, 모든 타입의 서브 타입이기도함.(치트키)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any 타입에 unknown 타입을 다운캐스팅!!
  // 에러가 나야할 것처럼 보이지만 any타입은 허용

  undefinedVar = anyVar; // undefined 타입에 any 타입을 다운캐스팅!!
  // 에러가 나야할 것처럼 보이지만 any타입은 허용

  // neverVar = anyVar; 
  // 하지만, 이러한 치트키인 any 타입도 never에는 불가능!!

  // 이렇듯 any 타입은 타입계층도를 무시하는 위험한 타입이기 때문에 최대한 사용 x
} 