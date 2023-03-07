import { socialMediaContainer, headerMenuButton, linkContainer, menuIconBars } from '../constants/variables.js';

function addPageMenuFunctionality() {
  headerMenuButton.addEventListener("click", () => {
    linkContainer.classList.toggle("toggle-menu-button");
    socialMediaContainer.classList.toggle("toggle-social-media-container");
  });
}
export default addPageMenuFunctionality;
