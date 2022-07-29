const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;
const colors = ['red', 'blue', 'orange', 'yellow', 'green'];

const changeScreen = (index) => {
  screens[index].classList.add('up');
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const setTime = (value) => {
  if (value < 10) {
    value = `0${value}`;
  }
  timeEl.innerHTML = `00:${value}`;
}

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const createRandomCircle = () => {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle')

  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.backgroundColor = colors[getRandomInt(colors.length)];
  console.log(colors[getRandomInt(colors.length)])
  board.append(circle);
}

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    setTime(current)
  }
}

const startGame = () => {
  setTime(time)
  createRandomCircle();
  setInterval(decreaseTime, 1000)
}

const finishGame = () => {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет:${score}</h1>`;
}

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
})

startBtn.addEventListener('click', () => {
  event.preventDefault();
  changeScreen(0);
})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    changeScreen(1);
    startGame();
  }
})
