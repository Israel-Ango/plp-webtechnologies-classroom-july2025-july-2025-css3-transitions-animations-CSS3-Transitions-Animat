let globalCounter = 0;

// Function with parameters and return values
function calculateArea(width, height) {
  return width * height;
}

// Function demonstrating local vs global scope
function incrementCounter(step) {
  let localCounter = globalCounter + step;
  globalCounter = localCounter; // updates global
  return localCounter;
}

// Reusable animation trigger function
function toggleClass(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}

/* === Part 2: Event Listeners and Animation Control === */

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleClass("box", "active");
  console.log("Box area:", calculateArea(100, 100)); // function reuse
  console.log("Counter:", incrementCounter(1));
});

// Flip card on button click
document.getElementById("flipBtn").addEventListener("click", () => {
  document.getElementById("flipCard").classList.toggle("flipped");
  console.log("Counter:", incrementCounter(2));
});

// Modal open/close
const modal = document.getElementById("modal");
document.getElementById("openModalBtn").addEventListener("click", () => {
  modal.style.display = "flex";
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});