//Creator: Jordan Dusick

//Project name: Automatic Die Roller

//What this program does: The user will input the type of die they want to 
//roll and the number of times they wish to roll it, the program will then generate 
//the necessary random numbers and the results will be displayed to the screen.

//This function generatates a random number and returns it to the main function to be displayed.
function randomNumberGenerator(dieTypeCalc, dieNumberCalc) {
  var dieResults;
  var dieResultsToReturn = [];

  for(var i = 0; i < dieNumberCalc; i++) { 
    dieResults = Math.floor(Math.random() * dieTypeCalc) + 1;
    dieResultsToReturn.push(dieResults);
  }  
  return dieResultsToReturn;
}

//This function sums all of the dice results and returns the total to the main function to be displayed.
function diceSum(dieResultsCalc) {
  var numberOfResults = dieResultsCalc.length;
  var rollTotalCalc = 0;
  
  for (var index = 0; index < numberOfResults; index++) {
    rollTotalCalc += dieResultsCalc[index];
  }
  return rollTotalCalc;
}

//Function for rolling X-Wing defense die
function xWingDefense(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1 || dieResultsCalc[index] === 5 || dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Evade";
    } else if (dieResultsCalc[index] === 8 || dieResultsCalc[index] === 3) {
      dieResultsCalc[index] = "Focus";
    } else {
      dieResultsCalc[index] = "Blank";
    }
  }
  return dieResultsCalc;
}

//Function for rolling X-Wing attack die
function xWingAttack(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1 || dieResultsCalc[index] === 5 || dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Hit";
    } else if (dieResultsCalc[index] === 2) {
      dieResultsCalc[index] = "Critical Hit";
    } else if (dieResultsCalc[index] === 8 || dieResultsCalc[index] === 3) {
      dieResultsCalc[index] = "Focus";
    } else {
      dieResultsCalc[index] = "Blank";
    }
  }
  return dieResultsCalc;
}

//Function for rolling Armada blue die
function armadaBlueDie(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1 || dieResultsCalc[index] === 8 || dieResultsCalc[index] === 5 || dieResultsCalc[index] === 4) {
      dieResultsCalc[index] = "Hit";
    } else if (dieResultsCalc[index] === 7 || dieResultsCalc[index] === 2) {
      dieResultsCalc[index] = "Accuracy";
    } else if (dieResultsCalc[index] === 3 || dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Critical Hit";
    } else {
      dieResultsCalc[index] = "Blank";
    }
  }
  return dieResultsCalc;
}

//Function for rolling Armada red die
function armadaRedDie(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1 || dieResultsCalc[index] === 4) {
      dieResultsCalc[index] = "Hit";
    } else if (dieResultsCalc[index] === 5) {
      dieResultsCalc[index] = "Double Hit";
    } else if (dieResultsCalc[index] === 6 || dieResultsCalc[index] === 7) {
      dieResultsCalc[index] = "Critical Hit";
    } else if (dieResultsCalc[index] === 8){ 
      dieResultsCalc[index] = "Accuracy";
    } else {
      dieResultsCalc[index] = "Blank";
    }
  }
  return dieResultsCalc;
}

//Function for Armada black die
function armadaBlackDie(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1 || dieResultsCalc[index] === 5 || dieResultsCalc[index] === 8 || dieResultsCalc[index] === 4) {
      dieResultsCalc[index] = "Hit";
    } else if (dieResultsCalc[index] === 2 || dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Hit/Critical Hit";
    } else {
      dieResultsCalc[index] = "Blank";
    }
  }
  return dieResultsCalc;
}

//Function for Elder Sign red die
function eSignRed(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1) {
      dieResultsCalc[index] = "2 Investigation";
    } else if (dieResultsCalc[index] === 2) {
      dieResultsCalc[index] = "Wildcard";
    } else if (dieResultsCalc[index] === 3) {
      dieResultsCalc[index] = "3 Investigation";
    } else if (dieResultsCalc[index] === 4) {
      dieResultsCalc[index] = "4 Investigation";
    } else if (dieResultsCalc[index] === 5) {
      dieResultsCalc[index] = "Lore";
    } else if (dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Peril";
    }
  }
  return dieResultsCalc;
}

//Function for Elder Sign yellow die
function eSignYellow(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1) {
      dieResultsCalc[index] = "1 Investigation";
    } else if (dieResultsCalc[index] === 2) {
      dieResultsCalc[index] = "Peril";
    } else if (dieResultsCalc[index] === 3) {
      dieResultsCalc[index] = "3 Investigation";
    } else if (dieResultsCalc[index] === 4) {
      dieResultsCalc[index] = "4 Investigation";
    } else if (dieResultsCalc[index] === 5) {
      dieResultsCalc[index] = "2 Investigation";
    } else if (dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Lore";
    }
  }
  return dieResultsCalc;
}

//Function for Elder Sign green die
function eSignGreen(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1) {
      dieResultsCalc[index] = "1 Investigation";
    } else if (dieResultsCalc[index] === 2) {
      dieResultsCalc[index] = "2 Investigation";
    } else if (dieResultsCalc[index] === 3) {
      dieResultsCalc[index] = "Terror";
    } else if (dieResultsCalc[index] === 4) {
      dieResultsCalc[index] = "3 Investigation";
    } else if (dieResultsCalc[index] === 5) {
      dieResultsCalc[index] = "Peril";
    } else if (dieResultsCalc[index] === 6) {
      dieResultsCalc[index] = "Lore";
    }
  }
  return dieResultsCalc;
}

