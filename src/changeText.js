export function changeText(e, dogSection) {
  if (e.target.querySelector(".form") || e.target.closest(".form")) return;
  console.log(e.target);
  const btn = e.target.closest("button");
  const question = dogSection.querySelector(".question");
  if (btn?.innerText === "Bad Dog") {
    btn.innerText = "Good Dog";
    question.innerText = "Is naughty? Yes!";
  } else {
    btn ? (btn.innerText = "Bad Dog") : "";
    question.innerText = "Is naughty? No!";
  }
}
