### Table of Contents

1. ๐ ์ค๋ ๋ชฉํ  <!-- .element: class="fragment highlight-current-yellow" -->
1. ๐ฆ Before start <!-- .element: class="fragment highlight-current-yellow" -->
1. Wrap up! - React, Redux โ๏ธ <!-- .element: class="fragment highlight-current-yellow" -->
1. ๐  ๋ฌด์์ ๋ง๋ค๊น? <!-- .element: class="fragment highlight-current-yellow" -->
1. ๐ค Thinking in React <!-- .element: class="fragment highlight-current-yellow" -->
1. Let's code ๐จโ๐ป๐ฉโ๐ป <!-- .element: class="fragment highlight-current-yellow" -->

-----

### ๐ ์ค๋ ๋ชฉํ <!-- .element: class="green" -->

-----

#### ์ค๋ ๋ชฉํ

- React๋ก ๊ฐ๋จํ SPA ์์ฑํด ๋ณด๊ธฐ <!-- .element: class="fragment" -->
- Front-end ๊ฐ๋ฐ์ ์ฌ๋ฏธ ๋๊ปด๋ณด๊ธฐ <!-- .element: class="fragment" -->

-----

### ๐ฆ Before Start <!-- .element: class="green" -->

-----

#### Node.js ์ค์น

<iframe
  data-src="https://nodejs.org/ko/about/releases/"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

#### nvm

![](./images/nvm.png) <!-- .element: style="height:450px" -->

windows? - [Windows์ NodeJS ์ค์น](https://docs.microsoft.com/ko-kr/windows/dev-environment/javascript/nodejs-on-windows)

-----

#### yarn

- package manager by Facebook
- Creact-react-app ์์ ๊ธฐ๋ณธ์ผ๋ก ์ฌ์ฉ

<div style="width: 700px;margin: 0 auto;">

```sh
โฏ npm install -g yarn
```

</div>

-----

#### Dev tools ์ค์น ๐ 

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

-----

###  Wrap up! <!-- .element: class="green" -->

-----

### โ๏ธ React

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

- <!-- .element: class="fragment" --> <strong class="yellow">Flux ํจํด</strong> ๊ตฌํ์ฒด
- <!-- .element: class="fragment" --> Single Directional Data Flow
- <!-- .element: class="fragment" --> <strong class="yellow">ํจ์ํ ํ๋ก๊ทธ๋๋ฐ</strong> ์งํฅ

-----

### ๋ฌด์์ ๋ง๋ค๊น? ๐  <!-- .element: class="green" -->

-----

### TodoMVC

<iframe
  data-src="https://todomvc.com/"
  data-preload
  width="1200px"
  height="500px"
></iframe>

-----

### ๊ธฐ๋ณธ spec

<div style="display:flex">
  <div style="flex-grow:1">
    <img src="./images/todo.png" width="450px"/>
  </div>
  <div style="flex-grow:2">
    <ul style="padding-top: 30px;">
      <li> ๋ฏธ์๋ฃ ์์ฌ Todo ์ ๋ธ์ถ</li>
      <li> ์๋ก์ด Todo ์๋ ฅ</li>
      <li> ์๋ฃ/๋ฏธ์๋ฃ toggle</li>
      <li> Todo item ์ญ์ </li>
    </ul>
  </div>
</div>

-----

### ์ถ๊ฐ spec

<div style="display:flex">
  <div style="flex-grow:1">
    <img src="./images/todo.png" width="450px"/>
  </div>
  <div style="flex-grow:2">
    <ul style="padding-top: 30px;">
      <li>์๋ฃ์ฌ๋ถ ํํฐ ๊ธฐ๋ฅ</li>
      <li>Todo item double click ์ ์์ </li>
      <li>์ ์ฒด Todo ์ผ๊ด ์๋ฃ</li>
      <li>์๋ฃํ Todo ์ผ๊ด ์ญ์ </li>
    </ul>
  </div>
</div>

<div style="padding-top:50px;font-size:30px">์ฐธ๊ณ ) <a href="https://github.com/tastejs/todomvc/blob/master/app-spec.md">์ ์ฒด spec</a></div>

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

<span>๐ React ๊ตฌํ์ ์ง์คํ๊ธฐ ์ํด</span></br>
<span>Markup์ template ์ฌ์ฉํฉ๋๋ค.</span>

<a href="https://github.com/tastejs/todomvc-app-template">Todo template</a>

-----

### Thinking in React ๐ค <!-- .element: class="green" -->

-----

![](./images/thinking-in-react.png) <!-- .element: style="height:450px" -->

