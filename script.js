/* 
Guess a number between 1 and 100.

The program will generate a secret number which will be hidden. Players need to guess the number by typing the number 
into a box (input element).

Initial score is 0. High Score is 0.

1. When there is no input, and user press check button, there is message showing no input.

2. When user put a wrong number, and user press check button, message shows it is too low or too high. 
There is a score starting from 10 and will be decreasing by 1 every time when user guessing a wrong number.

3. When user put a correct number, background color changes, the secret number shows, background with of 
secret number changes, and high score will be updated or remained the same.

Implement a game rest functionality, so that the player can make a new guess!

1. Select the element with the 'Play' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

3. When user put a correct number, background color changes, the secret number shows,
 background with of secret number changes, and high score will be updated or remained the same.

Implement a game rest functionality, so that the player can make a new guess!

1. Select the element with the 'Play' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input fields

4. Also restore the original background color and number background width
*/

function guessGameDefault() { // The default range is from 0 -> 100

    let number = Math.trunc(Math.random() * 100);

    console.log("Guessing game | Range [0 - 100]");
    do {
        let value = prompt("Guess my number"); // Prompt here seems not working. value get nothing

        if (value < 0 || value > 100) console.log("Out of range.");
        else {
            if (value > number)
                console.log("Too high!");
            else if (value < number)
                console.log("Too low!");
            else
                console.log("You found my number!");
        }
    } while (value != number);
}

function guessGameRange() { // In case we need to select a range for the game

    let number = Math.trunc(Math.random() * 100);

    do {
        let value = prompt("Guess my number");

        if (value < 0 || value > 100) console.log("Out of range.");

        if (value > number)
            console.log("Too high!");
        else if (value < number)
            console.log("Too low!");
        else
            console.log("You found my number!");
    } while (value != number && min >= max);
}

function isEmpty(value){ // I just wrote it
    return value === "";
}









