### Table of Contents

1. 오늘 목표
1. Before start
1. Wrap up! - React, Redux
1. Thinking in React
1. 무엇을 만들까?
1. Let's code

-----

### 오늘 목표 <!-- .element: class="green" -->

-----

#### 오늘 목표

- React로 간단한 SPA 작성해 보기 <!-- .element: class="fragment" -->
- Front-end 개발의 재미 느껴보기 <!-- .element: class="fragment" -->

-----

### Before Start <!-- .element: class="green" -->

-----

#### Node.js 설치

<iframe
  data-src="https://nodejs.org/ko/about/releases/"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

##### nvm

![](./images/nvm.png) <!-- .element: style="height:450px" -->

windows? - [Windows에 NodeJS 설치](https://docs.microsoft.com/ko-kr/windows/dev-environment/javascript/nodejs-on-windows)

-----

#### Dev tools 설치 🛠

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

-----

### Wrap up! <!-- .element: class="green" -->

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

### Thinking in React 🤔 <!-- .element: class="green" -->

-----

![](./images/thinking-in-react.png) <!-- .element: style="height:600px" -->

[우리말](https://ko.reactjs.org/docs/thinking-in-react.html) | [English](https://reactjs.org/docs/thinking-in-react.html)

-----

1. 목업으로 시작하기 <!-- .element: class="fragment highlight-current-yellow" -->
2. UI를 Component 계층 구조로 나누기 <!-- .element: class="fragment highlight-current-yellow" -->
3. React로 정적인 버전 만들기 <!-- .element: class="fragment highlight-current-yellow" -->
4. UI state에 대한 완벽하면서 최소한의 표현 찾기 <!-- .element: class="fragment highlight-current-yellow" -->
5. State를 어디에 둘지 정하기 <!-- .element: class="fragment highlight-current-yellow" -->
6. 역방향 Data Flow 추가하기 <!-- .element: class="fragment highlight-current-yellow" -->

-----

### 무엇을 만들까? 🛠 <!-- .element: class="green" -->

-----

### Single Page Application

![](./images/todo.png)

-----

### Let's code! 👨‍💻 👩‍💻 <!-- .element: class="green" -->

-----

#### Open the terminal

```sh [1|2|3|4]
❯ npx create-react-app todo
... install and setting 📦
❯ cd todo
❯ npm start
```

-----

<!-- .slide:data-background-iframe="../../cra/build" -->
