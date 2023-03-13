import { pageMenuContainer, headerSocialMediaContainer, mainMenuButton } from '../constants/variables.js';

const openMainMenu = function(event: MouseEvent | TouchEvent) {
  pageMenuContainer.classList.toggle("show-page-menu-container");
  mainMenuButton.classList.toggle("keep-color-on-active-button-menu");
  headerSocialMediaContainer.classList.toggle("toggle-social-media-container");
}
export default openMainMenu;
