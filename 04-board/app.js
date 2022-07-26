const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['white', 'red', 'blue', 'green', 'yellow', 'orange', 'gray'];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const setColor = (e) => {
  const color = getRandomColor();
  const color2 = getRandomColor();
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color2}`
}

const removeColor = (e) => {
  e.style.backgroundColor = '#1d1d1d';
  e.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < SQUARES_NUMBER; ++i) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  })

  board.append(square);
}
