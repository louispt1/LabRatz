
let inputElem;
let firstScreen = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputElem = createInput('');
 
}

function draw() {
  background(0);
  entryScreen();

}


function mouseClicked() {

}


function CheckPassword(inputtxt) { 
  let passw = "VibvealHeariumLiefliteChatfril";
  let passw2 = "Vibvealheariumlieflitechatfril";
  let passw3 = "vibvealheariumlieflitechatfril";
  if(inputtxt == passw || inputtxt == passw2 || inputtxt == passw3) { 
    return true;
    } else { 
  return false;
    }
  }


  function onInput() {
    text(inputElem.input.value, 30, 100);
    passString = inputElem.value();
    console.log(inputElem.value());
    if (CheckPassword(inputElem.value())) {
      console.log("check passed");
      firstScreen = false;
    }

  }

  function entryScreen() {
    if (firstScreen) {
      textSize(14);
      inputElem.position(width/2-80,height/2);
      inputElem.input(onInput);
      textAlign(CENTER);
      stroke(0);
      fill(255);
      text("Password: (hint - your favourite elements!)", width/2, height/2-10);
    } else {
      inputElem.hide();
    }
  }

  function secondScreen() {
    
  }

// Plan: Make each of the numbers an experiment


// Putting first coin into gumball machine - 1
// Putting second coin into gumball machine - 2
// Putting third coin into gumball machine - 3
// Get the puzzle (Pavlov) - 4
// Find blacklight torch - 5
// Putting password in - 6
