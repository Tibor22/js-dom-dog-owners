import { dogListContainer } from "./index.js";
export function renderNavigation(dogs) {
  let html = "";
  dogs.forEach((dog) => {
    html += `<li class="dogs-list__button">${dog.name}</li>`;
  });

  dogListContainer.insertAdjacentHTML("beforeend", html);
}
