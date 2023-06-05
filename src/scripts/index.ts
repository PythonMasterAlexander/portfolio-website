import openMainMenu from './components/openMainMenu.js';
import { mainMenuButton } from './constants/variables.js';

/**
  * Adds an event listener to the main button on the page
  * The event listener listen for when the user click the menu
*/
mainMenuButton.addEventListener("click", openMainMenu);

