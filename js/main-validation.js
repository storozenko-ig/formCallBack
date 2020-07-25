function User(commit) {
  this.commit = commit;
}

let commit = document.querySelector(".form_wrapper-input-textarea");
let button = document.querySelector(".form_wrapper-button");
// let form = document.querySelector(".form_wrapper-body");

button.onclick = () => {
  let commit = document.querySelector(".form_wrapper-input-textarea").value;
  let user = new User(commit);
  for (let input of document.querySelectorAll("[data-validatio]")) {
    correctnesFilds(input, user);
    console.log(user);
  }

  //   if (...) {
  //     form.onsubmit = async (event) => {
  //       let formData = new FormData(form);
  //       let respons = await fetch("URL", {
  //         method: "GET",
  //         body: formData,
  //       });
  //       let result = await respons.json();
  //       console.log(result);
  //     };
  //   } else {
  //     return false;
  //   }
};

function correctnesFilds(domElem, obj) {
  if (domElem.dataset.validatio === "name") {
    if (domElem.value === "") {
      document.querySelector(".form_wrapper-error-one").innerHTML = "Поле обязательно для заполнения";
    } else if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(domElem.value)) {
      document.querySelector(".form_wrapper-error-one").innerHTML = "";
      obj.name = domElem.value;
    } else {
      document.querySelector(".form_wrapper-error-one").innerHTML = "Проверьте поле имя";
    }
  }
  if (domElem.dataset.validatio === "phone") {
    if (domElem.value === "") {
      document.querySelector(".form_wrapper-error-two").innerHTML = "Поле обязательно для заполнения";
    } else if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(domElem.value)) {
      document.querySelector(".form_wrapper-error-two").innerHTML = "";
      obj.phone = domElem.value;
    } else {
      document.querySelector(".form_wrapper-error-two").innerHTML = "Некоректный номер телефона";
    }
  }
  if (domElem.dataset.validatio === "email") {
    if (domElem.value === "") {
      document.querySelector(".form_wrapper-error-three").innerHTML = "Поле обязательно для заполнения";
    } else if (/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(domElem.value)) {
      document.querySelector(".form_wrapper-error-three").innerHTML = "";
      obj.email = domElem.value;
    } else {
      document.querySelector(".form_wrapper-error-three").innerHTML = "Некоректный почтовый адрес";
    }
  }
}
