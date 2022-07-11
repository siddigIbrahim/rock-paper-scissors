const user_score = document.getElementById("userscore");
let user = 0;
let comp = 0;
const comp_score = document.getElementById("compscore");
const resultsentens = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const sceisor = document.getElementById("s");
const consl = document.querySelector(".score");

function compchoise() {
  const choises = ["r", "p", "s"];
  const randomnumber = Math.floor(Math.random() * 3);
  return choises[randomnumber];
}
function convert(letter) {
  if (letter === "r") {
    return "rock";
  }
  if (letter === "p") {
    return "paper";
  } else return "scisor";
}

function win(userchoice, computerchoice) {
  user++;
  user_score.innerHTML = user;
  comp_score.innerHTML = comp;
  const smalluserword = "user".fontsize(1).sub().fontcolor("green");
  const smallcompword = "comp".fontsize(1).sub().fontcolor("red");
  resultsentens.innerHTML =
    convert(userchoice) +
    smalluserword +
    " beats " +
    convert(computerchoice) +
    smallcompword +
    " you win";
  document.getElementById(userchoice).classList.add("greenglow");
  consl.classList.add("greenglow");
  setTimeout(function () {
    consl.classList.remove("greenglow");
  }, 300);
  setTimeout(function () {
    document.getElementById(userchoice).classList.remove("greenglow");
  }, 1000);
}
function lost(userchoice, computerchoice) {
  comp++;
  user_score.innerHTML = user;
  comp_score.innerHTML = comp;
  const smalluserword = "user".fontsize(1).sub().fontcolor("red");
  const smallcompword = "comp".fontsize(1).sub().fontcolor("green");
  resultsentens.innerHTML =
    convert(computerchoice) +
    smallcompword +
    " beats " +
    convert(userchoice) +
    smalluserword +
    " you lost";
  document.getElementById(userchoice).classList.add("redglow");
  consl.classList.add("redglow");
  setTimeout(function () {
    consl.classList.remove("redglow");
  }, 300);
  setTimeout(function () {
    document.getElementById(userchoice).classList.remove("redglow");
  }, 1000);
}
function draw(userchoice, computerchoice) {
  user_score.innerHTML = user;
  comp_score.innerHTML = comp;
  const smalluserword = "user".fontsize(1).sub().fontcolor("blue");
  const smallcompword = "comp".fontsize(1).sub().fontcolor("blue");
  resultsentens.innerHTML =
    convert(userchoice) +
    smalluserword +
    " and " +
    convert(computerchoice) +
    smallcompword +
    " its a draw ";
  document.getElementById(userchoice).classList.add("greyglow");
  consl.classList.add("greyglow");
  setTimeout(function () {
    consl.classList.remove("greyglow");
  }, 300);
  setTimeout(function () {
    document.getElementById(userchoice).classList.remove("greyglow");
  }, 1000);
}

function Game(userchoice) {
  const computerchoice = compchoise();
  switch (userchoice + computerchoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userchoice, computerchoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lost(userchoice, computerchoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userchoice, computerchoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    Game("r");
  });
  paper.addEventListener("click", function () {
    Game("p");
  });
  sceisor.addEventListener("click", function () {
    Game("s");
  });
}
main();
