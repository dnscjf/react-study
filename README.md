# 리액트 컴포넌트

## 1.0. 컴포넌트를 왜 생성하는가?

- 프로젝트 규모에 따라 협업이 필요로 함.
- 기능별로 html, css, js 가 별도로 관리 필요.

## 1.1. 컴포넌트에 배치되는 내용

- JSX 가 배치된다. (리액트용 HTML 태그 class => className)
- css 가 배치된다. ( background: url(경로문제) )
- js 를 배치된다.

## 1.2. 이미지를 배치하는 2가지 경우(주의사항)

- 태그에 이미지를 배치한 경우
  : public/images 폴더를 참조합니다.

```html
<img src="./images/etc/logo-kakao.png" />
```

- css 배경으로 이미지를 배치한 경우
  : src/images 폴더를 참조합니다.
  : css 파일을 js 컴포넌트에서 사용하면 webpack 이 압축한다.

```css
background: url("../images/icon/icon-search.png");
```

## 1.3. js를 React로 마이그레이션 진행

### 1.3.1. load 가 useEffect 로 변경

```js
window.addEventListener("load", function () {});
useEffect(() => {
  return () => {};
}, []);
```

### 1.3.2. querySelector 가 useRef(null) 로 변경

```js
const tag = document.querySelector(".bt");

const tag = useRef(null);

useEffect(() => {
  // tag.current 로 접근
  return () => {};
}, []);

<div ref={tag}> </div>;
```

# JS 14 장

```txt
// var : 값을 담을 공간을 마련해줘.....
  // var 이름 : 값을 담은 공간에 꼬리표를 붙여줘.
  var age = 15;
  var nickName = "hong";
  function go(){
  }
  console.log(age)
  console.log(window.age)

  모듈(기능별 파일코드)은 import/export 문법을 써서 변수 범위를 설정한다.

 class 장을 보아야 해요.

  외부에서 변수 및 함수에 접근할 수 있는 권한
  public    : 외부 어떤 곳에서도 사용할 수 있다.
  private   : 외부에서 절대로 사용할 수 없다.
  protected : 허용한 대상만 사용할 수 있다.
```

# JS 15장

```txt
 var 는 없다 생각해요.
 변수 를 만들때 고민이 생겨요.

 const 변수이름  :  값을 고정시키겠다.
 let 변수이름    : 값이 수시로 바뀌어집니다.

const 사용하실 때 오해의 소지가 있는 경우

 정군은 const 는 절대로 값이 안변한다.
 값을 변경하려고 하면 에러난다.
 const age = 15;
 age = 100; // 에러.. conatant value...


 const 객체 = {}   오해의 소지가 발생합니다.

 const 정군 = {} // 이미 주소는 고정이 되어 버렸다.
 정군 = "안녕"   //  주소를 교체 하려고 했다. 그래서 const 에 위배된다. 에러

 // 주소를 교체하는 것이 아니고, 안쪽의 연결된 내용을 수정한다.

 정군.age = 100;
 정군["nicName"] = "hong guil dong";
```

# 실제 업무에서 알아야 할 상식

- nvm (Node Version Manger) 설치 및 활용
  : https://github.com/coreybutler/nvm-windows/releases
  : 설치 버전 확인 `nvm -v`
  : 설치 가능한 버전 목록 `nvm list available`
  : 설치 하기 `nvm install 버전`
  : 현재 사용중인 Node 버전 확인하기 `node -v`
  : 현재 설치된 Node 목록 확인 `nvm ls`
  : 사용할 Node 버전 선택하기 `nvm use 버전`
  : Node 설치된 경로 알아보기 `which node`
- npm 보다는 yarn 선호
  : Node Package Manager (node_modules)
  : package.json 의 dependencies 목록을 참조
  : npm 이 가끔 다운로드 중 오류가 발생하고, 소스가 깨짐 현상
  : 예) 네이버 Toast UI 등.
  : npm 보다 안정적인 package 관리를 위해서 yarn 을 활용.
  : `npm install -g yarn`
  : `yarn --version`
- favicon 만들기 (디자이너 담당)
  : https://realfavicongenerator.net/

- ::before, ::after 샘플

```html
<body>
  <style>
    .wrap {
      position: relative;
      width: 100%;
      height: 400px;
      background: goldenrod;
      margin: 100px auto;
      padding: 50px;
    }
    .box {
      width: 100px;
      height: 100px;
      margin: 100px auto;
      background: hotpink;
      text-align: center;
    }
    .box span::before {
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      background-color: red;
    }
    .box span::after {
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      background-color: blue;
    }
  </style>
  <div class="wrap">
    <div class="box">
      <span>안녕</span>
    </div>
  </div>
</body>
```
