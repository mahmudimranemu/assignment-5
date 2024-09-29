const myBalance = document.getElementById("my-balance");
const getBalance = document.getElementById("balance");

const campaign1 = document.getElementById("campaign-1-total");

const campOneInput = document.getElementById("camp-1-input");
const campOneBtn = document.getElementById("camp-1-btn");
const donated = document.getElementById("donated-amount");
const campOneTotal = document.getElementById("camp-1-total");

function remainingBalance() {
  const totalBalance = parseInt(getBalance.textContent);
  const donatedAmount = parseInt(campOneInput.value);

  const balance = totalBalance - donatedAmount;

  //   getBalance.innerText = balance;

  return balance;
}

campOneBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const getAmount = parseInt(campOneInput.value);
  const compTotal = parseInt(campOneTotal.textContent) + getAmount;
  campOneTotal.innerText = compTotal + " BDT";
  donated.innerText = getAmount;
  remainingBalance();

  console.log(getAmount);
  console.log(remainingBalance());
});
// getBalance.addEventListener("click", () => {
//   console.log(intBalance);
// });
