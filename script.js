//  Show And Hide password
const toggle = document.querySelector(".toggle"),
  input = document.querySelector(".inputvalue");

toggle.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    toggle.classList.replace("uil-eye-slash", "uil-eye");
  } else {
    input.type = "password";
    toggle.classList.replace("uil-eye", "uil-eye-slash");
  }
});

// Form validation
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  // const user = firstname.value+" "+lastname.value
  const user = `${firstname.value} ${lastname.value}`;
  if (firstname.value == "Pedro" && lastname.value == "Ofiasa") {
    alert("Welcome " + user);
  } else if (firstname.value == "Julito" && lastname.value == "Ducay") {
    alert("Welcome " + user);
  } 
   else if (firstname.value == "Dyessebel" && lastname.value == "Canete") {
    alert("Welcome " + user);
  } 
  else {
    alert("You are not allowed");
  }
});
