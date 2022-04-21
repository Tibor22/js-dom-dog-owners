import { renderNavigation } from "./renderNavigation.js";
import { addDog } from "./addDog.js";
import { dogListContainer } from "./index.js";
import { renderDogCard } from "./renderDogCard.js";
export function renderForm(e, dogs, dogSection) {
  e.preventDefault(); // prevent refresh
  console.log(e.target[2].value);

  data.unshift({
    name: e.target[0].value,
    bio: e.target[2].value,
    isGoodDog: true,
    image: e.target[1].value,
  });

  console.log(data);
  dogListContainer.innerHTML = `<li class="dogs-list__button dogs-list__button--add">+</li>`;
  renderNavigation(dogs);

  renderDogCard(e, data, dogSection);
  const addDogBtn = document.querySelector(".dogs-list__button--add");
  addDogBtn.addEventListener("click", () => addDog(dogSection));
}
