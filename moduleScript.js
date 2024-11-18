
// function init() {

// }

// function moduleParameterChanged(param) {
//   script.log(param.name + " parameter changed");

// }

// function moduleValueChanged(value) {
//   script.log(value.name + " value changed");

//   if (!value.isParameter()) {
//     // if it is a trigger
//     script.log("it is a trigger");
//   }
// }

function dataReceived(data) {
  //If mode is "Lines", you can expect data to be a single line String
  script.log("Data received : " + data);

}

// Here are the callback functions for the commands

function mute() {
  local.send("0A0.");
}

function unmute() {
  local.send("0A1.");
}

function sendCustomMessage(message) {
  local.send(message);
}