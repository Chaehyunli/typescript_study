// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라
// 여러가지 버전으로 만드는 문법 -> JS에서는 허용이 안되고, TS에서만 가능

// 하나의 함수 func
// 모든 매개변수의 타입 number
// Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
// Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력

// 버전들 -> 오버로드 시그니쳐 // func 라는 함수의 버전이 이렇게 2가지가 있다고 알려주는 것 
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
// fuction func(){} 만 작성해도 func의 함수는 오버로드 시그니쳐 중에서 하나를 찾아서 따라감
function func(a: number, b?: number, c?: number) { // b와 c에서 ?가 없으면 func(a: number) 라는 오버로드 시그니쳐가 의미가 없이지기 때문에 오류 발생!!
    // 모든 오버로드 시그니쳐가 의미가 있도록 매개변수를 설정해준 후, 타입 좁히기를 사용해서 사용해야함
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

func(1);
func(1, 2, 3);