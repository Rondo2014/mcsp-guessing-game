let name = prompt("Welcome to the thunderdome user, please identify yourself:");
let submittedNums = [];

function guessingGame() {
  let input = prompt("Guess a number betwen 1-20");
  let number = Number(input);
  const secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  let tries = 1;

  if (input === null) {
    alert("Later loser.");
    return;
  }

  //checks if input is a whole number
  while (!Number.isInteger(number)) {
    number = Number(prompt("That's not a whole number >:("));
  }
  submittedNums.push(number);

  //checks whether the secret number and the guess are equal and prompts the user
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

    //add an incrementer to the tries variable to count attempts
    tries++;
  }

  console.log(submittedNums);
  console.log(tries);

  let goAgain = confirm(
    "Congrats " +
      name +
      " , you won a no-skill game of chance after " +
      tries +
      " attempts!\nYou're stupid attempts were " +
      submittedNums.join(", ") +
      ".\nWould you like to try again?"
  );
  if (goAgain) {
    guessingGame();
  } else {
    alert("That's what I thought, smell you later " + name + "!");
  }
}
// I wrapped everything I have done thusfar into a function in order to invoke it again if the user chooses
guessingGame();
