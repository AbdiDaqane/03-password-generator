// Assignment Code
// reach into the html and grab the button
// onstant is a variable whose value cannot change once it has been assigned
const upperCase= "ABCDEFGHIKJLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const sym= "!#$&%^&*"
const numbers="1234567890"

// Assignment Code for password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Loops can execute a block of code as long as a specified condition is reached
  while (password == ""){
    //The alert() method displays an alert box with a message and an OK button
    alert("Password can not be empty, Please try again!")
    password = generatePassword() 
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
let pwd = Number(prompt("How long do you want your password?(8-128)"))

while(pwd < 8 || pwd > 128 ){
  alert("Please choose a range between 8 to 128 characters")
  // prompt method displays a dialog box that prompts the user for input
  // number property returns the function that created the Number prototype
  pwd = Number(prompt("How long do you want your password?(8-128)"))
}


let upr = confirm("Would you like uppercase letters?")
let lwr = confirm("Would you like lowercase letters?")
let spc = confirm("Would you like symbols?")
let num = confirm("Would you like numbers?")
let charPool = ""
let password = ""
//while password true do this 
if  (upr) {
  charPool += upperCase
}
if  (lwr) {
  charPool += lowerCase
}
if  (spc) {
  charPool += sym
}
if  (num) {
  charPool += numbers
}

for (let i = 0; i < pwd; i++) {
  //generate randhom number for charpoll index 
  //use random number to find char.at(y) 
  // add that y to password
  // math.random is a  method that returns a pseudorandom double greater than or equal to 0.0 and less than 1.0
  // math.floor It returns the greatest integer that is less than or equal to input number x 
  let y = Math.floor(Math.random() * charPool.length)
  password += charPool.charAt(y)
}

return password
}
