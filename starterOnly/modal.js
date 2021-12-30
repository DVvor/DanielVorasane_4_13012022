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
const btnValidate = document.querySelector("btn-submit");
const modalbg2 = document.querySelector(".bground2");
const form = document.querySelector("form");
const btnclose = document.querySelector(".btnclose");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", closeModal));
btnclose.addEventListener("click", closeModal); 


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none"; //element.add style . display: none.
  modalbg2.style.display = "none";
}

function launchmodalvalidate() {
  modalbg2.style.display = "block";
}

/* Function error message form*/
/* (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide */
function firstForm() {
  let value = firstInput.value.trim(); //.trim ne compte pas les espaces vides
    if (value.length < 2) {
      formData[0].setAttribute("data-error-visible","true");
      formData[0].setAttribute("data-error","Veuillez saisir au moins 2 caractères");
      return false;
  } else {
    formData[0].setAttribute("data-error-visible","false");
    formData[0].removeAttribute("data-error");
    return true;
  }
}
formData[0].addEventListener("input", firstForm);

/*(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide */
function lastForm() {
  let value = lastInput.value.trim(); //.trim ne compte pas les espaces vides
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
formData[1].addEventListener("input", lastForm); // input last

/*(3) L'adresse électronique est valide*/
function emailForm() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailInput.value ) == false) {
      formData[2].setAttribute("data-error-visible","true");
      formData[2].setAttribute("data-error","Veuillez saisir un email valide");
      return false;
  } else {
    formData[2].setAttribute("data-error-visible","false");
    formData[2].removeAttribute("data-error");
    return true;
  }
}
formData[2].addEventListener("input", emailForm);

/* Le champs date de naissance n'est pas vide */
function birthdateForm() {
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
formData[3].addEventListener("input", birthdateForm);

/* Pour le nombre de concours, une valeur numérique est saisie. */
function qtyForm() {
  let value = qtyInput.value; //.trim ne compte pas les espaces vides
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
formData[4].addEventListener("input", qtyForm);

/* Un bouton radio est sélectionné ***********************************/
function radioForm() {
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
formData[5].addEventListener("change", radioForm);

// si un des boutons radio est sélectionné alors true 

/* La case des conditions générales est cochée */
function conditionOfUSeForm() {
  
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
formData[6].addEventListener("change", conditionOfUSeForm);


/* toutes les conditions sont validées ************/


function validate(event) { // HMTL l.63
  event.preventDefault();
  firstForm(); 
  lastForm();
  emailForm();
  birthdateForm();
  qtyForm();
  radioForm();
  conditionOfUSeForm();
  if (
     firstForm() == true &&
    //  lastForm() == true &&
    //  emailForm() == true &&
    //  birthdateForm() == true && 
    //  qtyForm() == true && 
    //  radioForm() == true &&
    conditionOfUSeForm() == true
    ) 
  {
    form.reset();
    closeModal();
    launchmodalvalidate();

//garder bgground content 
//Fermer le formulaire

  }


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