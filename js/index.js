const myBalance = document.getElementById("my-balance");
const getBalance = document.getElementById("balance");

const campaign1 = document.getElementById("campaign-1-total");

const campOneInput = document.getElementById("camp-1-input");
const campOneBtn = document.getElementById("camp-1-btn");
const donated = document.getElementById("donated-amount");
const campOneTotal = document.getElementById("camp-1-total");

function inputCheck() {
  const err = document.getElementById("error");
  if (isNaN(campOneInput.value) || campOneInput.value <= 0) {
    err.classList.remove("hidden");
  } else if (campOneInput == null || campOneInput == "") {
    err.classList.add("hidden");
  } else {
    err.classList.add("hidden");
  }
}
campOneInput.addEventListener("keyup", (e) => {
  if (e.target.value == isNaN) {
    console.log("Invalid Input");
  }
});

campOneBtn.addEventListener("click", (e) => {
  //revent page reloading when button is clicked
  e.preventDefault;

  // get user balance as integer
  const userBalance = parseInt(getBalance.textContent);

  //check if user balance is not 0
  if (userBalance != 0) {
    // get input value
    const donatedAmount = parseInt(campOneInput.value);
    // calculate campaing total amount with input value
    const compTotal = parseInt(campOneTotal.textContent) + donatedAmount;
    // print total amount as text
    campOneTotal.innerText = compTotal + " BDT";
    // print total amount as text in modal
    donated.innerText = donatedAmount;
    // substract user input amount form user balance
    const remain = userBalance - donatedAmount;
    // print remaining amount to the user blance after donated
    getBalance.innerText = remain;
  } else {
    alert("Your balance is 0. Please add coin to make donation");
  }

  console.log(getBalance);
});
// getBalance.addEventListener("click", () => {
//   console.log(intBalance);
// });
