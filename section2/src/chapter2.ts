// 배열
// 길이와 원소의 타입이 자유
let numArr: number[] = [1,2,3];

let strArr:string[] = ["hello", "im", "winterlood"];

let boolArr1: boolean[] = [true,false,true];
let boolArr2: Array<boolean> = [true,false,true]; // 이 방식으로도 가능

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5],
]; 

// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1,2];
// tup1 = [1,2,3];
// tup1 = ["1","2"];
// 모두 불가능

let tup2: [number, string, boolean] = [1,"2", true];
// tup2 = ["2",1,true]; 불가능!!

tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop(); 
// ts의 튜플을 js로 변환을 하면 튜플을 그냥 배열로 보니 때문에, 배열 메서드로 값을 넣을 수 있음.
// 따라서 튜플에 배열 메서드를 사용하는 경우 조심해야함.

const users : [string, number][] = [
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["D", 4],
    // [5, "E"], 이와 같은 입력은 튜플을 통해 방지 가능
]