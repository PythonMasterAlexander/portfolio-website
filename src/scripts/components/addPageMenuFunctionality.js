import { headerMenuButton, linkContainer } from '../constants/variables.js';

function addPageMenuFunctionality() {
  headerMenuButton.addEventListener("click", () => {
  console.log(headerMenuButton);
    linkContainer.classList.toggle("toggle-menu-button");
  });
}
export default addPageMenuFunctionality;
