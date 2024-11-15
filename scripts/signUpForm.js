function afterRenderHTML() {
  listenSubmitForm();
}

function signUpSubmit(e) {
  e.preventDefault();
  const SIGN_UP_FORM = e.target;
  const USER_NAME_INPUT = SIGN_UP_FORM["input-user-name"];
  const EMAIL_INPUT = SIGN_UP_FORM["input-email"];
  const PASSWORD_INPUT = SIGN_UP_FORM["input-password"];
  const YEAR_SELECTION_SELECT = SIGN_UP_FORM["form-year-selection"];

  const USER_NAME_MESSAGE_ERROR_EMPTY = document.getElementById("username-message-error-empty");
  const EMAIL_MESSAGE_ERROR_WRONG = document.getElementById("email-message-error-wrong");
  const EMAIL_MESSAGE_ERROR_EMPTY = document.getElementById("email-message-error-empty");
  const PASSWORD_MESSAGE_ERROR_EMPTY = document.getElementById("email-message-error-empty");
  const YEAR_SELECTION_MESSAGE_ERROR_EMPTY = document.getElementById("year-selection-message-error-empty");
  const YEAR_SELECTION_MESSAGE_ERROR_TEEN = document.getElementById("year-selection-message-error-teen");

  const YEAR_SELECTION_VALUE = Number(YEAR_SELECTION_SELECT.value);
  const CURRENT_DATE = new Date();

  if (!USER_NAME_INPUT.value || USER_NAME_INPUT.value == "") {
    USER_NAME_MESSAGE_ERROR_EMPTY.classList.remove("message-error-hidden");
  } else {
    USER_NAME_MESSAGE_ERROR_EMPTY.classList.add("message-error-hidden");
  }

  if (!EMAIL_INPUT.value || EMAIL_INPUT.value == "") {
    EMAIL_MESSAGE_ERROR_EMPTY.classList.remove("message-error-hidden");
    EMAIL_MESSAGE_ERROR_WRONG.classList.add("message-error-hidden");
  } else if (!validateEmail(EMAIL_INPUT.value)) {
    EMAIL_MESSAGE_ERROR_WRONG.classList.remove("message-error-hidden");
    EMAIL_MESSAGE_ERROR_EMPTY.classList.add("message-error-hidden");
  } else {
    EMAIL_MESSAGE_ERROR_WRONG.classList.add("message-error-hidden");
    EMAIL_MESSAGE_ERROR_EMPTY.classList.add("message-error-hidden");
  }

  if (!PASSWORD_INPUT.value || PASSWORD_INPUT.value == "") {
    PASSWORD_MESSAGE_ERROR_EMPTY.classList.remove("message-error-hidden");
  } else {
    PASSWORD_MESSAGE_ERROR_EMPTY.classList.add("message-error-hidden");
  }

  if (isNaN(YEAR_SELECTION_VALUE)) {
    YEAR_SELECTION_MESSAGE_ERROR_EMPTY.classList.remove("message-error-hidden");
    YEAR_SELECTION_MESSAGE_ERROR_TEEN.classList.add("message-error-hidden");
  } else if ((CURRENT_DATE.getFullYear() - YEAR_SELECTION_VALUE) < 18) {
    YEAR_SELECTION_MESSAGE_ERROR_TEEN.classList.remove("message-error-hidden");
    YEAR_SELECTION_MESSAGE_ERROR_EMPTY.classList.add("message-error-hidden");
  } else {
    YEAR_SELECTION_MESSAGE_ERROR_EMPTY.classList.add("message-error-hidden");
    YEAR_SELECTION_MESSAGE_ERROR_TEEN.classList.add("message-error-hidden");
  }
}

function listenSubmitForm() {
  const SIGN_UP_FORM = document.getElementById("form-sign-up");
  SIGN_UP_FORM.addEventListener("submit", signUpSubmit);
}

function validateEmail(value) {
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validEmail.test(value)) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", afterRenderHTML);