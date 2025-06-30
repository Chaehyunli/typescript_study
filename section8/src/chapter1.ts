// 인덱스드 엑세스 타입 -> 객체 타입에서 특정 속성을 뽑아서 변수에 정의할 수 있게 해줌

// 객체에 사용
type Post = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
};

const post0: Post= {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

function printAuthorInfo0(author: Post["author"]) { // Post에서 author 속성을 뽑아 사용 
    // 여기서 "author" 은 값이 아니라 타입임!!! -> Post["author"]["id"] 와 같이도 사용 가능
    // const str = "author";
    // Post[str] - > 에러!! -> author은 string이 아니라 타입이기 떄문
    console.log(`${author.name}-${author.id}`);
}

// 배열에 사용
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// PostList[number] -> PostList[] 배열 타입으로부터 하나의 요소의 타입만 가져옴
function printAuthorInfo(author: PostList[number]["author"]) { // PostList에서 author 속성을 뽑아 사용 -> PostList의 속성이 변경되어도 자동으로 적용
    console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = { // PostList[0]을 PostList[number]로 바꾸어도 무관 -> 하지만, 여기서도 number는 타입임
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthorInfo(post.author);

// 튜플에 사용
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number 타입

type Tup1 = Tup[1]; // string 타입

type Tup2 = Tup[2]; //boolean 타입

// type Tup3 = Tup[3]; -> index 범위 밖

type TupNum = Tup[number]; // Tup[0], Tup[1], Tup[2] 의 합집합 타입으로 TupNum을 [number, string, boolean] 으로 추론