// 프로미스
const promise0 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20); // 비동기 작업의 결과값 20
    }, 3000);
});

// promise0.then((response) => { // response의 타입이 unknown이기 때문에 * 10 에서 에레가 발생!!
//   console.log(response * 10); // -> 타입 좁히기를 써도 되지만, 번거로움 -> 제네릭 사용!!
// });

const promise = new Promise<number>((resolve, reject) => { // number 타입으로 선언
  setTimeout(() => {
    // resolve(20); // -> 비동기 작업의 결과값으로 number 만 가능
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => { // 성공할 때
  console.log(response * 10); // 20
});

promise.catch((err) => { // 실패할 때 -> 매개변수 err의 타입을 잘 알 수 없음
  if (typeof err === "string") {
    console.log(err);
  }
});
// -> 즉, Promise에서 성공했을 때의 타입은 Promise<number> 에서 정해줄 수 있지만, 실패했을 때의 타입은 전해줄 수 없음 

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> { // Promise<Post> 로 함수의 반환 타입을 명시
  return new Promise<Post>((resolve, reject) => { // Promise<Post>, <Post> 가 없을 경우에는 unknown으로 추론하기 때문에 이후에 post.id와 같이 속성에 접근 불가
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});