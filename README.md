# Axios

## 1. axios 를 연습할때

- [josn-server](https://www.npmjs.com/package/json-server)
- [참조자료](https://poiemaweb.com/json-server)

## 2. 서버 구축 과정

- D:드라이브에 server 폴더를 만든다.
- VSCode 에서 프로젝트 등록을 한다.
- Node.js 프로젝트로 등록을 한다. (리액트 상관없음)

## 3. Node.js 프로젝트 생성하기

- `npm init` 엔터

## 4. json-server npm 설치

- `npm install -g json-server`
- db.json 파일 생성

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  },
  "todos": [
    {
      "id": 1,
      "content": "HTML",
      "completed": true
    },
    {
      "id": 2,
      "content": "CSS",
      "completed": false
    },
    {
      "id": 3,
      "content": "Javascript",
      "completed": true
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Lee",
      "role": "developer"
    },
    {
      "id": 2,
      "name": "Kim",
      "role": "designer"
    }
  ]
}
```

## 5. json-server 실행

- `json-server --watch db.json`
- 리액트가 3000 포트를 사용하고 있음.
- json-server 도 3000 포트를 사용하므로 충돌 발생함.
- `json-server --watch db.json --port 5000`
- json-server 포트를 5000 번으로 변경

## 6. package.json 에 script 명령어 추가하기

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json --port 5000"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^1.0.0-beta.0"
  }
}
```

## 7. API 테스트하기

- CRUD 테스트 (크러드)
  : Create (POST)
  : Read (GET)
  : Update (PUT / Fetch )
  : Delete (DELETE)
- Postman (웹 API 테스트시 일반적 사용)
- Swagger (웹 API 테스트시 별도로 BE에서 셋팅)
- Web Browser (웹 프로젝트 CORS 에러 발생 함)
  : package.json 에 "proxy":"주소" 를 작성해야 한다.

## 8. Axios 활용

- [axios](https://axios-http.com/kr/docs/intro)
- `npm install axios`

## 8.1. axios 폴더 추천

- /src/apis 폴더 생성
- /src/apis/config.js

```js
// 서버 주소
export const SERVER_URL = "http://localhost:5000";
```

- /src/apis/todos.js

# 리액트 이벤트 핸들러

## 1. 기본

- click, change

### 1.1. JS 태그 버전

- 먼저 내용을 정리한 뒤 아래 내용을 참조할 것
  : 반드시 소문자 on 에 소문자 이벤트
  : <태그 on이벤트명="함수명()">내용</태그>
  : 소문자 onclick="함수명()"
  : 소문자 onchange="함수명()"
  : 태그가 복잡해질 수 있음

- 태그에 직접 이벤트 연결하기
  : 반드시 소문자로 on + 이벤트 로 작성
  : 예) onclick

```html
<script>
  function 함수명() {}
</script>

<button click="함수명()">클릭</button>
```

: 태그에 JS를 실행하는 경우 호출(call)을 꼭 해둘 것
: 아래의 예는 실행 안됨.

```html
<script>
  function 함수() {
    alert("안녕");
  }
</script>
<button onclick="함수">클릭</button> → X
<button onclick="함수()">클릭</button> → O
```

## 2. JS 태그 메소드 버전

- 먼저 내용을 정리하고 참조할 것
  : 태그를 먼저 찾고 이벤트를 연결
  : 태그.소문자 on이벤트명을 연결
  : on이벤트명 함수 연결시 실행(Call)하면 안됨
  : 여러 개의 함수를 등록할 수 없음

```js
const btClass = document.querySelector(".bt");
const btId = document.querySelector("#bt");
const btTag = document.querySelector("ul li a");
btClass.onclick = 함수명;
btId.onclick = 함수명;
btTag.onclick = 함수명;
```

: 객체.메소드
: 아래의 코드는 순서상 html 태그를 찾을 수 없음 → 에러 발생

```html
<script>
  function 함수() {
    alert("안녕");
  }
  const bt = document.querySelector("#bt");
  // 객체.메소드
  // 아래 코드는 1번 call 즉, 호출되면서 실행됨
  // bt.onclick = 함수();
  // 아래처럼 진행한다. () 를 제거해야 한다.
  bt.onclick = 함수;
</script>
<button id="bt">클릭</button>
```

```html
<button id="bt">클릭</button>

<script>
  function 함수() {
    alert("안녕");
  }
  function 함수2() {
    alert("반가워");
  }

  const bt = document.querySelector("#bt");
  // 객체.메소드
  bt.onclick = 함수;
  // 기능은 1개밖에 연결이 안됨
  bt.onclick = 함수2;
</script>
```

: 태그를 찾고 연결하면 문제 없음

```html
<button id="bt">클릭</button>

<script>
  function 함수() {
    alert("안녕");
  }
  // 코드 순서상 찾을 수 있음.
  const bt = document.querySelector("#bt");
  // 객체.메소드
  bt.onclick = 함수;
</script>
```

## 3. JS 태그 이벤트 핸들러 등록 버전

- 아래 내용 참조
  : 여러 개의 함수를 등록 가능
  : on이라는 글자가 제거되어야 함

```html
<button id="bt">클릭</button>

<script>
  function 함수() {
    alert("안녕");
  }
  function 함수2() {
    alert("반가워");
  }

  const bt = document.querySelector("#bt");
  // 객체 이벤트 핸들러 등록 방식
  // 이벤트 명만 적어야 함. 그래서 오류
  bt.addEventListener("onclick", 함수);
  bt.addEventListener("onclick", 함수2);
  //아래는 이벤트 명을 정확하게 작성하였으므로 정상
  bt.addEventListener("click", 함수);
  bt.addEventListener("click", 함수2);
</script>
```

## 4. React 버전

- 아래의 내용을 먼저 정리
  : 리액트는 태그(JSX) 버전이 기본
  : 이벤트는 소문자가 아님
  : 이벤트는 on소문자에 대문자 이벤트명으로 시작
  : 이벤트에 연결될 함수는 2가지 방식으로 작성이 가능
  : 함수명() 으로 ()를 붙이면 함수 Call 즉, 실행임
  : 즉, 함수명만 적어줘야 함
  : 매개변수가 전달되는 함수라면 화살표 함수로 감싸줄 것

```jsx
// 함수가 '실행'되므로 오류
<JSX onClick={함수명()}></JSX>
<JSX onClick={함수명}></JSX>
// 매개변수로 값을 전달
<JSX onClick={() => { 함수명(매개변수) }}></JSX>
<JSX onChange={함수명}></JSX>
```

: 예)

```jsx
<button
    onClick={() => {
      getTodos("와아아앙");
    }}
  >
    읽기
  </button>
  <button
    onClick={() => {
      getTodos("ㅋㅋㅋ");
    }}
  >
    하나만 읽기
  </button>
  <button
    onClick={() => {
      getTodos("ㅎㅎㅎㅎ");
    }}
  >
    쓰기
  </button>
```
