// void 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string{
    return "hello";
}

function func2(): void{
    console.log("hello");
}

let a: void; 
// void 타입의 변수에는 undefined만 담을 수 있음.
// 하지만, tsconfig.ts에서 "strictNullChecks": false 로 하면 가능
// a= 1;     에러!
// a "hello" 에러!
// a ={}     에러!
a = undefined

// never 타입
// never -> 존재하지 않은 
// 불가능한타입

// 이 경우와 같이, 이 함수에 반환값이 있을 수가 없다. 있는 것이 모순이다!! never 사용!! 
function func3(): never{
    while(true){

    }
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// never 타입에서는 어느 타입의 변수도 담을 수 없음!! 
// "strictNullChecks": false 로 해도 불가능!!

// b = 1;           에러!
// b = {};          에러!
// b = "";          에러!
// b = undefined;   에러!
// b = null;        에러!
// b = anyVar;      에러!