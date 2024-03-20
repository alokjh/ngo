// let arrow = document.getElementById("arrow");

// arrow.onclick = () => {
//   if (hiddenCard.style.display != "flex") {
//     hiddenCard.style.display = "flex";
//     hiddenCard.style.marginTop = "10px";
//     arrow.style.display = "none";
//     hiddenCard.scrollIntoView({ behavior: "smooth" });
//   } else {
//     hiddenCard.style.display = "none";
//   }
// };

// let inputedEmails = [];

// let button = document.getElementById("email-input-button");
// let emailInput = document.getElementById("email-item");

// button.addEventListener("click", () => {
//   let enteredEmail = emailInput.value;
//   if (enteredEmail.trim() !== "") {
//     inputedEmails.push(enteredEmail);
//     console.log(inputedEmails);
//     emailInput.value = "";
//   }
// });
let hamBtn = document.getElementById("hamburgerIconContainer");
let hamNavItems = document.querySelector(".nav-links");
let hamLine1 = document.getElementById("hamLine1");
let hamLine2 = document.getElementById("hamLine2");
let hamLine3 = document.getElementById("hamLine3");

hamBtn.addEventListener("click", () => {
  console.log("clicked");

  if (hamNavItems.style.display != "flex") {
    hamNavItems.style.display = "flex";
    hamLine2.style.display = "none";
    hamLine1.style.transform = "rotate(60deg)";
    hamLine3.style.transform = "rotate(-60deg)";
    hamLine3.style.marginTop = "-8px";
    hamBtn.style.padding = "18px 7px 19px 8px"
  } else {
    hamNavItems.style.display = "none";
    hamLine2.style.display = "block";
    hamLine1.style.transform = "unset";
    hamLine3.style.transform = "unset";
    hamLine3.style.marginTop = "unset";
    hamBtn.style.padding = "7px 5px 5px 8px"
  }
});