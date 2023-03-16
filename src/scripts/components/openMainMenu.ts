import { maxMediaQueryBreakPointValue } from '../constants/constant.js';
import { pageMenuContainer, headerSocialMediaContainer, mainMenuButton, windowInnerWidth, 
headerLogoContainer } from '../constants/variables.js';

const openMainMenu = function(event: MouseEvent | TouchEvent) {
  pageMenuContainer.classList.toggle("show-page-menu-container");
  mainMenuButton.classList.toggle("keep-color-on-active-button-menu");
  headerSocialMediaContainer.classList.toggle("toggle-social-media-container");

  if (windowInnerWidth <= maxMediaQueryBreakPointValue) {
    //Remove logo container when user toggle menu
    headerLogoContainer.classList.toggle("turn-display-on-off");
    mainMenuButton.style.justifyContent = "center";
  }
}
export default openMainMenu;
