// 컴포넌트란 ui(태그) 요소를 반환하는 함수/클래스
// 클래스문법: 리액트 16버전까지. 그 이후는 함수형 컴포넌트로 바뀜. 
// 함수형 컴포넌트 조건: 함수명.파일명은 대문자로 시작. 반드시 export로 내보내기 
// return이 태그여야 함. 
// 최상위 태그는 딱 한개

// 선언적 함수로 작성한 컴포넌트. (함수를 선언)
import './mango.css'
function Mango() {
    return (
        <nav>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
                <li>menu4</li>
            </ul>
        </nav>
    );
    // 반횐한 후의 함수를 종료하는 결과도 있음. 
    // 알아서 멈춤
}
// 함수를 다른 페이지/함수에서도 쓸 수 있도록 export 해줘야 함. (함수 내보내기)
export default Mango;