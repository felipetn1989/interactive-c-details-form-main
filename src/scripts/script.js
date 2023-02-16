/* Defining variables to get the necessary HTML elements in javaScript */

const inputForms = document.querySelectorAll(".input_form");

const blankErrors = document.querySelectorAll(".blank_error");

const inputFormsYM = document.querySelectorAll(".input_form_ym");

const monthYearError = document.querySelector(".month_year_error");

/* Adding the click events to both buttons */

confirmButton.addEventListener("click", verifyForm);

continueButton.addEventListener("click", reset);

reset(); //Making sure the form is cleaned after the page is reloaded

/* The function verifyForm is the function being called when the confirm button is pressed by the user */

function verifyForm(event) {
  event.preventDefault(); //Prevents the default browser warning from appearing instead of the custom ones in this code
  let blanks = 0; //Variable to keep track of how many blank forms there are (excluding the Year and Month forms)
  let blankYM = 0; //Variable to keep track of how many blank year / month forms there are

  /* The function will run through each of the form inputs checking if they are empty or not, and removing and adding the necessary tailwind classes to display the appropriate error messages */
  inputForms.forEach((inputForm, index) => {
    const isInputBlank = inputForm.value.length === 0;

    blankErrors[index].classList.toggle("hidden", !isInputBlank);
    blankErrors[index].classList.toggle("block", isInputBlank);
    inputForm.classList.toggle("outline-red-600", isInputBlank);
    inputForm.classList.toggle("outline-[#dedddf]", !isInputBlank);

    if (isInputBlank) {
      blanks++;
    }
  });

  /* Since the month and year inputs have one error message span for both of them, this part of the code is written separately from the one above, otherwise there wouldn't be a match between inputs and error messages (in total we have 5 inputs and 4 "Can't be blank" spans) */
  inputFormsYM.forEach((inputFormYM) => {
    const isBlank = inputFormYM.value.length == 0;
    inputFormYM.classList.toggle("outline-red-600", isBlank);
    inputFormYM.classList.toggle("outline-[#dedddf]", !isBlank);

    blankYM += isBlank;
  });

  monthYearError.classList.toggle("hidden", blankYM == 0);
  monthYearError.classList.toggle("block", !blankYM == 0);

  /* Now the code checks to see if the values on the inputs are valid. This part was not a requirement of the project, but I decided to add them to make the form validation more compĺete */

  let isNumberValid = /^\d{16}$/.test(inputForms[1].value); //checking if the card number has exactly 16 digits

  digitsQtyError.classList.toggle("hidden", isNumberValid);
  digitsQtyError.classList.toggle("block", !isNumberValid);

  let ismonthValid = inputFormsYM[0].value > 0 && inputFormsYM[0].value < 13; //checking if the month is between 1 and 12 inclusive

  invalidMonth.classList.toggle("hidden", ismonthValid);
  invalidMonth.classList.toggle("block", !ismonthValid);

  let isYearValid = inputFormsYM[1].value >= 23; //checking if the year is 2023 or later; I want to modify this later to make the code get the current year automatically

  invalidYear.classList.toggle("hidden", isYearValid);
  invalidYear.classList.toggle("block", !isYearValid);

  let isCVCValid = /^\d{3}$/.test(inputForms[2].value); //checking if the CVC code has exactly 3 digits

  invalidCVC.classList.toggle("hidden", isCVCValid);
  invalidCVC.classList.toggle("block", !isCVCValid);

  /* The thank you page is only displayed if all of the following validations are correct (no blank inputs and all of the inputs in the correct format) */
  if (
    blanks == 0 &&
    isNumberValid &&
    ismonthValid &&
    isYearValid &&
    isCVCValid
  ) {
    mainForm.classList.toggle("hidden", true);
    thankYouPage.classList.toggle("hidden", false);
    mainForm.classList.toggle("grid", false);
    thankYouPage.classList.toggle("grid", true);
  }
}

/* This next part of the code is responsible from putting the typed values into the card images */
cardholderName.addEventListener("input", () => {
  nameOnCard.innerHTML = cardholderName.value;
});

cardNumber.addEventListener("input", () => {
  if (cardNumber.value.length > 16) {
    cardNumber.value = cardNumber.value.slice(0, 16);
  } //making sure only numbers are typed; no spaces allowed in the input field and 16 numbers only

  let isCardValid = /^[0-9]+$/.test(cardNumber.value); //only digits and no letters allowed; this is checked as the user types the card number

  cardNumber.classList.toggle("outline-[#dedddf]", isCardValid);
  cardNumber.classList.toggle("outline-red-600", !isCardValid);
  cardNumberError.classList.toggle("hidden", isCardValid);
  cardNumberError.classList.toggle("block", !isCardValid);

  //this is display the number in the card image as blocks of 4 digits separated by a space between them
  const formattedCardNumber = cardNumber.value
    .replace(/(\d{4})/g, "$1 ") //this replaces every 4 digit group with themselves plus a white space after them
    .trim(); //removing any whitespace before or after the displayed number

  numberOnCard.innerHTML = formattedCardNumber;
});

/* Next, the code will display the CVC and expiration data. Each of the .slice() methods make sure the user can't type more than 2 (for MM and YY) or 3 (for the CVC) digits on their respective input fields */

cardCVC.addEventListener("input", () => {
  if (cardCVC.value.length > 3) {
    cardCVC.value = cardCVC.value.slice(0, 3);
  }
  cvcOnCard.innerHTML = cardCVC.value;
});

expirationMonth.addEventListener("input", () => {
  if (expirationMonth.value.length > 2) {
    expirationMonth.value = expirationMonth.value.slice(0, 2);
  }
  expirationOnCard.innerText = `${expirationMonth.value}/${expirationYear.value}`;
});

expirationYear.addEventListener("input", () => {
  if (expirationYear.value.length > 2) {
    expirationYear.value = expirationYear.value.slice(0, 2);
  }
  expirationOnCard.innerText = `${expirationMonth.value}/${expirationYear.value}`;
});

/* This is the function called when the user presses the continue button. It clears all the forms, display the input page again and focus on the cardholder name field */

function reset() {
  inputForms[0].focus();
  mainForm.classList.remove("hidden");
  thankYouPage.classList.remove("grid");
  mainForm.classList.add("grid");
  thankYouPage.classList.add("hidden");

  inputForms.forEach((inputForm) => {
    inputForm.value = "";
  });

  inputFormsYM.forEach((inputFormYM) => {
    inputFormYM.value = "";
  });
}
