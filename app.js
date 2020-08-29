const floralPath = document.querySelector("#floralFace path");

const floralLength = floralPath.getTotalLength();
console.log(floralLength);

// floralPath.setAttribute("stroke-dasharray", floralLength);
// floralPath.setAttribute("stroke-dashoffset", floralLength);

const testimonials = document.querySelectorAll(
  ".testimonial-container .test-item"
);
const Arrows = document.querySelectorAll(".arr");
console.log(testimonials);

Arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let currentItem = document.querySelector(".current-test");
    currentItem.classList.remove("current-test");
    let currentNum = currentItem.dataset.value;
    let newNum = parseInt(currentNum) + parseInt(arrow.dataset.dir);
    if (newNum > testimonials.length) {
      newNum = 1;
    } else if (newNum == 0) {
      newNum = testimonials.length;
    }
    let newItem = document.querySelector(`[data-value = "${newNum}"]`);
    newItem.classList.add("current-test");
  });
});
