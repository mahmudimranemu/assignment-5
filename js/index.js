const getBalance = document.getElementById("balance");

const btnShowDonate = document.getElementById("btn-show-donate");
const btnShowHistory = document.getElementById("btn-show-history");

const historyWrapper = document.getElementById("history-wrapper");

// click to show donation field
btnShowDonate.addEventListener("click", () => {
  document.getElementById("donation-wrapper").classList.remove("hidden");
  document.getElementById("history-wrapper").classList.add("hidden");
  btnShowDonate.classList.add("bg-primary");
  btnShowHistory.classList.add("btn-outline");
  btnShowHistory.classList.remove("bg-primary");
});

//click to show history field
btnShowHistory.addEventListener("click", () => {
  document.getElementById("history-wrapper").classList.remove("hidden");
  document.getElementById("donation-wrapper").classList.add("hidden");
  btnShowDonate.classList.remove("bg-primary");
  btnShowDonate.classList.add("btn-outline");
  btnShowHistory.classList.add("bg-primary");
});

const campaign1Title = document.getElementById("campaign-1-title");
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
  if (userBalance != 0 && campOneInput.value < userBalance) {
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
    alert("Insufficient Balance. Please add coin to make donation");
  }

  // donation history
  // const historyHeading = document.getElementById("donation-heading");
  // historyHeading.innerHTML =
  //   parseInt(campOneInput.value) +
  //   " Taka is Donated for" +
  //   campaign1Title.textContent;

  const time = new Date();
  // create history card
  const historyCard = document.createElement("div");
  historyCard.classList.add(
    "card",
    "card-side",
    "bg-base-100",
    "border",
    "border-gray-300",
    "p-6",
    "mb-4"
  );
  historyCard.innerHTML = `
<div class="card-body">
    <h2 id="donation-heading"
      class="font-bold text-xl">
                ${parseInt(campOneInput.value)} Taka is Donated for ${
    campaign1Title.textContent
  }
      </h2>
              <p
                id="donate-date"
                class="font-light text-base text-gray-400"> ${time} </p>
            </div>`;
  historyWrapper.appendChild(historyCard);
  //get time of submitting

  // document.getElementById("donate-date").innerText = time;
  console.log(time);
  campOneInput.value = "";
});
// getBalance.addEventListener("click", () => {
//   console.log(intBalance);
// });
