
//MAKING THE SCROLL TO TOP BUTTON
const buttonScrollToTop = document.querySelector("#buttonScrollToTop");

buttonScrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    });

});

//LABEL TRANSITION
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});