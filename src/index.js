// Imports
import { renderDogCard } from "./renderDogCard.js";
import { changeText } from "./changeText.js";
import { renderNavigation } from "./renderNavigation.js";
import { addDog } from "./addDog.js";
export const dogListContainer = document.querySelector(".dogs-list");
// Query Selectors
const header = document.querySelector("header");
const dogSection = document.querySelector(".main__dog-section");
const addDogBtn = document.querySelector(".dogs-list__button--add");
//setup when first load the page
renderNavigation(data);
addDog(dogSection);
//Handlers
header.addEventListener("click", (e) => renderDogCard(e, data, dogSection));
dogSection.addEventListener("click", (e) => changeText(e, dogSection));
addDogBtn.addEventListener("click", () => addDog(dogSection));
