import { pageMenuContainer } from '../constants/variables.js';

const openMainMenu = function(event: MouseEvent | TouchEvent) {
  pageMenuContainer.classList.toggle("show-page-menu-container");
}
export default openMainMenu;
