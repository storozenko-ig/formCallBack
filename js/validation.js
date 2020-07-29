const PHONE_MASK = "^(\\+7|8)[\\d]{10}$";
const MAIL_MASK = "^[a-zA-z]+\\W?[a-z]+@[a-zA-z]+\\.[a-z]{2,3}$";
const NAME_MASK = "^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$";

function getMask(name) {
  return name === "phone" ? PHONE_MASK : name === "email" ? MAIL_MASK : NAME_MASK;
}

function test(mask, domElem, domfildError, messageError, messageNotCorrect, className, classNameValue) {
  if (domElem.value === "") {
    domfildError.innerHTML = messageError;
  } else if (new RegExp(getMask(mask)).test(domElem.value)) {
    domfildError.innerHTML = "";
    domElem.setAttribute(className, classNameValue);
  } else {
    domfildError.innerHTML = messageNotCorrect;
  }
}
