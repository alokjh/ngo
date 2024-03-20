var ind;

let data1 = {
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
  title: "Lorem ipsum dolor sit amet consectetur.",
  desc: "lorem3y34hj bjhrbr3kj3uh4h43ndeyghdfjwmwbn chej32kek3kehh2nhghrnwebfhfjw",
};

function latestNo() {
  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      ind = e.target.id;
      console.log("Clicked button id:", ind);

      window.location.href = "./latestCardDetails.html";
      updateLatest();
      console.log(ind);
    });
  });
}



console.log(ind);
var latestContainer = document.querySelector(".latest-container");
console.log(ind);
function updateLatest() {
  console.log(ind);
  if ((ind = "1")) {
    latestContainer.innerHTML = ` 
        <h1 id="latest-head">Head1</h1>
        <p id="desc-para">loqiuqggwgwijwkq</p>
      `;
  } else if (ind === "2") {
    latestContainer.innerHTML = ` 
        <h1 id="latest-head">Head2</h1>
        <p id="desc-para">loqiuqggwgwijwkq</p>
      `;
  }
}
