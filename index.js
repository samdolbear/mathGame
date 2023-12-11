function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const question = `${num1} + ${num2}`;
  document.getElementById('question').textContent = question;
  return num1 + num2; 
}

let correctAnswer;
let score = 0;
let highScore = 0;
let timer;

function startGame() {
  score = 0;
  document.getElementById('currentScore').textContent = score;
  correctAnswer = generateQuestion();
  timer = 10;
}

