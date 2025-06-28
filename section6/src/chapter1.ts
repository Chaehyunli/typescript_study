// 타입스크립트의 클래스
const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee { // 이렇게 만들어진 클래스는 타입의 역할도 할 수 있음.
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자 -> 클래스는 가지고 있는 속성에 대해서 생성자가 필요함
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
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
}

const employeeB = new Employee("이정환", 27, "개발자"); 
console.log(employeeB);

const employeeC: Employee = { // 클래스 Employee를 객체 타입으로 사용 가능
  name: "",
  age: 0,
  position: "",
  work() {},
};