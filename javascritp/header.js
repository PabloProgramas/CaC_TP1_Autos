let btn = document.getElementById("btn-header");
let nav = document.getElementById("nav-header");
let header = document.querySelector("header");

btn.onclick = () => {
  if (nav.style.display == "unset") {
    nav.style.display = "none";
  } else {
    nav.style.display = "unset";
  }
};
