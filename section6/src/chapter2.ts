// 접근 제어자 -> ts에서만 제공
// access modifier
// public private proteced
class Employee {
  // 필드

  // 생성자
  constructor( // 아무것도 쓰지 않으면 기본적으로 public으로 설정됨 -> 생성자에서 속성의 타입을 선언하면, 앞의 필드에서는의 내용을 지워야함.
    private name: string, // class 내에서만 해당 속성에 접근 가능, 외부에서는 접근 자체가 불가!! 쓰기는 물론, 읽기도 제한!!
    protected age: number, // 외부에서는 해당 속성에 접근이 불가능!!,
    public position: string, // 모든 곳에서 해당 속성에 접근 가능
  ) {}

  // 메서드
  work() {
    console.log(`${this.age} ${this.name} 일함`); // 클래스 내부에서는 private, protected 모두 접근 가능
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age; // 파생 클래스 내부에서는 속성에 접근 가능
    // this.name; // private은 파생 클래스 내부에서도 접근이 불가!!
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동"; -> name은 private이기 때문에 외부에서 접근 불가
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);