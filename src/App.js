import logo from './logo.svg';
import './App.css';
import cat from './cat.jpg';

//컴포넌트만들기 = 반복되는 UI 요소(태그)를 반환하는 함수
/*
컴포넌트함수는 반드시 대문자로 시작
반환값이 UI요소(태그)여야함
*/

function Comp() {
    return <div>새 컴포넌트</div>
}
function Nav() {
    return <span>새 스팬 태그</span>
}

function App() {
  return (
    <div className="App myApp">
        <Comp />
        <Comp />
        <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
