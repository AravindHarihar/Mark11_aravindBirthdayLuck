const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#check-button");
const resultBox = document.querySelector("#result");


function checkLuck(){
  console.log("clicked")
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(dob&&luckyNumber.value){
    console.log("printing sum :" + sum);
    compareValues(sum, luckyNumber.value)
    console.log("here")
  }else{
    console.log("Enter a number");
  }
}

function calculateSum(dob){
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for(i=0; i<dob.length; i++){
    sum = Number(sum) + Number(dob.charAt(i));
  }
  return sum
}

function compareValues(sum, luckyNumber){
  if(sum%luckyNumber === 0){
    console.log("You are lucky")
    resultBox.value = "Your Birthday is Lucky!! ✨";
    
  }else{
    resultBox.value = "Uh oh! your Birthday is not lucky 😵‍💫";
  }

}

check.addEventListener("click", function(){
  checkLuck();
})
