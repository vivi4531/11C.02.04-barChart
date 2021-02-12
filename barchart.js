"use strict";

window.addEventListener("load", initArray);

let model = [];

function initArray() {
    //Adds 40 random numbers to the array "model"

    //If counter is less than 40, then add 1 
  for (let counter = 0; counter < 40; counter++) {
    model[counter] = getNumbers();
  }
  loop();
  showData();
}

function loop() {
//Gets the 40 random numbers from the array "model" and adds them to each bar

  for (let counter = 0; counter < 40; counter++) {
      //Gets id for container and every single bars
    document.getElementById("bars").getElementsByClassName("bar")[
      counter
      //Adds px to the height of the single bars
    ].style.height = model[counter] + "px";
  }
}

function getNumbers() {
//Generates a random number between 0 and 32
  const randomNumber = Math.floor(Math.random() * 32);
  console.log(randomNumber);
  return randomNumber;
}

function showData() {
//Calls modifyModel and loop
  modifyModel();
  loop();
  
  //setTimeout for 500ms = 1s (make the apperance look like an animation)
  setTimeout(showData, 500);
}

function modifyModel() {
//Adds a number in the end of the array
  model.push(getNumbers());

  //Gets the first number in the array and removes it
  model.shift();
}
