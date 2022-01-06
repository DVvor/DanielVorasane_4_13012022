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
const close = document.querySelectorAll(".close"); //select element
const firstnameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const qtyInput = document.getElementById("quantity"); // Nombre de tournoi ayant participé l'utilisateur
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const btnValidation = document.querySelector(".btn-submit");
const btnValidationBl = document.querySelector(".btn-submit-bl");
const modalbg2 = document.querySelector(".bground2");
const form = document.querySelector("form");
const btnCloseModal = document.querySelector(".btnclose");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", closeModal));
btnCloseModal.addEventListener("click", closeModal); 


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modale **********************************************

function closeModal() {
  modalbg.style.display = "none"; // ajoute un display: none à l'élément modalbg 
  modalbg2.style.display = "none";
}

function formValidationMessage() { // Lancement du message de validation du formulaire
  modalbg2.style.display = "block";
}

/* Conditions validation du formulaire ************************************************/ 
/* (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide */

function firstnameInputIsValid() { 
  let value = firstnameInput.value.trim(); //.trim permet de retirer les blancs en début et fin de chaîne
    if (firstnameInput.value.length < 2) {
      formData[0].setAttribute("data-error-visible","true"); // formData[0] cible le premier element formData de HTML
      formData[0].setAttribute("data-error","Veuillez saisir au moins 2 caractères");
      return false;
  } else {
    formData[0].setAttribute("data-error-visible","false");
    formData[0].removeAttribute("data-error");
    return true;
  }
}
formData[0].addEventListener("input", firstnameInputIsValid); // input = est déclenché de façon synchrone

/*(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide */

function lastNameInputIsValid() {
  let value = lastNameInput.value.trim(); 
    if (value.length < 2) {
      formData[1].setAttribute("data-error-visible","true");
      formData[1].setAttribute("data-error","Veuillez saisir au moins 2 caractères");
      return false;
  } else {
    formData[1].setAttribute("data-error-visible","false");
    formData[1].removeAttribute("data-error");
    return true;
  }
}
formData[1].addEventListener("input", lastNameInputIsValid); 

/* (3) L'adresse électronique est valide ********************************************/

function emailInputIsValid() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailInput.value) == false) {
      formData[2].setAttribute("data-error-visible","true");
      formData[2].setAttribute("data-error","Veuillez saisir un email valide");
      return false;
  } else {
    formData[2].setAttribute("data-error-visible","false");
    formData[2].removeAttribute("data-error");
    return true;
  }
}
formData[2].addEventListener("input", emailInputIsValid);

/* Le champs date de naissance n'est pas vide *************************************/

function birthdateInputIsValid() {
  let value = birthdateInput.value; 
    if (value == "") {
      formData[3].setAttribute("data-error-visible","true");
      formData[3].setAttribute("data-error","Veuillez renseigner une date de naissance");
      return false;
  } else {
    formData[3].setAttribute("data-error-visible","false");
    formData[3].removeAttribute("data-error");
    return true;
  }
}
formData[3].addEventListener("input", birthdateInputIsValid);

/* Pour le nombre de concours, une valeur numérique est saisie. ******************/

function qtyInputIsvalid() {
  let value = qtyInput.value; 
    if (value == "")  {
      formData[4].setAttribute("data-error-visible","true");
      formData[4].setAttribute("data-error","Veuillez renseigner ce champs");
      return false;
  } else {
    formData[4].setAttribute("data-error-visible","false");
    formData[4].removeAttribute("data-error");
    return true;
  }
}
formData[4].addEventListener("input", qtyInputIsvalid);

/* Un bouton radio est sélectionné ************************************************/

function selectCity() {
  if (
    location1.checked ||
    location2.checked ||
    location3.checked ||
    location4.checked ||
    location5.checked ||
    location6.checked
    ){
      formData[5].setAttribute("data-error-visible","false");
      formData[5].removeAttribute("data-error");
      return true;
    } 
    else {
      formData[5].setAttribute("data-error-visible","true");
      formData[5].setAttribute("data-error","Veuillez sélectionner un tournoi");
      return false;
    } 
}   
formData[5].addEventListener("change", selectCity);

/* La case des conditions générales est cochée *************************************/

function conditionOfUSeIsChecked() {
  if (checkbox1.checked == false)  {
    formData[6].setAttribute("data-error-visible","true");
    formData[6].setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
    return false;
  } else {
  formData[6].setAttribute("data-error-visible","false");
  formData[6].removeAttribute("data-error");
  return true;
  }
}
formData[6].addEventListener("change", conditionOfUSeIsChecked);


/* Toutes les conditions sont validées ******************************************/

function validate(event) { // HMTL l.63
  event.preventDefault();
  // firstnameInputIsValid(); 
  // lastNameInputIsValid();
  // emailInputIsValid();
  // birthdateInputIsValid();
  // qtyInputIsvalid();
  // selectCity();
  // conditionOfUSeIsChecked();
  if (
    firstnameInputIsValid() == true &&
    lastNameInputIsValid() == true &&
    emailInputIsValid() == true &&
    birthdateInputIsValid() == true &&
    qtyInputIsvalid() == true &
    selectCity() == true && 
    conditionOfUSeIsChecked() == true
    ) 
  {
    form.reset();
    btnValidationBl.setAttribute("data-error-visible","false");
    closeModal();
    formValidationMessage();
  
  } else {
    // alert("veuillez remplir les champs vides")
    btnValidationBl.setAttribute("data-error-visible","true");
    btnValidationBl.setAttribute("data-error","Veuillez remplir les champs manquants");
  }
  // btnValidation.addEventListener("click", validate);
}  

/*
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée. 
*/

// ********************************************
// Tests manuels #5
// ********************************************
// Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
// Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)