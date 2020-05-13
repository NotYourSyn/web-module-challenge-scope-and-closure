// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
};

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * // The difference is counter1 is in the function scope and counter2 is in the global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * // Counter1 has closure because everything is declared inside the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * // Counter1 is preferred if you dont need to use the variable outside of the function, Counter2 is preferred if you want to call a variable more than once.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
 let randomNUm=Math.round(Math.random()*2);
};

innning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,inningNum){
 let homeScr = 0;
 let awayScr = 0;
 for(let i=0; i<inningNum -1; ++i) {
   homeScr += inning();
   awayScr += inning();
 }
 return `Home: ${homeScr}, Away: ${awayScr}`;

};

finalScore(inning,9);
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cb, innings) {
  let inningNum = ['1st Inning:', '2nd Inning:', '3rd Inning:', '4th Inning:', '5th Inning:', '6th Inning:', '7th Inning:', '8th Inning:', '9th Inning:']
  let homePts = 0;
  let awayPts = 0;
  let finalscore = [];
  for(let i=0; i<innings;i++){
    let newCount=()=>{
      return function(){
        homePts = homePts+(cb(0,2))
        awayPts = awayPts+(cb(0,2))
        return [homePts, awayPts];
      }}
    const newCount1 = newCount();
    newCount1();
    finalscore.push(`${inningNum[i]} ${homePts} - ${awayPts}`);
  }
  finalscore.push (`Final Score: ${homePts} - ${awayPts}`)
  return finalscore;
}
console.log(scoreboard(inning, 9));
