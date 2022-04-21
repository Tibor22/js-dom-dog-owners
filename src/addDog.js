let form;
import { renderForm } from "./renderForm.js";

export function addDog(dogSection) {
  dogSection.innerHTML = "";
  console.log("ss");
  const html = `
    <h2>Add a new Dog</h2>
    <form class="form">
      <label for="name">Dog's name</label>
      <input type="text" id="name" name="name" />
  
      <label for="image">Dog's picture</label>
      <input type="url" id="image" name="image" />
  
      <label for="bio">Dog's bio</label>
      <textarea rows="5" id="bio" name="bio"></textarea>
  
      <input
        type="submit"
        id="submit"
        name="submit"
        value="Let's add a dog!"
        class="form__button"
      />
    </form>
    `;

  dogSection.insertAdjacentHTML("beforeend", html);
  form = document.querySelector(".form");

  form.addEventListener("submit", (e) => renderForm(e, data, dogSection));
}

export { form };
