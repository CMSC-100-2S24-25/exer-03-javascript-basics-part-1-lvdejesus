// Returns true if char is in alphabet
function inAlphabet(alphabet, char) {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] == char) return true;
  }
  return false;
}

function validatePassword(first, second) {
  if (first != second) return false;
  if (first.length < 8) return false;
  let hasNumber = false;
  let hasUpper = false;
  let hasLower = false;

  for (let i = 0; i < first.length; i++) {
    if (inAlphabet("abcdefghijklmnopqrstuvwxyz", first[i])) {
      hasLower = true;
    } 
    if (inAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", first[i])) {
      hasUpper = true;
    } 
    if (inAlphabet("1234567890", first[i])) {
      hasNumber = true;
    } 
  }

  return hasLower && hasUpper && hasNumber;
}

function reversePassword(pass) {
  reversed = ""
  for (let i = pass.length - 1; i >= 0; i--) {
    reversed += pass[i]
  }
  return reversed;
}

function storePassword(name, pass1, pass2) {
  if (validatePassword(pass1, pass2)) {
    return {
      name: name,
      newpassword: reversePassword(pass1)
    }
  } else {
    return {
      name: name,
      newpassword: pass1
    }
  }
}

console.log(storePassword("John", "Pass1234", "Pass1234")) // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")) // returns {name: "John", newpassword:"Pass123"}
