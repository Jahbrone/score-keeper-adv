const playerOneAddOne = document.querySelector("#p1-add-one");
const playerOneAddTwo = document.querySelector("#p1-add-two");
const playerOneAddThree = document.querySelector("#p1-add-three");
const playerOneReset = document.querySelector("#p1-reset");
const playerTwoAddOne = document.querySelector("#p2-add-one");
const playerTwoAddTwo = document.querySelector("#p2-add-two");
const playerTwoAddThree = document.querySelector("#p2-add-three");
const playerTwoReset = document.querySelector("#p2-reset");

const playerOneScore = document.querySelector("#p1-score");
const playerTwoScore = document.querySelector("#p2-score");

const winner = document.querySelector("#leader");

let p1score = 0;
let p2score = 0;

//PLAYER ONE
playerOneAddOne.addEventListener("click", () => {
  p1score++;
  playerOneScore.textContent = p1score;
});
playerOneAddTwo.addEventListener("click", () => {
  p1score += 2;
  playerOneScore.textContent = p1score;
});
playerOneAddThree.addEventListener("click", () => {
  p1score += 3;
  playerOneScore.textContent = p1score;
});
playerOneReset.addEventListener("click", () => {
  p1score = 0;
  playerOneScore.textContent = p1score;
});

//PLAYER TWO
playerTwoAddOne.addEventListener("click", () => {
  p2score++;
  playerTwoScore.textContent = p2score;
});
playerTwoAddTwo.addEventListener("click", () => {
  p2score += 2;
  playerTwoScore.textContent = p2score;
});
playerTwoAddThree.addEventListener("click", () => {
  p2score += 3;
  playerTwoScore.textContent = p2score;
});
playerTwoReset.addEventListener("click", () => {
  p2score = 0;
  playerTwoScore.textContent = p2score;
});

if (p1score > p2score) {
  console.log("tester");
}
