export function renderDogCard(e, data, dogSection) {
  if (!e.target.classList.contains("dogs-list__button--add")) {
    dogSection.innerHTML = "";
  }
  console.log();
  let html = "";
  data.forEach((dog, i) => {
    if (
      e.target.innerText === dog.name ||
      (e.target.classList.contains("form") && i === data.length - 1)
    ) {
      html += `   <h2>${dog.name}</h2>
            <img
              src=${dog.image}
              alt=""
            />
            <h3>Bio</h3>
            <p>
          ${dog.bio}
            </p>
            <div class="question-container">
              <p class="question">Is naughty? ${
                dog.isGoodDog ? "Yes!" : "No!"
              }</p>
              <button> ${dog.isGoodDog ? "Good Dog" : "Bad Dog"}</button>
            </div> 
            `;
    }
  });
  dogSection.insertAdjacentHTML("afterbegin", html);
}
