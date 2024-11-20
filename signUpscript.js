/*
let signUpBtn = document.querySelector("#signUpBtn");
let signInBtn = document.querySelector("#signInBtn");
let fname_field = document.querySelector("#fname-field");
let mname_field = document.querySelector("#mname-field");
let lname_field = document.querySelector("#lname-field");
let phone_field = document.querySelector("#phone-field");
let dob_field = document.querySelector("#dob-field");
let cpassword_field = document.querySelector("#cpassword-field");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");

signInBtn.addEventListener("click", () => {
  fname_field.style.maxHeight = "0";
  mname_field.style.maxHeight = "0";
  lname_field.style.maxHeight = "0";
  phone_field.style.maxHeight = "0";
  dob_field.style.maxHeight = "0";
  cpassword_field.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  text.innerHTML = "Forget password";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underline.style.transform = "translateX(35px)";
});
signUpBtn.addEventListener("click", () => {
  fname_field.style.maxHeight = "60px";
  mname_field.style.maxHeight = "60px";
  lname_field.style.maxHeight = "60px";
  phone_field.style.maxHeight = "60px";
  dob_field.style.maxHeight = "60px";
  cpassword_field.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML = "Password Sugession";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underline.style.transform = "translateX(0)";
});
*/

/* JavaScript Form Validation */

const display_msg = (element, msg, color = "red") => {
  element.innerHTML = msg;
  element.style.color = color;
};

let fname_input = document.getElementById("fname");
let fname_msg = document.getElementById("fname_msg");

const fname_validate = () => {
  let fname = fname_input.value;
  if (!fname.match(/^[a-zA-Z]+$/)) {
    display_msg(fname_msg, "First Name must be only alphabets");
    return false;
  } else if (!fname.match(/^.{2,}$/)) {
    display_msg(fname_msg, "First Name must be at least 2 characters");
    return false;
  } else {
    display_msg(fname_msg, "Valid first name", "green");
    return true;
  }
};
fname_input.addEventListener("keyup", fname_validate);

let mname_input = document.getElementById("mname");
let mname_msg = document.getElementById("mname_msg");

const mname_validate = () => {
  let mname = mname_input.value;
  if (mname != null) {
    if (!mname.match(/^[a-zA-Z]+$/)) {
      display_msg(mname_msg, "Middle name must be only alphabets");
      return false;
    } else if (!mname.match(/^.{2,}$/)) {
      display_msg(mname_msg, "Middle name must be at least 2 characters");
      return false;
    } else {
      display_msg(mname_msg, "Valid middle name", "green");
      return true;
    }
  } else {
    return true;
  }
};
mname_input.addEventListener("keyup", mname_validate);

let lname_input = document.getElementById("lname");
let lname_msg = document.getElementById("lname_msg");

const lname_validate = () => {
  let lname = lname_input.value;
  if (!lname.match(/^[a-zA-Z]+$/)) {
    display_msg(lname_msg, "Last Name must be only alphabets");
    return false;
  } else if (!lname.match(/^.{2,}$/)) {
    display_msg(lname_msg, "Last Name must be at least 2 characters");
    return false;
  } else {
    display_msg(lname_msg, "Valid last name", "green");
    return true;
  }
};
lname_input.addEventListener("keyup", lname_validate);

let phone_input = document.getElementById("phone");
let phone_msg = document.getElementById("phone_msg");
const phone_validate = () => {
  let phone = phone_input.value;
  if (!phone.match(/^[0-9]+$/)) {
    display_msg(phone_msg, "Phone number must be a number");
    return false;
  } else if (!phone.match(/^9(6|7|8)/)) {
    display_msg(phone_msg, "phone number must start with 98 or 97 or 96");
    return false;
  } else if (!phone.match(/^.{10}$/)) {
    display_msg(phone_msg, "phone number must be 10 digits");
    return false;
  } else {
    display_msg(phone_msg, "valid phone number", "green");
    return true;
  }
};

phone_input.addEventListener("keyup", phone_validate);

let email_input = document.getElementById("email");
let email_msg = document.getElementById("email_msg");

const email_validate = () => {
  let email = email_input.value;
  if (!email.match(/^[a-z][a-z0-9_.]+[@][a-z]+[.](com)$/)) {
    display_msg(email_msg, "invalid email");
    return false;
  } else {
    display_msg(email_msg, "valid email", "green");
    return true;
  }
  // if(!email.match(/^[a-z][a-z0-9_.]+[@](gmail)[.](com)$/))
};
email_input.addEventListener("keyup", email_validate);

let password_input = document.getElementById("password");
let password_msg = document.getElementById("password_msg");

const password_validate = () => {
  let password = password_input.value;
  if (!password.match(/[a-z]/)) {
    display_msg(password_msg, "must contain at least 1 lowercase alphabet");
    return false;
  } else if (!password.match(/[A-Z]/)) {
    display_msg(password_msg, "must contain at least 1 uppercase alphabet");
    return false;
  } else if (!password.match(/[0-9]/)) {
    display_msg(password_msg, "must contain at least 1 number");
    return false;
  } else if (!password.match(/[-!@#$%]/)) {
    display_msg(password_msg, "must contain at least 1 special character");
    return false;
  } else if (!password.match(/^.{8,}$/)) {
    display_msg(password_msg, "must be at least 8 characters");
    return false;
  } else if (!password.match(/^.{0,15}$/)) {
    display_msg(password_msg, "must not exceed 15 characters");
    return false;
  } else {
    display_msg(password_msg, "valid password", "green");
    return true;
  }
};
password_input.addEventListener("keyup", password_validate);

/*Confirm Password*/

let cpassword_input = document.getElementById("cpassword");
let cpassword_msg = document.getElementById("cpassword_msg");
const cpassword_validate = () => {
  let cpassword = cpassword_input.value;
  let password = password_input.value;
  if (password != cpassword) {
    display_msg(cpassword_msg, "password doesnot match");
    return false;
  } else {
    display_msg(cpassword_msg, "valid password", "green");
    return true;
  }
};
cpassword_input.addEventListener("keyup", cpassword_validate);

const form_validate = () => {
  if (
    fname_validate() &&
    mname_validate() &&
    lname_validate() &&
    phone_validate() &&
    email_validate() &&
    password_validate() &&
    cpassword_validate()
  ) {
    return true;
  } else {
    return false;
  }
};
