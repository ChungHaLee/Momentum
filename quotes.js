const quotes = [
    {
        quote: "Forgiveness is the key to action and freedom.",
        author: "   - Hannah Arendt",
    },
    {
        quote: "There are no dangerous thoughts- thinking it-self is dangerous.",
        author: "   - Hannah Arendt",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "   - Walt Disney",
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "   - Anne Frank",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "   - Maya Angelou",
    },
    {
        quote: "Love the life you live. Live the life you love.",
        author: "   - Bob Marley",
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "   - John D. Rockefeller Jr",
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "   - Ralph Waldo Emerson",
    },
    {
        quote: "Dream big and dare to fail.",
        author: "   - Norman Vaughan",
    },
    {
        quote: "Peace begins with a smile",
        author: "   - Mother Teresa",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector('#quote span:last-child');


// 랜덤으로 인덱스를 반환할 수 있어야함
// Math object : 수학 계산과 관련된 계산 기능을 포함한 객체
// Math.random() = 0~1사이의 숫자를 랜덤으로 송출함(0.4353423423)
// Math.random() * 10 = 1~10사이의 숫자를 송출 
// Matn.round(반올림), ceil(올림), floor(버림)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;