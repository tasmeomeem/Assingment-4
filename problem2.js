//  -----problem Number 2 -----  

function matchFinder (userName, userInput){
    let finding = "john Doe";
    let doesExist = finding . includes("ohn");
    console.log(doesExist);
}
const userName = "jhon Doe";
const userInput = "ohn";
matchFinder (userName, userInput);


// ===================================
function matchFinder (userName, userInput){
    if (userName === userInput){
        console.log('True');
    }
    else{
        console.log('False');
    }
}
const userName = 'javascript';
const userInput = 'code';
matchFinder (userName, userInput);

// ==================================
function matchFinder(user1, user2) {
    if (user1 === user2) {
      console.log('True');
    } else {
      console.log('False');
    }
  }
  
  const user1 = 'Peter parker';
  const user2 = 'pen';
  matchFinder(user1, user2);

// =====================================

function matchFinder(string1, string2) {
    if (string1 === string2) {
      console.log('True');
    } else {
      console.log('False');
    }
  }
  
  const string1 = 'peter parker';
  const string2 = 'pet';
  matchFinder(string1, string2); 

// Bonus part
// ==================================
function matchFinder(string1, string2) {
  if (typeof string1 === "string" || typeof string2 !== "string" ) {
    console.log("string1 is a string value, and string2 is not a string.");
  } 
  
  else {
    console.log("string1 is not a string or string2 is a string.");
  }
  return matchFinder;
}
const string1 = "jhon";
const string2 = 25;

matchFinder(string1 , string2);


