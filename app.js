let players = {}; // object to store player names and their previous attempts

function guessingGame() {
  if (!name) {
    name = prompt("Welcome to the thunderdome user, please identify yourself:");
  }

  let input = prompt("Guess a number between 1-20");
  let number = Number(input);
  let submittedNums = [];
  const secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  let tries = 1;

  if (input === null) {
    alert("Later loser.");
    return;
  }

  //checks if number is a whole number
  while (!Number.isInteger(number)) {
    number = Number(prompt("That's not a whole number >:("));
  }
  submittedNums.push(number);

  //checks whether the secret number and the input are equal
  while (number != secretNumber) {
    if (number === 0) {
      return;
    }
    if (number > secretNumber) {
      number = Number(prompt(name + ", you idiot, go lower!"));
    } else {
      number = Number(prompt(name + ", you idiot, go higher!"));
    }
    submittedNums.push(number);

    //counts how many attempts it takes by incrementing
    tries++;
  }

  console.log(submittedNums);
  console.log(tries);

  // updates the score or adds a new player
  if (players[name]) {
    if (tries < players[name]) {
      alert(
        `Congratulations ${name}! You were less bad than the time you got ${players[name]}!`
      );
      players[name] = tries;
    } else {
      alert(
        `Congratulations ${name}! You won this zero-skill game in ${tries} attempts!`
      );
    }
  } else {
    alert(
      `Congratulations ${name}! You won this zero-skill game in ${tries} attempts!`
    );
    players[name] = tries;
  }

  let goAgain = confirm(
    "Your attempts were " +
      submittedNums.join(", ") +
      ".\nWould you like to try again?"
  );
  if (goAgain) {
    guessingGame();
  } else {
    alert("That's what I thought, smell you later " + name + "!");
  }
}

guessingGame();
