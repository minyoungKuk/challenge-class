# 💡 React의 주요 개념 익히기

## 1. 리액트

- UI 제작을 도와주는 라이브러리
- 전통 웹개발(HTML, CSS, JavaScript)의 한계에서 보는 등장 배경!

  - **유지보수 어려움** : 규모가 커질수록 복잡성이 높아지고, 당연히 유지보수도 힘들어짐
  - **DOM 조작 비효율성** : DOM은 웹페이지 구조를 나타내는데, JS를 사용하여 직접적으로 조작하여 자주 변경할 경우 브라우저 렌더링 성능이 크게 저하될 수 있다
  - **재사용성 부족** : 기존의 코드들은 재사용성이 낮고, 동일한 코드를 반복 작성해야할 경우가 많았음

  ➡️ 이것들을 거꾸로 하면 리액트의 장점들이 된다 🤓

## 2. 리액트를 사용한 웹 VS 기존 웹 개발

| 리액트                  | 전통적인 방식          |
| ----------------------- | ---------------------- |
| Single Page Application | Multi Page Application |
| Client Side Rendering   | Server Side Rendering  |

## 3. 리액트 프로젝트 만들기

### 3-1. [Create React App (CRA) ](https://create-react-app.dev/docs/getting-started/)

```jsx
npx create-react-app my-app
```

### 3-2. [Vite](https://vitejs.dev/guide/)

```jsx
npm create vite@latest
```

## 4. 주요 개념

### 4-1. 가상DOM

- 실제DOM을 흉내낸 가상의 DOM
- React같은 라이브러리에선 가상DOM은 실제 DOM보다 빠르게 UI 변경사항 관리
- 변경이 필요한 부분만 실제DOM에 반영하기에 효율적

### 4-2. JSX : JS를 확장한 문법 / UI 구조 표현

- HTML같이 생겼지만 절.대 다른 것~~ 그저 createElement 함수 호출을 보다 직관적으로 표현해주는 JS 확장 문법
- JSX 내에서 JavaScript 표현식을 중괄호 {}로 묶어 사용
- 구조가 명확하여 가독성 상승
- 브라우저는 JSX를 읽는것이 아니라 이를 babel등의 트랜스 파일러가 JS로 변환한 것을 읽음

```jsx
// 컴포넌트( 함수, 캡슐화한 코드블록 ) 선언
function SomeComponent() {
  return <h1>{3 + 5}</h1>;
}

// 엘리먼트( (UI를 구성하는)값, 컴포넌트가 반환하는 것 ) 생성
const someElement = <SomeComponent />;

// 컴포넌트의 재사용
function AnotherComponent() {
  return (
    <div>
      <SomeComponent />
      <SomeComponent />
    </div>
  );
}
```

### 4-3. State : 컴포넌트 내부의 동적인 데이터를 관리에 사용되는 데이터 구조

- 시간에 따라 변하는 값이나 사용자 상호작용 또는 네트워크 응답에 의해 변경되는 값을 State로 관리
- state가 변경되면 컴포넌트는 리렌더링~
- 리렌더링 한다는 건 함수가 재실행된다는 것 -> 화면이 다시 그려짐
- 함수는 재실행되지만, 상태값은 어딘가에 저장되어 있음

```jsx
import React, { useState } from React

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1) // 카운트를 1 증가
  }

  return (
    <div>
      <p> 현재 카운트 : {count} </p>
      <button onClick={increment}>1씩 증가</button>
    </div>
  )
}
```

### 4-4. Props : 부모 컴포넌트로부터 자식 컴포넌트에 전달하는 데이터

- 자식 컴포넌트 입장에서 Props는 **읽기 전용**으로, 수정 X
- props를 잘 사용할 때 -> 컴포넌트의 재사용성, 유연성 ⬆️
- 부모가 전달해주는 props값이 바뀌면 자식 컴포넌트는 리렌더링

```jsx
const Greeting = (props) => {
  return <h1> 안녕하세요, { props.name }님! </h1>
}

const App = () => {
  const someName = "철수"
  return (
    <div>
      <Greeting name="지수" />
      <Greeting name="{ someName } />
    </div>
  )
}
```

### 4-5. 리렌더링 조건 ✨

1. **state가 변경**되면 -> 컴포넌트 리렌더링
2. 부모 컴포넌트로 **전달 받는 props 값이 변경**되면 -> 컴포넌트 리렌더링
3. 부모 컴포넌트가 리렌더링되면 -> 자식 컴포넌트 리렌더링 (이걸 방지하기 위해 React.memo 사용)

### 4-6. React Component 생애주기

<img src="../img/생애주기.png" style="width: 100%; max-width: 600px; padding: 20px 0;">
