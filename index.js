//Require readline-sync
let readlineSync = require('readline-sync');

//Get a random index that will represent the position of an element inside the prefixes array
function RandomPrefix(max_value){
	
	return index = Math.floor(Math.random() * max_value);
}
//Changes the positions of the movies, so everytime you play, you get different movies.
function shuffle(arr) {
  let ctr = arr.length, temp, index;

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      // Swaps the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
  }
  return arr;
}

//verify if the name of the movie is correct
function verifyMovieName(name,answer){
  answer = answer.toLowerCase();
  if(name.includes(answer) && answer!="" && answer.length>4){
    return true;
  }else{
    return false;
  }
}

//Thanks for playin and socre message
function thanksForPlaying(score){
  if(score===1){
    console.log(`You guessed ${score} movie! \n Thanks for playing!`);
  }else{
     console.log(`You guessed ${score} movies! \n Thanks for playing!`);
  }
}

//text decoration
function decorations(){
  console.log("~~~~~~~~~~~~~~\n");
}

function game(){


let graphic = [`

       ||                   ||
       ||                   ||
       ||        <^>        ||
       |||===I||(-@-)||I===|||
       ||         _/        ||
       ||                   ||
       ||                   ||
       ||                   ||
       ||                   ||

`, `
     ||~
 _   ||~ _
[_]--'--[_]
|'|"" ""|'|
| | /^  | |--->WELCOME TO 
|_|_|I|_|_|    HOGWARTS
           `,
          ` 
             **************************
          .*##*:*####***:::**###*:######*.
         *##: .###*            *######:,##*
       *##:  :####:             *####*.  :##:
        *##,:########**********:,       :##:
         .#########################*,  *#*
           *#########################*##:
             *##,        ..,,::**#####:
              ,##*,*****,        *##*
                *#########*########:
                  *##*:*******###*
                   .##*.    ,##*
                     :##*  *##,
                       *####:
                         :,
      `];
   
  let movie = [{name:`star wars`,
              hints:["Starts in a galaxy far far away…",
              "R2d2 is a robot that appears in it.",
              "Very famous by the quote \"I AM YOUR FATHER!\""],
              ascii: graphic[0]
              },
{name:"harry potter",
hints:["This one is about \"The boy who lived\"",
              "The main villians name is \"Vol... THAT WHO MUST NOT BE NAMED\"",
              "A kid goes to Hogwarts to learn magic"],
              ascii: graphic[1]

},
{name:"superman",
hints:["Better known as \"The man of steel\"",
              "Lex Luthor is his mortal enemy",
              "Look, up in the sky! Its a bird! Its a plane! Its..."],
              ascii: graphic[2]

}];


let prefixes = ["No! Here’s a hint","Do you live under a rock? Here’s another hint:","Looks like someone's gotta go to the movies more often, try again:", "Oh no! Let's try again"];

  console.log(`
  .-------------.
  |  Hi, user   |
  '-------------'
      ^      ( _/)
      '----- (O.o)
             (> <)....WELCOME TO GUESS THE MOVIE! `);
    

  console.log("                   ...You have 3 shots to guess each movie!");
  ready = readlineSync.question("Let me know when you’re ready to start\n");

  if(ready!=null){
    decorations();
    let currentMovie = shuffle(movie).shift();
    let gameOn = true, userAnswer;
    let hintsNumber = currentMovie.hints.length-1;
    let score = 0;

    //Game will go on until users find the answer or they run out of hints
    while(gameOn===true){
      userAnswer = readlineSync.question(currentMovie.hints[hintsNumber]+"\n");
      if(verifyMovieName(currentMovie.name,userAnswer)){
        console.log(`Very well! it was ` + currentMovie.name.toUpperCase());
        console.log(currentMovie.ascii);
        score++;
        //asks if they want to keep playing
        if(movie.length!=0){
          continuePlaying = readlineSync.question("Do you want to keep playing? (Y/N)\n");
          if(continuePlaying.toLowerCase() !== 'y') {
            gameOn = false;
            decorations();
            thanksForPlaying(score);
          } else {
            decorations();
            currentMovie = movie.shift();
            hintsNumber = currentMovie.hints.length;
          }
        }else{
          thanksForPlaying(score);
        }
      }else{
        //If they dont guess right
        if(hintsNumber>0){
          //they get a message of shame if they still have shots
          decorations();
          console.log(prefixes[RandomPrefix(prefixes.length)]);
        }else{
          decorations();
          console.log(`You lose! it was ` + currentMovie.name.toUpperCase());
          decorations();
          if(movie.length!=0){
            continuePlaying = readlineSync.question("Do you want to keep playing? (Y/N)\n");
          if(continuePlaying.toLowerCase() !== 'y') {
            gameOn = false;
            decorations();
            thanksForPlaying(score);
          } else {
            currentMovie = movie.shift();
            hintsNumber = currentMovie.hints.length;
            decorations();
          }
          }else{
          //there are no more hints and no more movies!
          gameOn = false;
          decorations();
          thanksForPlaying(score);
          }
        }
        
      }
      hintsNumber--;

    }


   }
}

//Run the game.
game();
