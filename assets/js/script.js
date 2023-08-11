// Assignment code here

function passwordParameters(){
  var length = 0;
  var password ="";
  var loop1 = true;
  var noSpecial = ["a", "b", "c", "d", "e", "f", "g", "h", 
                   "i", "j", "k", "l", "m", "n", "o", "p", 
                   "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                  
  var yesSpecial = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                    " ", "!", '"', "#", "$", "%", "&", "'", ")", "(", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^",
                    "_", "`", "{", "|", "}", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  do{
    var questionOne = prompt("How long will this password be?\nEnter a number between 8 and 128:");
    if (questionOne >= 8 && questionOne <= 128 ){
      length = questionOne;
      length = parseInt(length);
      loop1 = false;
    }else{
      alert("Number not within range, try again.")
    }
  }
  while(loop1 == true);
  var loop2 = true;
  do{
    var questionTwo = prompt("Would you like to include lowercase, uppercase, numeric, and/or special characters?\n(Y or N)");
    if (questionTwo.toLowerCase() == "y"){
      for(i = 0; i<length; i++){
        password = password + yesSpecial[Math.floor(Math.random()*94)]
      }
      loop2 = false;
    }else if (questionTwo.toLowerCase() == "n"){
      for(i = 0; i<length; i++){
        password = password + noSpecial[Math.floor(Math.random()*26)]
      }
      loop2 = false;
    }else{
      alert('Please enter either "Y" or "N" to indicate your choice.');
    }
  }
  while(loop2 == true);
  // console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordParameters();
  // console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);