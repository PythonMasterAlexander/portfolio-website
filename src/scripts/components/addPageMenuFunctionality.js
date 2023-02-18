import { headerMenuButton, linkContainer, menuIconBars } from '../constants/variables.js';

function addPageMenuFunctionality() {
  headerMenuButton.addEventListener("click", () => {
    linkContainer.classList.toggle("toggle-menu-button");

    menuIconBars.forEach(iconBar => {
      iconBar.classList.toggle("change-color-on-button");
    });
  });
}
export default addPageMenuFunctionality;
