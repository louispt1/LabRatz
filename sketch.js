let inputElem;
let firstScreen = true;
let secondScreen = false;
let startTime = 0;
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
let exp1;
let exp2;
let exp3;
let exp4;
let exp5;
let exp6;
let overallTimeTaken;
let beige = true;
let time6Check = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputElem = createInput('');
  setAverages();
  setExperimentNames();
}

function draw() {
  background(0);
  entryScreen();
  nextScreen();
 
 

}

function mouseClicked() {

  // console.log("mouse x:      "+mouseX);
  // console.log("mouse y:      "+mouseY);

if (secondScreen) {
  if (mouseX < 150 && mouseY < 50) { // beige tab
    beige = true; 
  } else if (mouseX < 300 && mouseY < 50) {
    beige = false;
  }

}
}

function popLetters() {
  push();
  translate(0,13);
  textStyle(BOLD);
  textSize(35);
  if (mouseX <= 785 && mouseX >= 777 && mouseY <= 296 && mouseY >= 275) {
    text("f", 781,285);
  } else if (mouseX <= 118 && mouseX >= 110 && mouseY <= 294 && mouseY >= 275) {
    text("i", 114,286);
  } else if (mouseX <= 1136 && mouseX >= 1128 && mouseY <= 531 && mouseY >= 511) {
    text("r", 1132, 521);
  } else if (mouseX <= 536 && mouseX >= 528 && mouseY <= 221 && mouseY >= 201) {
    text("e", 532,211);
  } else if (mouseX <= 1259 && mouseX >= 1249 && mouseY <= 393 && mouseY >= 373) {
    text("a", 1254,383);
  } else if (mouseX <= 640 && mouseX >= 630 && mouseY <= 221 && mouseY >= 201) {
    text("l", 635, 211);
  } else if (mouseX <= 268 && mouseX >= 258 && mouseY <= 570 && mouseY >= 550) {
    text("a", 263, 560);
  } else if (mouseX <= 109 && mouseX >= 99 && mouseY <= 430 && mouseY >= 410) {
    text("r", 104, 420);
  } else if (mouseX <= 1374 && mouseX >= 1364 && mouseY <= 430 && mouseY >= 410) {
    text("m", 1369, 420);
  }
   pop();
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
    if (inputElem.input.value) {
      text(inputElem.input.value, 30, 100);
    }
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
      background(200);
      if (time6Check) {
        time6 = millis();
        time6Check = false;
      }
      noStroke();
      
      if (beige) {
      fill(186,179,156); // beige
      rect(0,50,width,height);
      quad(0,50, 30,0, 120,0, 150,50);
      fill(0);
      textStyle(BOLD);
      textAlign(CENTER);
      textSize(16);
      text("Timings", 75, 30);
      fill(157,156,98); // light olive
      quad(150,50, 180,0, 270,0, 300,50);
      fill(0);
      text("Notes", 225, 30);
      
      overallTime();
      push();
      //Time 1
      translate(0,100);
      makeBars(average1, time1, exp1); //  left top
       
      //Time 2
      translate(650,0);
      makeBars(average2, time2-time1, exp2); // center top 
      
      //Time 3
      translate(650,0);
      makeBars(average3, time3-time2, exp3); // right top 
      pop();

      push();
      //Time 4
      translate(0,500);
      makeBars(average4, time4-time3, exp4); //  left top
       
      //Time 5
      translate(650,0);
      makeBars(average5, time5-time4, exp5); // center top 
      
      //Time 6
      translate(650,0);
      makeBars(average6, time6-time5, exp6); // right top 
      pop();
      } else {
        fill(157,156,98); //olive tab
        rect(0,50,width,height);
        quad(150,50, 180,0, 270,0, 300,50);
        fill(0);
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(16);
        text("Notes", 225, 30);
        fill(186,179,156); // beige tab
        quad(0,50, 30,0, 120,0, 150,50);
        fill(0);
        text("Timings", 75, 30);
        textStyle(BOLD);
        fill(0);
        noStroke();
        textSize(30);
        text("Notes:", 100 , 150); // big notes

        push();
        let a = "I have been performing experiments on lab rats for some time. Not all of the experiments have been successful, I must say, and sometimes my assistants have questioned me - they think what i am doing is unethical, that this experiment lacks 'scientific rigour'. I'll show them. This latest experiment is my finest yet. The rats will think they are escaping, each barrier to their exit they overcome indicates a higher level of their desire for freedom.";
        let b = "But, they will never truly escape, my trusty assistants will make sure of that. The assistants will record the time it takes this set of rats to complete each challenge as they try to escape. Once they have reached the final stage my assistants will incinerate the rats before bringing the next batch in to repeat the experiment.";
        let c = "I hope this is the experiment that makes me famous, then I can finally get the recognition I deserve for my efforts to uncover the secrets of nature.";
        textStyle(NORMAL);
        textAlign(LEFT);
        text(a, 100, 200, width-200);
        text(b, 100, 370, width-200);
        text(c, 100, 510, width-200);
        textWrap(WORD);
        pop();

        popLetters();
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
    textSize(28);
   
    translate(width/2,100);
    overallTimeTaken = time6 - startTime;
    overallTimeTaken = getTime(overallTimeTaken);
    textStyle(BOLD);
    text("Overall Time: "+overallTimeTaken, 0,0);
    translate(0,40);
    text("Expected Time: "+getTime(1000*60*60), 0,0);
    pop();
  }

  function getTime(milliseconds) {
    let secs = ceil(milliseconds/1000) % 60;
    let mins = floor(milliseconds/(1000*60));
    return mins + " minutes and " + secs+" seconds";
  }

  function setAverages() {
    average1 = 1000*60*3; // average 1 is 3 minutes atm
    average2 = 1000*60*5; // average 2 is 5 minutes atm
    average3 = 1000*60*5; // average 3 is 5 minutes atm
    average4 = 1000*60*20; // average 4 is 10 minutes atm
    average5 = 1000*60*5; // average 5 is 5 minutes atm
    average6 = 1000*60*5; // average 6 is 5 minutes atm
  }

  function setExperimentNames() {
    exp1 = "First coin inserted:";
    exp2 = "Second coin inserted:";
    exp3 = "Third coin inserted:";
    exp4 = "Pavlovian puzzle completed:";
    exp5 = "Found blacklight torch:";
    exp6 = "Password input in computer:";
  }

  function makeBars(average, time, exp) {
    push();
    scale(2);0123456
    stroke(0);
    translate(50,175);
    let avgHeight = (-6*average/60000)+10;
    let timeHeight = (-6*time/60000)+10;

    noStroke();
    fill(0);
    textAlign(LEFT);
    textSize(10);
    textStyle(NORMAL);
    text("Your time:  "+getTime(time), 0, 15);
    text("Average time:  "+getTime(average), 0, 30);
    text(exp, 0, -120);

    stroke(0);
    line(0,0,150,0); //baseline
    fill(95,85,102); // Average bar colour
    rect(25,0,35,avgHeight); // Average bar
  
    if (betterThanAvg(average, time)) {
      fill(160,32,42); //red
    } else {
      fill(77,150,83); //green
    }
    translate(80,0);
    if (timeHeight < 0) {
      rect(10,0,35,timeHeight); // Team bar
    }
    01234
    pop();
  }

  function betterThanAvg(average, time) {
    if (average < time) {
      return true;
    } else {
      return false;
    }
  }
