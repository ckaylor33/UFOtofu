//Get string value from the user
function getValue() {
  document.getElementById('alert').classList.add('invisible')
  document
    .getElementById('alert')
    .classList.remove('alert-success' && 'alert-danger')

  //get user string from the page
  let userString = document.getElementById('userString').value

  //check for a palindrome
  let returnObj = checkForPalindrome(userString)

  //display message to the screen
  displayString(returnObj)
}

//Generate backwards string and check for palindrome
function checkForPalindrome(userString) {
  userString = userString.toLowerCase()
  //remove spaces and special characters
  let regex = /[^a-z0-9]/gi
  userString = userString.replace(regex, '')

  let revString = []
  let returnObj = {}

  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index]
  }

  if (revString == userString) {
    document.getElementById('alert').classList.add('alert-success')
    returnObj.msg = `Well done! You entered a palindrome!`
  } else {
    document.getElementById('alert').classList.add('alert-danger')
    returnObj.msg = 'Sorry! You did not enter a palindrome!'
  }

  returnObj.reversed = revString

  return returnObj
}

//Display backwards string with checks
function displayString(returnObj) {
  document.getElementById('alertHeader').innerHTML = returnObj.msg
  document.getElementById(
    'userMessage'
  ).innerHTML = `Your phrase reversed is: ${returnObj.reversed}`

  document.getElementById('alert').classList.remove('invisible')
}
