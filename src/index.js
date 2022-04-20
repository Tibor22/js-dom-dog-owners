import { renderDogCard } from "./renderDogCard.js";
import { changeText } from "./changeText.js";
import { renderNavigation } from "./renderNavigation.js";
import { addDog, form } from "./addDog.js";
const dogs = data;
export const dogListContainer = document.querySelector(".dogs-list");
const header = document.querySelector("header");
const dogSection = document.querySelector(".main__dog-section");
const addDogBtn = document.querySelector(".dogs-list__button--add");

// WRITE YOUR CODE BELOW!

renderNavigation(dogs);
header.addEventListener("click", (e) => renderDogCard(e, data, dogSection));
dogSection.addEventListener("click", (e) => changeText(e, dogSection));
addDogBtn.addEventListener("click", () => addDog(dogSection));

addDog(dogSection);

form.addEventListener("submit", renderForm);

export function renderForm(e) {
  e.preventDefault();
  console.log(e.target[2].value);

  data.push({
    name: e.target[0].value,
    bio: e.target[2].value,
    isGoodDog: true,
    image: e.target[1].value,
  });
  dogListContainer.innerHTML = `<li class="dogs-list__button dogs-list__button--add">+</li>`;
  renderNavigation(dogs);

  renderDogCard(e, data, dogSection);
  const addDogBtn = document.querySelector(".dogs-list__button--add");
  addDogBtn.addEventListener("click", () => addDog(dogSection));
}
