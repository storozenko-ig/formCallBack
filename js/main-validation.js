let name = document.querySelector(".form_wrapper-input-one");
// let phone = document.querySelector(".form_wrapper-input-two");
// let email = document.querySelector(".form_wrapper-input-three");
// let commit = document.querySelector(".form_wrapper-input-textarea");
let button = document.querySelector(".form_wrapper-button");
let form = document.querySelector(".form_wrapper-body");

//Atribut
name.setAttribute("data-validatio", "name");
// phone.setAttribute("data-validatio", "phone");
// email.setAttribute("data-validatio", "email");

button.onclick = () => {
  for (let input of document.querySelectorAll(".form_wrapper-input-all")) {
    if (input.dataset.validatio) {
      function correctnesFilds(input) {
        let obj = {};
        if (input.dataset.validatio === "name") {
          if (input.value === "") {
            document.querySelector(".form_wrapper-error-one").innerHTML = "Поле обязательно для заполнения";
          } else if (/^\pL+\s+\pL+$/.test(input.dataset.validatio)) {
            obj.name = input.value;
            document.querySelector(".form_wrapper-error-one").innerHTML = "";
            input.setAttribute("data-coretion", "true");
          } else {
            document.querySelector(".form_wrapper-error-one").innerHTML = "Проверьте поле имя";
          }
        }
        return obj;
      }
      console.log(correctnesFilds(input));
    }
  }
  //   console.log(obj);
  //         if (input.dataset.validatio === "phone") {
  //           if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value)) {
  //             document.querySelector(".form_wrapper-error-two").innerHTML = "";
  //             input.setAttribute("data-coretion", "true");
  //             obj.phone = input.value;
  //           } else {
  //             document.querySelector(".form_wrapper-error-two").innerHTML = "Некооректный номер телефона";
  //           }
  //           if (input.value === "") {
  //             document.querySelector(".form_wrapper-error-two").innerHTML = "Поле обязательно для заполнения";
  //           }
  //         }
  //         if (input.dataset.validatio === "email") {
  //           if (/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(input.value)) {
  //             document.querySelector(".form_wrapper-error-three").innerHTML = "";
  //             input.setAttribute("data-coretion", "true");
  //             obj.email = input.value;
  //           } else {
  //             document.querySelector(".form_wrapper-error-three").innerHTML = "Некооректный почтовый адрес";
  //           }
  //           if (input.value === "") {
  //             document.querySelector(".form_wrapper-error-three").innerHTML = "Поле обязательно для заполнения";
  //           }
  //         }
  //         return obj;
  //       }
  //     }
  //   }
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
