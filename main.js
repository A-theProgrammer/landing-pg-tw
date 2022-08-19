import "./style.css";

const menuToggle=document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

menuToggle.addEventListener("click", () => {
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
})  
