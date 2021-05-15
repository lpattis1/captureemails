// global variables
const emailModal = document.querySelector(".email-modal");
const formGroup = document.querySelector(".email-modal__form-group");
const closeBtn = document.querySelector(".email-modal__close-btn");
const declineOffer = document.querySelector(".email-modal__decline-offer");
const emailThank = document.querySelector(".email-thank");
const errorMessageHidden = document.querySelector(
  ".email-modal__error-message"
);

// Targeting the input values and storing them in variables:
const emailInput = document.querySelector(".email-modal__input");
const emailBtn = document.querySelector(".email-modal__button");
// --------------------------------------------

// storing the close and open modal functionalities inside a function:
function closeAndOpenModal() {
  // setting the email state to false initially so we can have the modal appear on the first visit:
  let emailState = false;

  window.onload = function () {
    //   When the user's mosue leaves the page, the modal will be triggered:
    document.body.addEventListener("mouseleave", function (e) {
      // We are asking if the emailState is set to false - meaning if this is the first time the user has visited the page (or refreshed it in our case) - then we will show them the pop up modal.
      if (emailState === false) {
        emailModal.classList.add("email-modal--visible");

        // But once the modal has been closed out, then the state is set to true, meaning if the user's mouse leaves the page again, the modal will not pop up again:
        emailState = true;
      }
    });
  };

  //   This is the event listener added to the close button, allowing the user to close the modal:
  closeBtn.addEventListener("click", function (e) {
    emailModal.classList.remove("email-modal--visible");
  });

  //   This is the event listener added to not interested option, which also closes the modal:

  declineOffer.addEventListener("click", function (e) {
    emailModal.classList.remove("email-modal--visible");
  });
}

// --------------------------------------------

// Check if email is valid:
function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Then validate it:

function validateEmail() {
  emailBtn.addEventListener("click", function (e) {
    // Check the return value of the emailIsValid function. If it is true, then the user gets the email thank message, if it is false, the user gets an error message.
    if (emailIsValid(emailInput.value)) {
      emailThank.classList.add("email-thank--success");
      setTimeout(() => {
        emailModal.classList.remove("email-modal--visible");
      }, 3000);
    } else {
      errorMessageHidden.classList.add("email-modal__error-message--show");
      formGroup.style.border = ".2rem solid red";
    }

    // If the user clicks back in the input field after being told the email address wasn't valid, remove the error message:
    emailInput.addEventListener("focus", function (e) {
      if (
        errorMessageHidden.classList.contains(
          "email-modal__error-message--show"
        )
      ) {
        errorMessageHidden.classList.remove("email-modal__error-message--show");
        formGroup.style.border = "none";
      }
    });
  });
}

closeAndOpenModal();
validateEmail();
