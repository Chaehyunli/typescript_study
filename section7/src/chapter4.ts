// 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {} // 생성자에서 타입을 정의해서 필드를 생략 -> private 타입의 경우에는 this.list = list 또한 생략 가능

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List<number>([1, 2, 3]); // 매개변수로 number가 들어오면 number의 리스트
numberList.pop(); // 3 제거
numberList.push(4); // 4 추가
numberList.print(); // [1, 2, 4]

const stringList = new List<string>(["1", "2"]); // 매개변수로 string이 들어오면 string의 리스트
stringList.push("hello");
stringList.print(); // ['1', '2', 'hello']