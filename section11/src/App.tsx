import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/editor';

interface Todo {
  id : number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState(""); // ""로 인해 text를 string으로 추로, useStat()만 있으면 text를 undefined로 추론
  // setText(123); string을 전달 받지 않아서 오류!!
  // const [text, setText] = useState<string>(); // 초기값이 없는 경우 이렇게 할 것!

  const idRef = useRef(0);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickAdd = (text: string) =>{
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]); 
  };

  useEffect(()=>{
    console.log(todos);
  },[todos])

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Editor onClickAdd={onClickAdd}>
        <div>child</div>
      </Editor>
    </div>
  );
}

export default App;