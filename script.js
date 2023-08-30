const response = document.querySelector("#response");
const input = document.querySelector("#user-input");
const checkButton = document.querySelector("#check-btn");
const answer = document.querySelector("#answer");

checkButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userInput = parseFloat(input.value);
  const lotteryNumber = Math.floor(Math.random() * 21);

  const isCorrect = lotteryNumber === userInput;
  response.innerHTML = isCorrect ? "Correct!" : "Incorrect!";
  response.style.backgroundColor = isCorrect ? "green" : "red";
  answer.innerHTML = lotteryNumber;
});

/*
const response = document.querySelector("#response");
const input = document.querySelector("#user-input");
const checkButton = document.querySelector("#check-btn");
const answer = document.querySelector("#answer");

checkButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userInput = parseFloat(input.value);
  const lotteryNumber = Math.floor(Math.random() * 21);

  if (lotteryNumber === userInput) {
    response.innerHTML = "Correct!";
    response.style.backgroundColor = "green";
    answer.innerHTML = lotteryNumber;
  } else {
    response.innerHTML = "Incorrect!";
    response.style.backgroundColor = "red";
    answer.innerHTML = lotteryNumber;
  }
});
*/