//Function for Dead of Winter Exposure die
function DoWExposure(dieResultsCalc) {
  for (var index = 0; index < dieResultsCalc.length; index++) {
    if (dieResultsCalc[index] === 1) {
      dieResultsCalc[index] = "Bitten";
    } else if (dieResultsCalc[index] === 3 || dieResultsCalc[index] === 12 || dieResultsCalc[index] === 9) {
      dieResultsCalc[index] = "Wound";
    } else if (dieResultsCalc[index] === 6 || dieResultsCalc[index] === 11) {
      dieResultsCalc[index] = "Frostbite";
    } else {
      dieResultsCalc[index] = "Blank";
    }
  }
  return dieResultsCalc;
}
  
//This is the main function of the program and it's purpose is to take in the inputs 
//from the user, proccess them, and send the results to the various function that will handle the calculations.
function main() {
  var clearButton = document.getElementById("clear");
  var dieNumberField = document.getElementById("die_number");
  var dieResultsCalc = [];
  var dieType = 0;  
  var inputDieTypeField = document.getElementById("die_type");
  var output = "";
  var outputArea = document.getElementById("output");
  var rollButton = document.getElementById("roll");
  var rollCounter = 1;
  var rollTotal;

  //Event listener for the clear button that will reset the output.
  clearButton.addEventListener('click', function(event){
    output = "";
  });
  
  //Event listener for the roll button which contains the majority of the code.
  rollButton.addEventListener('click', function(event){
    event.preventDefault();    
    
    var dieNumber = dieNumberField.value;
    var inputDieType = inputDieTypeField.value;
    
    //This switch decides the number of sides the die has based on the user input.
    switch(inputDieType) {
      case "D6":
        dieType = 6;
        break;
      case "D8":
        dieType = 8;
        break;
      case "D10":
        dieType = 10;
        break;
      case "D12":
        dieType = 12;
        break;
      case "D20":
        dieType = 20;
        break;
      case "X-Wing attack die":
        dieType = 8;
        break;
      case "X-Wing defense die":
        dieType = 8;
        break;
      case "Armada blue die":
        dieType = 8;
        break;
      case "Armada red die":
        dieType = 8;
        break;
      case "Armada black die":
        dieType = 8;
        break;
      case "Elder Sign red die":
        dieType = 6;
        break;
      case "Elder Sign yellow die":
        dieType = 6;
        break;
      case "Elder Sign green die":
        dieType = 6;
        break;
      case "Dead of Winter Exposure die":
        dieType = 12;
        break;
      default:
        dieType = 6;
    }
    
    //This line will send the type of die and the number of times the user wants the die rolled to the randomNumberGenerator function.
    dieResultsCalc = randomNumberGenerator(dieType, dieNumber);
    
    //This if statement decides if you are using a special kind of die and sends it to the appropriate function.
    if (inputDieType === "X-Wing defense") {
      dieResultsCalc = xWingDefense(dieResultsCalc);
    } else if (inputDieType === "X-Wing attack") {
      dieResultsCalc = xWingAttack(dieResultsCalc);
    } else if (inputDieType === "Armada blue die") {
      dieResultsCalc = armadaBlueDie(dieResultsCalc);
    } else if (inputDieType === "Armada red die") {
      dieResultsCalc = armadaRedDie(dieResultsCalc);
    } else if (inputDieType === "Armada black die") {
      dieResultsCalc = armadaBlackDie(dieResultsCalc);
    } else if (inputDieType === "Elder Sign red die") {
      dieResultsCalc = eSignRed(dieResultsCalc);
    } else if (inputDieType === "Elder Sign yellow die") {
      dieResultsCalc = eSignYellow(dieResultsCalc);
    } else if (inputDieType === "Elder Sign green die") {
      dieResultsCalc = eSignGreen(dieResultsCalc);
    } else if (inputDieType === "Dead of Winter Exposure die") {
      dieResultsCalc = DoWExposure(dieResultsCalc);
    } else {
      rollTotal = diceSum(dieResultsCalc);
    }

    //Here we build the final output.
    output += "<p>Roll " + rollCounter + ": <br>";
    
    for(var index = 0; index < dieResultsCalc.length; index++) {
      if (index === dieResultsCalc.length -1) {
        output += dieResultsCalc[index] + "";
      } else {
        output += dieResultsCalc[index] + ", ";
      }
    } 
    
    //Decide if we should add a total to the output.
    if (dieNumber > 1 && inputDieType !== "X-Wing defense" && inputDieType !== "X-Wing attack" && inputDieType !== "Armada black die" && inputDieType !== "Armada blue die" && inputDieType !== "Armada red die" && inputDieType !== "Elder Sign red die" && inputDieType !== "Elder Sign yellow die" && inputDieType !== "Elder Sign green die" && inputDieType !== "Dead of Winter Exposure die") {
      output += " = " + rollTotal;
    }
    
    output += "</p>";
    
    rollCounter ++;
    
    outputArea.innerHTML = output;
  });
}

main();