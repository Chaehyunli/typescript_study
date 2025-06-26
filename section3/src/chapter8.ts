// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함
type Admin = {
  tag: "ADMIN"; // string 리터럴 타입으로 선언! -> 리터럴 타입이 속성으로 있기 때문에 각 type들은 모두 서로소가 됨.
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;
// 리터럴 타입인 tag 속성은 Admin, Member, Guest 모두 다르기 때문에, 교집합이 없다. 
// Admin의 Member의 교집합에는 어떤 특성을 가진 객체가 들어갈까? 생각해 보면, 그 조건을 만족하는 tag 값이 존재할 수 없다!!

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`
      );
      break;
    }
  }
}

// 비동기 작업의 결과를 처리하는 객체

// 1번 방식
type LoadingTask = {
  state: "LOADING"; // string 리터럴 타입으로 선언
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 2 번 방식
//type AsyncTask = {
//    state: "LOADING" | "FAILED" | "SUCCESS";
//    error?:{
//        message: string;
//    };
//    response?: {
//        data: string;
//    };
//}

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
        // 2번 방식으로 할 경우, state의 값의 내용에 따라 타입 좁히기가 일어나지 않아. task가 AsyncTask 타입임(error가 null일 수도 있어서 에러 발생!!)
      console.log(`에러 발생 : ${task.error.message}`); // error? 나 error!을 사용해서 에러를 없앨 수는 있지만, 이 방식은 위험함.
      // 따라서 1번과 같은 방식으로 하면, 타입 좁히기가 정상적으로 이루어짐. task의 타입이 FailedTask로 정상적으로 추론
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`); // 1번 방식의 경우, task의 타입이 SuccessTask로 정상적으로 추론
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
