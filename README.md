# Swiper 활용

: [Swiper](https://swiperjs.com/react)

## 1. 설치

- `npm i swiper`
- public/index.html 에 link/script 태그를 제거함.

## 2. 기본 활용

- `import { Swiper, SwiperSlide } from "swiper/react";`
- `import "swiper/css";`

## 3. 기능 추가

- `import { EffectFade, Autoplay } from "swiper/modules";;`
- `import "swiper/css/effect-fade";`
- `import "swiper/css/autoplay";`
- 옵션을 지정

```js
<Swiper
  effect={"fade"}
  autoplay={{ delay: 1000, disableOnInteraction: false }}
  modules={[EffectFade, Autoplay]}
>
  <SwiperSlide></SwiperSlide>
</Swiper>
```

## 4. 옵션은 별도로 작성하기를 권장

```js
// Swiper 의 옵션은 별도로 변수에 담아서 관리추천
const swiperOption = {
  speed: 500,
  effect: "fade",
  autoplay: { delay: 1000, disableOnInteraction: false },
  modules: [EffectFade, Autoplay],
  onInit: (swiper) => {
    // 매개변수 swiper 는 현재 생성된 슬라이드를 말함.
    swiper.autoplay.stop();
    swLogoSlide.current = swiper;
  },
};

<Swiper {...swiperOption}></Swiper>;
```

# IT

https://ant.design/

https://tailwindcss.com/

https://blog.naver.com/itchild_

# JS 31장

```txt
정규 표현식은 문자열 패턴 검색
		- 책 1권 분량
		- 문자열에 대한 처리가 PG에서 중요합니다.
		- 문법이 너무 복잡해서 보통 검색해서 사용하는 것이 관례입니다.
		- yup 라이브러리를 많이 활용합니다.
    - 조건 /^/d{3}-\d{4}-/d{4}/
```
