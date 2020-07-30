//messageName
const nameError = "Поле обязательно для заполнения";
const nameNotCorrect = "Проверьте поле имя";
// messagePhone
const phoneError = "Поле обязательно для заполнения";
const phoneNotCorrect = "Некооректный номер телефона";
//messageEmail
const emailError = "Поле обязательно для заполнения";
const emailNotCorrect = "Некооректный почтовый адрес";

let button = document.querySelector(".form_wrapper-button");
let form = document.querySelector(".form_wrapper-body");

//fildsError
let nameFildError = document.querySelector(".form_wrapper-error-one");
let phoneFildError = document.querySelector(".form_wrapper-error-two");
let emailFildError = document.querySelector(".form_wrapper-error-three");

button.onclick = (evt) => {
  evt.preventDefault();
  for (let input of document.querySelectorAll(".form_wrapper-input-all")) {
    console.log(input.dataset);
    if (input.dataset.validatio === "name") {
      test(input.dataset.validatio, input, nameFildError, nameError, nameNotCorrect);
    } else if (input.dataset.validatio === "phone") {
      test(input.dataset.validatio, input, phoneFildError, phoneError, phoneNotCorrect, "data-correct", "true");
    } else if (input.dataset.validatio === "email") {
      test(input.dataset.validatio, input, emailFildError, emailError, emailNotCorrect);
    }
  }
  for (let input of document.querySelectorAll("[data-correct]")) {
    if (input.dataset.correct) {
      form.onsubmit = async () => {
        let formData = new FormData(form);
        let respons = await fetch("URL", {
          method: "GET",
          body: formData,
        });
        let result = await respons.json();
        console.log(result);
      };
    } else {
      return false;
    }
  }
};
