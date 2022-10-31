
let inputElem;
let firstScreen = true;
let secondScreen = false;
let startTime;
let time1;
let time2;
let time3;
let time4;
let time5;
let time6;
let average1;
let average2;
let average3;
let average4;
let average5;
let average6;
let overallTimeTaken;
let beige = true;
let time6Check = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputElem = createInput('');
  setAverages();
}

function draw() {
  background(0);
  entryScreen();
  nextScreen();
 
}



function mouseClicked() {
if (secondScreen) {
  if (mouseX < 110 && mouseY < 50) { // beige tab
    beige = true; 
  } else if (mouseX < 220 && mouseY < 50) {
    beige = false;
  }
}
}


function CheckPassword(inputtxt) { 
  let passw = "VibvealHeariumLiefliteChatfril";
  let passw2 = "Vibvealheariumlieflitechatfril";
  let passw3 = "vibvealheariumlieflitechatfril";
  let pass4 = "root";
  if(inputtxt == passw || inputtxt == passw2 || inputtxt == passw3 || inputtxt == pass4) { 
    return true;
    } else { 
  return false;
    }
  }


  function onInput() {
    text(inputElem.input.value, 30, 100);
    passString = inputElem.value();
    if (CheckPassword(inputElem.value())) {
      firstScreen = false;
      secondScreen = true;
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
      textStyle(NORMAL);
      text("Password", width/2, height/2-10);
      textStyle(ITALIC);
      text("Hint - your favourite elements!", width/2, height/2+43);
    } else {
      inputElem.hide();
    }
  }

  function nextScreen() {
    if (secondScreen) {
      if (time6Check) {
        time6 = millis();
        time6Check = false;
      }
      
      noStroke();
      if (beige) {
      fill(186,179,156); // beige
      rect(0,50,width,height);
      quad(0,50, 10,0, 100,0, 110,50);
      fill(157,156,98); // light olive
      quad(110,50, 120,0, 210,0, 220,50);
      
      
      overallTime();
      push();
      //Time 1
      translate(0,100);
      makeBars(average1, time1); //  left top
       
      //Time 2
      translate(650,0);
      makeBars(average2, time2); // center top 
      
      //Time 3
      translate(650,0);
      makeBars(average3, time3); // right top 
      pop();
      push();
      //Time 4
      translate(0,500);
      makeBars(average4, time4); //  left top
       
      //Time 5
      translate(650,0);
      makeBars(average5, time6); // center top 
      
      //Time 6
      translate(650,0);
      makeBars(average6, time6); // right top 
      pop();
      } else {
        fill(157,156,98); //olive tab
        rect(0,50,width,height);
        quad(110,50, 120,0, 210,0, 220,50);
        fill(186,179,156); // beige tab
        quad(0,50, 10,0, 100,0, 110,50);
      }
     
    }
  }

  function keyTyped() {
    if (key == 0) {
      startTime = millis();
      console.log("start Time: "+startTime);
    }
    if (key ==1) {
      time1 = millis();
      console.log("time1: "+time1);
    }
    if (key ==2) {
      time2 = millis();
      console.log("time2: "+time2);
    }
    if (key ==3) {
      time3 = millis();
      console.log("time3: "+time3);
    }
    if (key ==4) {
      time4 = millis();
      console.log("time4: "+time4);
    }
    if (key ==5) {
      time5 = millis();
      console.log("time5: "+time5);
    }
    if (key ==6) {
      time6 = millis();
      console.log("time6: "+time6);
    }
  }

  function overallTime() {
    push();
    fill(0);
    textAlign(CENTER);
    textSize(24);
    textStyle(BOLD);
    translate (width/2,100);
    overallTimeTaken = time6 - startTime;
    overallTimeTaken = getTime(overallTimeTaken);
    text("YOUR OVERALL TIME WAS "+overallTimeTaken, 0,0);
    pop();
  }

  function getTime(milliseconds) {
    textStyle(NORMAL);
    let secs = ceil(milliseconds/1000) % 60;
    let mins = floor(milliseconds/(1000*60));
    return mins + " minutes and " + secs+" seconds";
  }

  function setAverages() {
    average1 = 1000*60*5; // average 1 is 5 minutes atm
    average2 = 1000*60*5; // average 2 is 5 minutes atm
    average3 = 1000*60*5; // average 3 is 5 minutes atm
    average4 = 1000*60*5; // average 4 is 5 minutes atm
    average5 = 1000*60*5; // average 5 is 5 minutes atm
    average6 = 1000*60*5; // average 6 is 5 minutes atm
  }


  function makeBars(average, time) {
    push();
    scale(2);0123456
    stroke(0);
    translate(50,175);

    noStroke();
    fill(0);
    textAlign(LEFT);
    textSize(10);

    text("Your time:  "+getTime(time), 0, 15);
    text("Average time:  "+getTime(average), 0, 30);
    stroke(0);016273
    line(0,0,150,0); //baseline
    fill(95,85,102); // Average bar colour
    rect(25,0,35,-10*average/60000); // Average bar

    if (betterThanAvg(average, time)) {
      fill(160,32,42); //red
    } else {
      fill(77,150,83); //green
    }
    translate(80,0);
    rect(10,0,35,-10*time/60000); // Team bar


    pop();
  }

  function betterThanAvg(average, time) {
    if (average < time) {
      return true;
    } else {
      return false;
    }
  }


// Plan: Make each of the numbers an experiment


// Putting first coin into gumball machine - 1 ~time1 `average1 --> etc for rest.
// Putting second coin into gumball machine - 2
// Putting third coin into gumball machine - 3
// Get the puzzle (Pavlov) - 4
// Find blacklight torch - 5
// Putting password in - 6
