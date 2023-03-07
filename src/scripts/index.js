import addPageMenuFunctionality from './components/addPageMenuFunctionality.js';
import { submitMessageButton } from './constants/variables.js';
const messageButtonContainer = document.querySelector(".message-button");
console.log(messageButtonContainer);

submitMessageButton.addEventListener("click", function() {
  event.preventDefault();
  console.log(event.target);
  messageButtonContainer.classList.toggle("test");
}); 

addPageMenuFunctionality();