[์ฐ๋ฆฌ๋ง](https://ko.reactjs.org/docs/thinking-in-react.html) | [English](https://reactjs.org/docs/thinking-in-react.html)

-----

1. ๋ชฉ์์ผ๋ก ์์ํ๊ธฐ <!-- .element: class="fragment highlight-current-yellow" -->
2. UI๋ฅผ Component ๊ณ์ธต ๊ตฌ์กฐ๋ก ๋๋๊ธฐ <!-- .element: class="fragment highlight-current-yellow" -->
3. React๋ก ์ ์ ์ธ ๋ฒ์  ๋ง๋ค๊ธฐ <!-- .element: class="fragment highlight-current-yellow" -->
4. UI state์ ๋ํ ์๋ฒฝํ๋ฉด์ ์ต์ํ์ ํํ ์ฐพ๊ธฐ <!-- .element: class="fragment highlight-current-yellow" -->
5. State๋ฅผ ์ด๋์ ๋์ง ์ ํ๊ธฐ <!-- .element: class="fragment highlight-current-yellow" -->
6. ์ญ๋ฐฉํฅ Data Flow ์ถ๊ฐํ๊ธฐ <!-- .element: class="fragment highlight-current-yellow" -->

-----

1. ๋ชฉ์์ผ๋ก ์์ํ๊ธฐ <!-- .element: class="yellow" -->
2. UI๋ฅผ Component ๊ณ์ธต ๊ตฌ์กฐ๋ก ๋๋๊ธฐ
3. React๋ก ์ ์ ์ธ ๋ฒ์  ๋ง๋ค๊ธฐ
4. UI state์ ๋ํ ์๋ฒฝํ๋ฉด์ ์ต์ํ์ ํํ ์ฐพ๊ธฐ
5. State๋ฅผ ์ด๋์ ๋์ง ์ ํ๊ธฐ
6. ์ญ๋ฐฉํฅ Data Flow ์ถ๊ฐํ๊ธฐ

-----

Todo ๋ฐ์ดํฐ ์ ์ํ๊ธฐ

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

1. ๋ชฉ์์ผ๋ก ์์ํ๊ธฐ
2. UI๋ฅผ Component ๊ณ์ธต ๊ตฌ์กฐ๋ก ๋๋๊ธฐ <!-- .element: class="yellow" -->
3. React๋ก ์ ์ ์ธ ๋ฒ์  ๋ง๋ค๊ธฐ
4. UI state์ ๋ํ ์๋ฒฝํ๋ฉด์ ์ต์ํ์ ํํ ์ฐพ๊ธฐ
5. State๋ฅผ ์ด๋์ ๋์ง ์ ํ๊ธฐ
6. ์ญ๋ฐฉํฅ Data Flow ์ถ๊ฐํ๊ธฐ

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

1. ๋ชฉ์์ผ๋ก ์์ํ๊ธฐ
2. UI๋ฅผ Component ๊ณ์ธต ๊ตฌ์กฐ๋ก ๋๋๊ธฐ
3. React๋ก ์ ์ ์ธ ๋ฒ์  ๋ง๋ค๊ธฐ <!-- .element: class="yellow" -->
4. UI state์ ๋ํ ์๋ฒฝํ๋ฉด์ ์ต์ํ์ ํํ ์ฐพ๊ธฐ
5. State๋ฅผ ์ด๋์ ๋์ง ์ ํ๊ธฐ
6. ์ญ๋ฐฉํฅ Data Flow ์ถ๊ฐํ๊ธฐ

-----

### Let's code! ๐จโ๐ป ๐ฉโ๐ป <!-- .element: class="green" -->

-----

#### Open the terminal

```sh [1|2-3|4|5|6]
โฏ npx create-react-app todo
# for typescript users!
# โฏ npx create-react-app todo --template typescript
... install and setting ๐ฆ
โฏ cd todo
โฏ yarn start
```

-----

<!-- .slide:data-background-iframe="../../cra/build/index.html" -->

-----

### Prepare Markup

- [template](https://github.com/tastejs/todomvc-app-template/blob/master/index.html) ๋ถ์ฌ๋ฃ๊ธฐ
- css ์ ์ฉ ํ๊ธฐ <small>with</small> [todomvc-app-css](https://github.com/tastejs/todomvc-app-css)

<div class="fragment" style="width: 700px;margin: 0 auto;">

```sh
โฏ yarn add todomvc-app-css
```

```js
import 'todomvc-app-css/index.css';
```

</div>

-----

#### Break The UI Into A Component Hierarchy

- Component ๋ถ๋ฆฌํ๊ธฐ

<small>(๊ฒฐ๊ณผ) [git branch: 2-component-hierarchy](https://github.com/youngje/react-todo/tree/2-component-hierarchy)</small>

-----

#### Build a Static version in React

- `props` ๋ง ์ฌ์ฉํ์ฌ App ๊ตฌ์ฑํ๊ธฐ
- `state` ์ฌ์ฉ ๊ธ์ง

<small>(๊ฒฐ๊ณผ) [git branch: 3-static-react](https://github.com/youngje/react-todo/tree/3-static-react)</small>


-----

#### Add minimal State and Inverse Data Flow

- ๊ธฐ๋ฅ์ ๋ชจ๋ ์ถฉ์กฑํ  ์ ์๋ ์ต์ํ์ `state` ์ฌ์ฉํ์ฌ App ๊ตฌ์ฑํ๊ธฐ
- `state`๋ ํด๋น ๊ฐ์ ์ฌ์ฉํ๋ ๊ณตํต์ ๋ถ๋ชจ component์ ์์น
- `state`๋ฅผ ๋ณ๊ฒฝํ  ์ ์๋ ํจ์๋ฅผ ์์ component๋ก ์ ๋ฌํ์ฌ ์ฑ ์์ฑ

<small>(๊ฒฐ๊ณผ) [git branch: 4-add-state-basic-spec](https://github.com/youngje/react-todo/tree/4-add-state-basic-spec)</small>

-----

#### Refactor with Redux

- [Redux ์์ํ๊ธฐ](https://ko.redux.js.org/introduction/getting-started/)
- [Redux toolkit overview](https://redux.js.org/redux-toolkit/overview)

<div style="width: 700px;margin: 0 auto;">

```sh
โฏ yarn add @reduxjs/toolkit react-redux
```

</div>

<small>(๊ฒฐ๊ณผ) [git branch: 6-refactor-with-redux](https://github.com/youngje/react-todo/tree/6-refactor-with-redux)</small>
