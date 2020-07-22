//Name
const nameError = "Поле обязательно для заполнения";
//Phone
const phoneError = "Поле обязательно для заполнения";
const phoneNotCorrect = "Некооректный номер телефона";
//Email
const emailError = "Поле обязательно для заполнения";
const emailNotCorrect = "Некооректный почтовый адрес";

function User(name, phone, email, commit) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.commit = commit;
  this.nameIsRequired = false;
  this.phoneIsRequired = false;
  this.mailIsRequired = false;
  this.commitIsRequired = false;
}

let correctnessFilds = (spanOne, spanTwo, spanThree) => {
  if (this.name.length > 1) {
    !this.nameIsRequired;
    spanOne.innerHTML = "";
  } else {
    spanOne.innerHTML = nameError;
  }

  if (this.phone === "") {
    spanTwo.innerHTML = phoneError;
  } else if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(this.phone)) {
    !this.phoneIsRequired;
    spanTwo.innerHTML = "";
  } else {
    spanTwo.innerHTML = phoneNotCorrect;
  }

  if (this.email === "") {
    spanThree.innerHTML = emailError;
  } else if (/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(this.email)) {
    !this.mailIsRequired;
    spanThree.innerHTML = "";
  } else {
    spanThree.innerHTML = emailNotCorrect;
  }
};

let sendMassages = (form, button) => {
  button.onsubmit = () => {
    correctnessFilds(spanOne, spanTwo, spanThree);
    if (
      (!this.nameIsRequired && !this.phoneIsRequired) ||
      (!this.nameIsRequired && !this.mailIsRequired) ||
      (!this.nameIsRequired && !this.mailIsRequired && !this.phoneIsRequired)
    ) {
      let send = new FormData(form);
    } else {
      return false;
    }
  };
};

// Value.input
let name = document.querySelector(".form_wrapper-input-one").value;
let phone = document.querySelector(".form_wrapper-input-two").value;
let email = document.querySelector(".form_wrapper-input-three").value;
let commit = document.querySelector(".form_wrapper-input-textarea").value;
let spanOne = document.querySelector(".form_wrapper-error-one");
let spanTwo = document.querySelector(".form_wrapper-error-two");
let spanThree = document.querySelector(".form_wrapper-error-three");
let button = document.querySelector(".form_wrapper-button");
let form = document.querySelector(".form_wrapper-body");

let user = new User(name, phone, email, commit);
