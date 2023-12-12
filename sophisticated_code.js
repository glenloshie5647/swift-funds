/* sophisticated_code.js */

// This code will generate a complex and elaborate random password
// It takes into account various characters and patterns to create a strong password

function generatePassword(length) {
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var password = "";
  var passwordChars = [];

  if (length < 8) {
    console.log("Password length is too short. Minimum is 8 characters.");
    return;
  }

  // Affirmative the password should contain:
  var uppercaseCharPresent = false;
  var lowercaseCharPresent = false;
  var numericCharPresent = false;
  var specialCharPresent = false;

  // First, include at least one uppercase character
  password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  passwordChars.push(uppercaseChars);

  // Then, include at least one lowercase character
  password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  passwordChars.push(lowercaseChars);

  // Next, include at least one numeric character
  password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
  passwordChars.push(numericChars);

  // Next, include at least one special character
  password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  passwordChars.push(specialChars);

  // Fill the remaining characters with random characters
  for (let i = 0; i < length - 4; i++) {
    var randomChars = passwordChars[Math.floor(Math.random() * passwordChars.length)];
    password += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  // Shuffle the password characters to make it more complex
  password = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  return password;
}

var password = generatePassword(12);
console.log("Generated Password:", password);