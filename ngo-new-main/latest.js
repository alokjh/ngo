function latestcard(card, sorc, desc) {
  const newWindow = window.open("latestCardDetails.html");

  newWindow.addEventListener("DOMContentLoaded", function () {
    newWindow.document.getElementById("latest-master-image").src = sorc;
    newWindow.document.getElementById("latest-head").innerText = card;
    newWindow.document.getElementById("desc-para").innerText = desc;
  });
}
