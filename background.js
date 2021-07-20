// JS 에서 이미지 요소를 만들고 해당 요소를 html 에 추가한다!
// 왜냐면 html 은 프로그래밍 언어가 아니기 때문
const images = [
    "0.jpg",
    "3.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
];
 // Math 함수를 사용해 인덱스 가져옴
 // floor: 소수점 버리기
 // random: 0에서 1사이의 소수 랜덤 반환
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 수많은 html 태그 중 img 태그를 추가해 객체 생성
const bgImage = document.createElement("img");

// 해당 객체의 src 를 img 로 만들고, src(소스링크)를 추가
bgImage.src = `img/${chosenImage}`;

// prepend: JS 를 html body 맨 위에 추가해줌
// appendChild 함수: JS 를 html 맨 아래에 추가해줌
document.body.appendChild(bgImage)

// 생성한 html element를 body안에 추가하는 경우 
bgImage.id = 'bgImage';
