function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close"); //select element
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const qtyInput = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");





// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal); 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none"; //element.add style . display: none.
}

/* Function error message form*/
/* (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide */
function firstInputValidation() {
  let value = firstInput.value.trim(); //.trim ne compte pas les espaces vides
    if (value.length < 2) {
      formData[0].setAttribute("data-error-visible","true");
      formData[0].setAttribute("data-error","Veuillez saisir au moins 2 caractères");
  } else {
    formData[0].setAttribute("data-error-visible","false");
    formData[0].removeAttribute("data-error");
  }
}
formData[0].addEventListener("input", firstInputValidation);

/*(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide */
function lastInputValidation() {
  let value = birthdate.value.trim(); //.trim ne compte pas les espaces vides
    if (value.length < 2) {
      formData[1].setAttribute("data-error-visible","true");
      formData[1].setAttribute("data-error","Veuillez saisir au moins 2 caractères");
  } else {
    formData[1].setAttribute("data-error-visible","false");
    formData[1].removeAttribute("data-error");
  }
}
formData[1].addEventListener("input", lastInputValidation); // input last

/*(3) L'adresse électronique est valide*/
function emailInputValidation() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailInput.value ) == false) {
      formData[2].setAttribute("data-error-visible","true");
      formData[2].setAttribute("data-error","Veuillez saisir un email valide");
  } else {
    formData[2].setAttribute("data-error-visible","false");
    formData[2].removeAttribute("data-error");
  }
}
formData[2].addEventListener("input", emailInputValidation);

/* Le champs date de naissance n'est pas vide */
function birthdatevalidated() {
  //let regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  let value = birthdateInput.value; //.trim ne compte pas les espaces vides
    if (value == "") {
  //if (regex.test(emailInput.value ) == false) {
      formData[3].setAttribute("data-error-visible","true");
      formData[3].setAttribute("data-error","Veuillez renseigner une date de naissance");
  } else {
    formData[3].setAttribute("data-error-visible","false");
    formData[3].removeAttribute("data-error");
  }
}
formData[3].addEventListener("input", birthdatevalidated);

/* Pour le nombre de concours, une valeur numérique est saisie. */
function qtyInputValidation() {
  let value = qtyInput.value; //.trim ne compte pas les espaces vides
    if (value == "")  {
      formData[4].setAttribute("data-error-visible","true");
      formData[4].setAttribute("data-error","Veuillez renseigner ce champs");
  } else {
    formData[4].setAttribute("data-error-visible","false");
    formData[4].removeAttribute("data-error");
  }
}
formData[4].addEventListener("input", qtyInputValidation);

/* Un bouton radio est sélectionné */
function radioInputValidation() {
    if (location1 ||location2 || location3 || location4 || location5 || location6 == true )  {
      formData[5].setAttribute("data-error-visible","false");
      formData[5].removeAttribute("data-error");
  } else {
    formData[5].setAttribute("data-error-visible","true");
    formData[5].setAttribute("data-error","Veuillez cocher une case");
  }
}
formData[5].addEventListener("change", radioInputValidation);

// si un des boutons radio est sélectionné alors true 

/* La case des conditions générales est cochée */
function conditionOfUseInputValidation() {
  
  if (checkbox1.checked == false)  {
    formData[6].setAttribute("data-error-visible","true");
    formData[6].setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
  } else {
  formData[6].setAttribute("data-error-visible","false");
  formData[6].removeAttribute("data-error");
  }
}
formData[6].addEventListener("change", conditionOfUseInputValidation);



/*
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée. 
*/

