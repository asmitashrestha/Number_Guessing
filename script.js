let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 21;
let highScore = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🗯 No number!";
  } //when player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆 Correct number !";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector(".number").style.color = "green";
    if (scores > highScore) {
      highScore = scores;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (scores > 1) {
      if (guess > secretNumber) {
        document.querySelector(".message").textContent = "📉 Too high!";
        scores--;
        document.querySelector("#sscore").textContent = scores;
      } else {
        document.querySelector(".message").textContent = "📈 Too low !";
        scores--;
        document.queryselector("#sscore").textContent = scores;
      }
    } else {
      document.querySelector(".message").textContent = "😏 You lost the game !";
      document.querySelector("#sscore").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  scores = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "💭 Start Guessing😛.......";
  document.querySelector("#sscore").textContent = scores;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = " rgb(10, 10, 10)";
  document.querySelector(".number").style.width = "130px";
});

//when guess is too high
//   else if (guess > secretNumber) {
//     if (scores > 1) {
//       document.querySelector(".message").textContent = "📉 Too high!";
//       scores--;
//       document.querySelector("#sscore").textContent = scores;
//     } else {
//       document.querySelector(".message").textContent = "😏 You lost the game !";
//       document.querySelector("#sscore").textContent = 0;
//     }
//   } //when guess is too low
//   else if (guess < secretNumber) {
//     if (scores > 1) {
//       document.querySelector(".message").textContent = "📈 Too low !";
//       scores--;
//       document.querySelector("#sscore").textContent = scores;
//     } else {
//       document.querySelector(".message").textContent = "😏 You lost the game !";
//       document.querySelector("#sscore").textContent = 0;
//     }
//   }
// });
