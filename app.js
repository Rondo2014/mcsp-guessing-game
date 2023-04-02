/* This being an assignment, I did leave the console.logs that I was using to test
when I was cleaning up my code*/

//Player object is stored outside of the function so that scores can be used in future games
let players = {}; // object to store player names and their previous attempts

/*I wrapped everything I've done so far into a functiion so that I can invoke it to begin the game
and then invoke it again inside the game to run it again should the player choose*/

function guessingGame() {
  //checks if your name exists in the player object before the prompt, in case this is not your fist time
  if (!players[name]) {
    name = prompt("Welcome to the Thunderdome user, please input your name!");
    if (name === null) {
      return;
    }
  }

  //checks if name is empty or a number and prompts again if either are true
  while (name === "" || !isNaN(name)) {
    name = prompt("Please input a valid name.");
  }

  let input = prompt("Guess a number between 1-20");
  let number = Number(input);
  //array to store the numbers guessed in order to show the player after correct guess
  let submittedNums = [];
  //Secret number is a random whole number between 1-20
  const secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  //initialize the number of tries by 1 to accurately relay number of tries to the player
  let tries = 1;

  //message for if the user cancels the game
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
    if (number === 0 || number > 20) {
      number = prompt("Please input a number between 1-20.");
    }
    if (number === null) {
      return;
    }
    if (number > secretNumber) {
      number = Number(prompt(name + ", you idiot, go lower!"));
    } else {
      number = Number(prompt(name + ", you idiot, go higher!"));
    }
    submittedNums.push(number);

    //counts how many attempts it takes by incrementing oover the tries variable
    tries++;
  }
  //new variable to represent the difference between their last attempt and their current attempt.
  let difference = players[name] - tries;
  console.log(submittedNums);
  console.log(tries);
  // updates the score or adds a new player
  if (players[name]) {
    //if player already exists, checks whether they did better or worse than their last attempt
    if (tries < players[name]) {
      alert(
        //Uses difference variable to tell you how much better, or in this case less worse, you did compared to your stored attempt
        `Congratulations ${name}! You were less pathetic by ${difference} than last time, when you got ${players[name]}!`
      );
      players[name] = tries;
    } else if (tries > players[name]) {
      alert(
        //We use the Math.abs method here to change the output from a negative, to a positive number
        `Oh no! Not good ${name}, you were worse by ${Math.abs(difference)}!`
      );
    } else {
      alert(
        `Congratulations ${name}! You won this zero-skill game in ${tries} attempts!`
      );
    }
  } else {
    alert(
      `Congratulations ${name}! You won this zero-skill game in ${tries} attempts!`
    );
    //adds new player to player object and stores their score
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
