// Pick<T, K>
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick<T, K>를 직접 구현해보기
type Pick<T, K extends keyof T> = { // 타입 T에 있는 키인 K를 선택
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

// const legacyPost0: Post = { // tags가 없기 때문에 에러 발생!!
//    title: "옛날 글",
//    content: "옛날 컨텐츠",
// }

const legacyPost: Pick<Post, "title" | "content"> = { // 고르고 싶은 속성만 골라서 사용 -> "title" | "content" 의 자리에 number 같은 상관 없는 타입이 들어가지 않도록 제약을 걸어줌
    title: "옛날 글",
    content: "옛날 컨텐츠",
};

// Omit<T, K> -> Pick<T, K> 와 반대의 가능
// -> 생략하다, 빼다
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// Omit <T,K>를 직접 구현해보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>; // Exclude<keyof T, K>를 선택함으로서 구현

// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>> // Exclude 는 앞의 전달 받은 타입에서 뒤의 전달 받은 타입을 제거
// Pick<Post, 'content' | 'tags' | 'thumbnailURL' > // 'title' | 'content' | 'tags' | 'thumbnailURL' 에서 'title'를 제거함

const noTitlePost: Omit<Post, "title"> = { // Post 타입에서 "title" 속성만 제거
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Record<K, V> -> 동일한 패턴을 갖는 객체 타입을 쉽게 정의 가능

// Record<K, V>를 직접 구현해보기
type Record<K extends keyof any, V> = { // K에 들어오는 것은 어떤 객체에서 추출한 합집합의 타입이라고 제약을 걸어주는 것
  [key in K]: V;
};

type Thumbnail0 = { // 이렇게 작성할 경우, 중복 코드가 많음
  large: { url: string; size: number };
  medium: { url: string; size: number };
  small: { url: string; size: number };
  watch: { url: string; size: number };
}

type Thumbnail = Record< // 썸내일의 타입을 구분해서 제공 -> Record<K, V> 는 K로는 객체의 속성 키를 합집합으로 받고, V에는 value를 받음
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;