

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainEl = document.querySelector("#main-title")
  mainEl.textContent = 'Pactice DOM'

  // Part 2
  const bodyEl = document.querySelector('body')
  bodyEl.style.backgroundColor = 'pink'

  // Part 3
  // const favEl = document.querySelector('#favorite-things')
  const favEl = document.querySelector('li:last-child')
  favEl.parentElement.removeChild(favEl)

  // Part 4
  const specialEl = document.querySelectorAll('.special-title')
  specialEl.forEach((element)=>
  element.style.fontSize = '2rem')
  
  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
