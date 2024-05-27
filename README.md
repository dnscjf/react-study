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
