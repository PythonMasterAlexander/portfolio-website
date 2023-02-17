import { menuIcon, linkContainer } from '../constants/variables.js';

function addPageMenuFunctionality() {
  menuIcon.addEventListener("click", () => {
    linkContainer.classList.toggle("link-container");
  });
}
export default addPageMenuFunctionality;
