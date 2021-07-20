// 실습: 음주 가능한 나이인지 계산해주는 계산기 만들기

// prompt 는 사용자에게 창을 띄울 수 있게 해줌
// prompt 가 실시되면 javascript 는 잠시 멈춰있다

// 사용자가 무엇을 입력하더라도 정수형(나이)으로 바꿔주는 함수 제작
// 숫자를 입력해도 문자열을 기본으로 인식하기 때문에 바꿔줘야함
// 자료형을 바꾸었기 때문에 크기 비교가 가능함

// 조건문(conditionals) 적용 (만약 parseInt 했는데 정수형이 아니라면)
const age = parseInt(prompt("How old are you?"));
//console.log(isNaN(age));
// isNaN 함수는 T/F (boolean 자료형) 를 반환함
// text 를 입력하면 true, 숫자를 입력하면 false

if(isNaN(age) || age < 0){ /// || = OR
    // isNaN == true (text 입력) 일 때 해당 조건문 실행
    console.log("Please write your age in a real positive number.");
} else if(age < 18){
    console.log("You are too young to drink.");
} else if(age >= 18 && age <= 50){
    console.log("You can drink.");
} else if(age >= 50 && age <= 80){ /// && = AND
    console.log("Maybe you should think about your health!");
} else if(age === 100){ /// === 는는는 3개 사용
    console.log("Wow! You are wise.")
} else if(age > 80){
    console.log("You can do whatever you want.")
}