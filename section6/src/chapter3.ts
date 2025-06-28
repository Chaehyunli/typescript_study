// 인터페이스와 클래스
interface CharacterInterface { // 설계도와 유사
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface { // Character 클래스는 CharacterInterface 클래스를 구현한다는 의미
  constructor(
    public name: string, // interface를 통해 받은 속성은 무조건 public 이어야함. 
    public moveSpeed: number,
    private extra: string // 추가적인 속성은 이렇게 extra로 추가!! 이 속성에 대해서는 private나 protected가 가능함
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}