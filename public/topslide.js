// html 을 다루려고 하는 목적인 경우
window.addEventListener("load", function () {
    // 1. 외부에서 자료를 불러온다.
    const dataUrl = "./apis/topslide.json";
    fetch(dataUrl)
      .then((response) => {
        // Step 1. 자료 받아서 json 변경하기
        // 토큰을 js의 데이터로 변경하기
        const data = response.json();
        // 변환된 결과를 돌려주기
        return data;
      })
      .then((result) => {
        // Step 2. json 변경된 데이터 활용하기
        //   console.log(result[0]);
        //   console.log(result[1]);
        //   console.log(result[2]);
        //   console.log(result[3]);
        for (let i = 0; i < result.length; i++) {
          const temp = result[i];
          // console.log(temp.id);
          // console.log(temp.pic);
          // console.log(temp.url);
          const aaa = `<div class="swiper-slide">
              <a href="#">
              <p class="slide-title">
                  카카오브레인의<br />
                  연구문화
              </p>
              </a>
          </div>`;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  
    // 2. 자료를 이용해서 슬라이드에 배치할 html 을 만든다.
    // 3. html 완성후 swiper 를 생성한다.
  
    // 기본코드를 넣어보자.
    var topSlide = new Swiper(".topslide", {});
  });