// 유틸리티 타입 -> 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용하는 타입들을 미리 만들어 놓은 것

// Partial<T>
// 부분적인, 일부분의
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial<T>를 직접 구현해보기
type Partial<T> = { 
  [key in keyof T]?: T[key]; 
};

// const draft0: Post = { -> 이 경우에 tags 값이 설정되어 있지 않기 때문에 에러 발생!!
//  title: "제목 나중에 짓자",
//  content: "초안...",
// };

const draft: Partial<Post> = { // Partial<Post>로 모든 속성이 선택적 속성이 되도록 함
  title: "제목 나중에 짓자",
  content: "초안...",
};


// Required<T>
// 필수의, 필수적인
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입 

// Required<T>를 직접 구현해보기
type Required<T> = {
  [key in keyof T]-?: T[key]; // -? 는 ?를 빼겠다는 의미임
};

const withThumbnailPost0: Post = { // 이전 예제에서 모든 속성을 선택적 속성으로 만들었기 때문에 thumbnailURL: "https://...", 가 없어도 오류 발생 x
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  //thumbnailURL: "https://...",
};

const withThumbnailPost: Required<Post> = { // 모든 속성을 필수 속성으로 만듬
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// Readonly<T>
// 읽기전용 수정불가
// 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

// Readonly<T>를 직접 구현해보기
type Readonly<T> = {
  readonly [key in keyof T]: T[key]; // readonly를 추가해서 모든 속성을 Readonly<T>로 만듬
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = ""; -> Readonly<T> 이기 때문에 오류 발생!