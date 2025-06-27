// 함수 타입의 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b; // 함수의 반환 결과인 a + b의 타입을 보고 함수 add의 반환 값의 타입을 number로 추론

// 함수의 매개변수
function introduce(name = "이정환", age: number, tall?: number) { // 매개변수 name을 string | undefined 로 추론, 또한 선택적 매개변수 tall?을 age보다 항상 뒤에 배치해야함.   
  console.log(`name : ${name}`);
  // tall 이 여기에서는 number | undefined 이므로 console.log(`tall : ${tall + 10}`); 을 하면 에러가 발생!!
  if (typeof tall === "number") { // 타입 좁히기로 tall을 number로 좁힘
    console.log(`tall : ${tall + 10}`);  
  }
}

introduce("이정환", 27, 175);
introduce(undefined, 25); // name을 undefined로 넘겨주면, 기본값으로 설정한 "이정환을 가져감"
introduce("이정환", 27);

function getSum(...rest: number[]) { // ...rest 인수는 몇 개의 인자가 들어올지 모를 경우, 고정 매개변수 외의 나머지를 배열로 묶어 받기 위해 사용 -> 항상 마지막에 위치해야함
  let sum = 0; // 만약 매개변수의 수를 고정하고 싶을 경우, ...rest: [number, number, number] 로 해야함(매개변수를 3개로 고정).
  rest.forEach((it) => (sum += it)); // it은 rest 배열의 각 요소를 나타냄.(파이썬의 for i in rest: 랑 개념적으로 유사)

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15