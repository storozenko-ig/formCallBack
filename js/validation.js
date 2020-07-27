function correctnesFildname(domElem, domfildError, messageError, messageNotCorrect, className, classNameValue) {
  if (domElem.value === "") {
    domfildError.innerHTML = messageError;
  } else if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(domElem.value)) {
    domfildError.innerHTML = "";
    domElem.setAttribute(className, classNameValue);
  } else {
    domfildError.innerHTML = messageNotCorrect;
  }
}
function correctnesFildphone(domElem, domfildError, messageError, messageNotCorrect, className, classNameValue) {
  if (domElem.value === "") {
    domfildError.innerHTML = messageError;
  } else if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(domElem.value)) {
    domfildError.innerHTML = "";
    domElem.setAttribute(className, classNameValue);
  } else {
    domfildError.innerHTML = messageNotCorrect;
  }
}
function correctnesFildemail(domElem, domfildError, messageError, messageNotCorrect, className, classNameValue) {
  if (domElem.value === "") {
    domfildError.innerHTML = messageError;
  } else if (/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(domElem.value)) {
    domfildError.innerHTML = "";
    domElem.setAttribute(className, classNameValue);
  } else {
    domfildError.innerHTML = messageNotCorrect;
  }
}
