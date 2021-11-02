### Table of Contents

1. ⚛️ React?  <!-- .element: class="fragment highlight-current-yellow" -->
1. React Element & React Component  <!-- .element: class="fragment highlight-current-yellow" -->
1. JSX(React Element) <!-- .element: class="fragment highlight-current-yellow" -->
1. ReactDOM / ReactDOMServer <!-- .element: class="fragment highlight-current-yellow" -->
1. React Component <!-- .element: class="fragment highlight-current-yellow" -->
1. React event handling <!-- .element: class="fragment highlight-current-yellow" -->
1. React Hooks <!-- .element: class="fragment highlight-current-yellow" -->
1. React Devtools <!-- .element: class="fragment highlight-current-yellow" -->
1. Thinking in React <!-- .element: class="fragment highlight-current-yellow" -->
1. Tips <!-- .element: class="fragment highlight-current-yellow" -->
1. Q&A <!-- .element: class="fragment highlight-current-yellow" -->

-----

### React? 🤔 <!-- .element: class="green" -->

-----

#### React?

<small>[추천] React 공식 문서 [https://reactjs.org/](https://reactjs.org/)</small>

- <!-- .element: class="fragment" --> A JavaScript <strong class="yellow">library</strong> for building user interfaces

-----

#### React 특징

- [Declarative](https://ko.wikipedia.org/wiki/%EC%84%A0%EC%96%B8%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D) <!-- .element: class="fragment yellow" -->
- Component-Based <!-- .element: class="fragment yellow" -->
- Learn once, Write anywhere <!-- .element: class="fragment" -->
  - Node.js, React Native

-----

#### Declarative

<ul>
 <li class="fragment">Declarative <strong class="yellow">vs</strong> Imperative</li>
 <li class="fragment">What <strong class="yellow">vs</strong> How</li>
 <li class="fragment">어떤 UI로 보여줄까 <strong class="yellow">vs</strong> 어떻게 UI로 보여줄까</li>
</ul>

-----

#### Component-Based

<ul style="padding-top: 30px;">
 <li class="fragment" style="font-size:30px;">작은 컴포넌트를 조합해서 UI 개발</li>
 <li class="fragment" style="font-size:30px;">컴포넌트의 상태(데이터)는 컴포넌트 스스로 관리(캡슐화)</li>
</ul>

-----

```js
  f(data) = View
```

```js
  function(props) { return ReactElement }
```
<!-- .element: class="fragment" -->

-----

<iframe
  data-src="https://www.npmtrends.com/react-vs-vue-vs-@angular/core"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

#### 2021 stackoverflow survey

<iframe
  data-src="https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

### React Element <!-- .element: class="green" -->

### & <!-- .element: class="green" -->

### React Component <!-- .element: class="green" -->

-----

#### React Element

- `type`과 `props`를 가지는 객체
- syntatic sugar => jsx

```js [1,5|2|3|4|]
React.createElement(
  'div', // type
  { className: 'greeting' }, // props
  'Hello World!' // children
)
```

```js
{
  type: 'div',
  props: {
    className: 'greeting',
    children: 'Hello World!'
  }
}
```
<!-- .element: class="fragment" -->

-----

```jsx
// with jsx
<button className='button-blue'>
  <b>
    OK!
  </b>
</button>
```

```js
// without jsx
React.createElement(
  'button',
  { className: 'button-blue' },
  React.createElement(
    'b',
    null,
    'OK!'
  )
);
```
<!-- .element: class="fragment" -->

-----

#### nvm

![](./images/nvm.png) <!-- .element: style="height:450px" -->

windows? - [Windows에 NodeJS 설치](https://docs.microsoft.com/ko-kr/windows/dev-environment/javascript/nodejs-on-windows)

-----

#### yarn

- package manager by Facebook
- Creact-react-app 에서 기본으로 사용

<div style="width: 700px;margin: 0 auto;">

```sh
❯ npm install -g yarn
```

</div>

-----

#### Dev tools 설치 🛠

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

-----

###  Wrap up! <!-- .element: class="green" -->

-----

### ⚛️ React

- Declarative views <!-- .element: class="fragment" -->
- Component-Based <!-- .element: class="fragment" -->

-----

#### React Component

<p class="fragment white">
  function(props)
  <span class="fragment"> => </span>
  <span class="fragment">React Element</span>
</p>

-----

### Redux

- <!-- .element: class="fragment" --> <strong class="yellow">Flux 패턴</strong> 구현체
- <!-- .element: class="fragment" --> Single Directional Data Flow
- <!-- .element: class="fragment" --> <strong class="yellow">함수형 프로그래밍</strong> 지향

-----

### 무엇을 만들까? 🛠 <!-- .element: class="green" -->

-----

### TodoMVC

<iframe
  data-src="https://todomvc.com/"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

### 기본 spec

<div style="display:flex">
  <div style="flex-grow:1">
    <img src="./images/todo.png" width="450px"/>
  </div>
  <div style="flex-grow:2">
    <ul style="padding-top: 30px;">
      <li> 미완료 잔여 Todo 수 노출</li>
      <li> 새로운 Todo 입력</li>
      <li> 완료/미완료 toggle</li>
      <li> Todo item 삭제</li>
    </ul>
  </div>
</div>

-----

### 추가 spec

<div style="display:flex">
  <div style="flex-grow:1">
    <img src="./images/todo.png" width="450px"/>
  </div>
  <div style="flex-grow:2">
    <ul style="padding-top: 30px;">
      <li>완료여부 필터 기능</li>
      <li>Todo item double click 시 수정</li>
      <li>전체 Todo 일괄 완료</li>
      <li>완료한 Todo 일괄 삭제</li>
    </ul>
  </div>
</div>

<div style="padding-top:50px;font-size:30px">참고) <a href="https://github.com/tastejs/todomvc/blob/master/app-spec.md">전체 spec</a></div>

-----

### Single Page Application

<iframe
  data-src="../../cra/build/todos.html"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

### Markup

<span>📌 React 구현에 집중하기 위해</span></br>
<span>Markup은 template 사용합니다.</span>

<a href="https://github.com/tastejs/todomvc-app-template">Todo template</a>

-----

### Thinking in React 🤔 <!-- .element: class="green" -->

-----

![](./images/thinking-in-react.png) <!-- .element: style="height:450px" -->

[우리말](https://ko.reactjs.org/docs/thinking-in-react.html) | [English](https://reactjs.org/docs/thinking-in-react.html)

-----

1. 목업으로 시작하기 <!-- .element: class="fragment highlight-current-yellow" -->
2. UI를 Component 계층 구조로 나누기 <!-- .element: class="fragment highlight-current-yellow" -->
3. React로 정적인 버전 만들기 <!-- .element: class="fragment highlight-current-yellow" -->
4. UI state에 대한 완벽하면서 최소한의 표현 찾기 <!-- .element: class="fragment highlight-current-yellow" -->
5. State를 어디에 둘지 정하기 <!-- .element: class="fragment highlight-current-yellow" -->
6. 역방향 Data Flow 추가하기 <!-- .element: class="fragment highlight-current-yellow" -->

-----

1. 목업으로 시작하기 <!-- .element: class="yellow" -->
2. UI를 Component 계층 구조로 나누기
3. React로 정적인 버전 만들기
4. UI state에 대한 완벽하면서 최소한의 표현 찾기
5. State를 어디에 둘지 정하기
6. 역방향 Data Flow 추가하기

-----

Todo 데이터 정의하기

<div style="display:flex">
  <div style="flex-grow:1">
    <img src="./images/todo.png" width="700px"/>
  </div>
  <div class="fragment" style="width: 700px;margin: 0 auto;">

```js [|2-6|7-11]
const MOCK_DATA = [
  {
    id: 'some-random-value-0',
    name: 'Make todos with React',
    completed: false,
  },
  {
    id: 'some-random-value-1',
    name: 'try fetch api',
    completed: true,
  }
];
```

  </div>
</div>

-----

1. 목업으로 시작하기
2. UI를 Component 계층 구조로 나누기 <!-- .element: class="yellow" -->
3. React로 정적인 버전 만들기
4. UI state에 대한 완벽하면서 최소한의 표현 찾기
5. State를 어디에 둘지 정하기
6. 역방향 Data Flow 추가하기

-----

<!-- .slide:data-transition="none" -->
![](./images/todos.001.jpeg)

-----

<!-- .slide:data-transition="none" -->
![](./images/todos.002.jpeg)

-----

<!-- .slide:data-transition="none" -->
![](./images/todos.003.jpeg)

-----

<!-- .slide:data-transition="none" -->
![](./images/todos.004.jpeg)

-----

1. 목업으로 시작하기
2. UI를 Component 계층 구조로 나누기
3. React로 정적인 버전 만들기 <!-- .element: class="yellow" -->
4. UI state에 대한 완벽하면서 최소한의 표현 찾기
5. State를 어디에 둘지 정하기
6. 역방향 Data Flow 추가하기

-----

### Let's code! 👨‍💻 👩‍💻 <!-- .element: class="green" -->

-----

#### Open the terminal

```sh [1|2-3|4|5|6]
❯ npx create-react-app todo
# for typescript users!
# ❯ npx create-react-app todo --template typescript
... install and setting 📦
❯ cd todo
❯ yarn start
```

-----

<!-- .slide:data-background-iframe="../../cra/build/index.html" -->

-----

### Prepare Markup

- [template](https://github.com/tastejs/todomvc-app-template/blob/master/index.html) 붙여넣기
- css 적용 하기 <small>with</small> [todomvc-app-css](https://github.com/tastejs/todomvc-app-css)

<div class="fragment" style="width: 700px;margin: 0 auto;">

```sh
❯ yarn add todomvc-app-css
```

```js
import 'todomvc-app-css/index.css';
```

</div>

-----

#### Break The UI Into A Component Hierarchy

- Component 분리하기

<small>(결과) [git branch: 2-component-hierarchy](https://github.com/youngje/react-todo/tree/2-component-hierarchy)</small>

-----

#### Build a Static version in React

- `props` 만 사용하여 App 구성하기
- `state` 사용 금지

<small>(결과) [git branch: 3-static-react](https://github.com/youngje/react-todo/tree/3-static-react)</small>


-----

#### Add minimal State and Inverse Data Flow

- 기능을 모두 충족할 수 있는 최소한의 `state` 사용하여 App 구성하기
- `state`는 해당 값을 사용하는 공통의 부모 component에 위치
- `state`를 변경할 수 있는 함수를 자식 component로 전달하여 앱 완성

<small>(결과) [git branch: 4-add-state-basic-spec](https://github.com/youngje/react-todo/tree/4-add-state-basic-spec)</small>

-----

#### Refactor with Redux

- [Redux 시작하기](https://ko.redux.js.org/introduction/getting-started/)
- [Redux toolkit overview](https://redux.js.org/redux-toolkit/overview)

<div style="width: 700px;margin: 0 auto;">

```sh
❯ yarn add @reduxjs/toolkit react-redux
```

</div>

<small>(결과) [git branch: 6-refactor-with-redux](https://github.com/youngje/react-todo/tree/6-refactor-with-redux)</small>
