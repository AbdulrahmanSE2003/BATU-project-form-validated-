// <!--* Navbar => JS -->
const navLis = document.querySelectorAll(".navbar-links .main-li");

addActiveClass(navLis);
// SECTION - Add & Remove Active Class.
function addActiveClass(nodeList) {
  nodeList.forEach((a) => {
    a.addEventListener("click", (e) => {
      nodeList.forEach((a) => {
        a.classList.remove("active");
      });
      a.classList.add("active");
    });
  });
}


// *SECTION - Form Validation
let submit  = document.querySelector("#contact-submit");
let fName = document.querySelector("#fname");
let lName = document.querySelector("#lname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let errorMsg = document.querySelector("#error");

submit.addEventListener("click", (ev) =>{
   ev.preventDefault();
   fNameVal = fName.value.trim();
   lNameVal = lName.value.trim();
   emailVal = email.value.trim();
   phoneVal = phone.value.trim();

   console.log(fNameVal);
   console.log(lNameVal);
   console.log(emailVal);
   console.log(phoneVal);
   


   // Checking fName
   if(fNameVal.length <3 ){
      errorMsg.textContent="First Name Must Be 3 Characters At Least.";
      errorMsg.classList.add("contact-message-visible")
      return;
   }

   // checking lName
   if(lNameVal.length <3){
      errorMsg.textContent="Last Name Must Be 3 Characters At Least.";
      errorMsg.classList.add("contact-message-visible")
      return;
   }
   
   
   // Checking Email
   if(!isEmailValid(emailVal)){
      errorMsg.textContent = "Please Enter A Valid E-mail."
      errorMsg.classList.add("contact-message-visible")
      return;
   }
   
   // Checking Phone
   if(!isValidPhone(phoneVal)){
      errorMsg.textContent="Please Enter A valid Phone.";
      errorMsg.classList.add("contact-message-visible")
      return;
   }
   
   
   errorMsg.textContent="You're Ready To Go!";
   errorMsg.classList.add("contact-message-done")
   setTimeout(() =>{
      errorMsg.textContent="";
      errorMsg.classList.remove("contact-message-done", "contact-message-visible");
   }, 3000)
})


function isEmailValid (email){
   const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return regexEmail.test(email);
}
function isValidPhone (phone){
   // console.log(phone);
   // console.log(typeof(phone));
   
   const regexPhone = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
   return regexPhone.test(phone);
}
