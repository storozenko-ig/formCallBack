//Name
const nameError = "Поле обязательно для заполнения";
// Phone
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
}

let spanOne = document.querySelector(".form_wrapper-error-one");
let spanTwo = document.querySelector(".form_wrapper-error-two");
let spanThree = document.querySelector(".form_wrapper-error-three");
let button = document.querySelector(".form_wrapper-button");
let form = document.querySelector(".form_wrapper-body");

button.onsubmit = async (event) => {
  let name = document.querySelector(".form_wrapper-input-one").value;
  let phone = document.querySelector(".form_wrapper-input-two").value;
  let email = document.querySelector(".form_wrapper-input-three").value;
  let commit = document.querySelector(".form_wrapper-input-textarea").value;
  let user = new User(name, phone, email, commit);
  correctnesFildName(name, spanOne, nameError);
  correctnesFildPhone(phone, spanTwo, phoneError, phoneNotCorrect);
  correctnesFildEmail(email, spanThree, emailError, emailNotCorrect);
  if ((user.name && user.phone) || (user.name && user.email) || (user.name && user.phone && user.email)) {
    let formData = new FormData(form);
    let respons = await fetch("URL", {
      method: "GET",
      body: formData,
    });
    let result = await respons.json();
    console.log(result);
  } else {
    return false;
  }
};

function correctnesFildName(name, spanOne, nameError) {
  if (name.length < 1) {
    spanOne.innerHTML = nameError;
  } else {
    spanOne.innerHTML = "";
  }
}

function correctnesFildPhone(phone, spanTwo, phoneError, phoneNotCorrect) {
  if (phone === "") {
    spanTwo.innerHTML = phoneError;
  } else if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)) {
    spanTwo.innerHTML = "";
  } else {
    spanTwo.innerHTML = phoneNotCorrect;
  }
}

function correctnesFildEmail(email, spanThree, emailError, emailNotCorrect) {
  if (email === "") {
    spanThree.innerHTML = emailError;
  } else if (/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(email)) {
    spanThree.innerHTML = "";
  } else {
    spanThree.innerHTML = emailNotCorrect;
  }
}
