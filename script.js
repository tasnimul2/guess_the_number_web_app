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

function guessGameDefault(value, number, defaultScore) { // The default range is from 0 -> 100
    console.log(`Value: ${value} - Number: ${number} - Score: ${defaultScore}`);
    let score = defaultScore;
    if (value < 0 || value > 100)
        return "Out of range.";
    else {
        if (value > number) {
            return ["Too high!", score--];
        } else if (value < number) {
            return ["Too low!", score--];
        } else
            return ["You found my number!", score];
    }
}

function generateNumber() {
    return Math.trunc(Math.random() * 100);
}

const number = generateNumber();

/* Note for you guys: For now it seems that even if there is not input the value = 0. 
** So let work on it for now. We'll try to fix this later or just leave it like that
** if we cannot figure it out. */

document.querySelector("#check-button").addEventListener("click", function getInput() {
    let value = Number(document.querySelector("#input-number").value);
    let defaultScore = 10;
    let msgAndScore = guessGameDefault(value, number, defaultScore);

    console.log(`Value: ${value} - Number: ${number} - Score: ${defaultScore}`);

    document.querySelector(".guess-indicator").textContent = msgAndScore[0];

    if (value === number) {
        document.querySelector(".score").textContent =
        `${document.querySelector(".score").textContent} ${ msgAndScore[1] }`;
    }

})











