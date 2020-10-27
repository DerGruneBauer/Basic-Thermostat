/*let targetUnit = "F";
let actualTemp = 80;
let tempCelsius

if (targetUnit === "F" || targetUnit === "f"){
    tempCelsius = (((actualTemp-32)*5)/9);
    console.log(`The temperature in celsius is ${tempCelsius}. The original temperature in ${targetUnit} is ${actualTemp}.`)
} 
    else if (targetUnit === "K" || targetUnit === "k" ){
    tempCelsius = (actualTemp - 273.15);
    console.log(`The temperature in celsius is ${tempCelsius}. The original temperature in ${targetUnit} is ${actualTemp}.`)
} 
    else {
    tempCelsius = actualTemp;
    console.log(`The temperature in celsius is ${tempCelsius}. The original temperature in ${targetUnit} is ${actualTemp}.`)
}*/

/* Comment out all of the code below and uncomment code above for extended challenge of changing K/F into C and logging value. Will only appear in console log*/

function updateTemps() {

    let actualTemp = document.querySelector('#actualTemp').value;
    let desiredTemp = document.querySelector('#desiredTemp').value;
    let thermostatColor = document.querySelector('.thermostatInfo');

    if (actualTemp > desiredTemp){
       console.log("Run A/C");
       document.getElementById("newValue").innerHTML = "The house is cooling down"
       thermostatColor.style["background-color"] = "lightSteelBlue";
       thermostatColor.style["transition"] = "background-color 1s linear";
    } 
        else if (actualTemp < desiredTemp){
        console.log("Run Heat");
        document.getElementById("newValue").innerHTML = "The house is warming up"
        thermostatColor.style["background-color"] = "lightCoral";
        thermostatColor.style["transition"] = "background-color 1s linear";
    } 
        else {
        console.log("Standby");
        document.getElementById("newValue").innerHTML = "The thermostat is on standby"
        thermostatColor.style["background-color"] = "lightGray";
        thermostatColor.style["transition"] = "background-color 1s linear"
    }

  }
