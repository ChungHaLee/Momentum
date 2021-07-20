const h1 = document.querySelector("div.hello:first-child h1");
// 스타일은 css 에서 변경해주는 것이 바람직하다

function handleTitleClick() {
   h1.classList.toggle("clicked");
}

// toggle 의 기능: classList 에 clicked class 가 이미 있는지 확인 후,
// 있다면 toggle 이 clicked 를 제거, 없다면 clicked 를 알아서 추가

h1.addEventListener("click", handleTitleClick);