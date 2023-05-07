const container = document.querySelector(".container");
const btn = document.querySelector(".user__card-btn");

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
  //   console.log(data);
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("user__card");

  const name = document.createElement("h2");
  name.textContent = user.name;

  const userName = document.createElement("h4");
  userName.textContent = `Username: ${user.username}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${user.email}`;

  container.appendChild(card);
  card.appendChild(name);
  card.appendChild(userName);
  card.appendChild(email);

  return card;
}

// Display user cards

async function displayUserCards() {
  const users = await fetchData();

  [...users].forEach((user) => {
    const card = createUserCard(user);
  });
}

// click btn

btn.addEventListener("click", function () {
  const cards = document.querySelectorAll(".user__card");
  container.classList.toggle("cards-visible");
  for (let i = 0; i < cards.length; i++) {
    if (
      cards[i].style.visibility === "hidden" ||
      cards[i].style.visibility === ""
    ) {
      cards[i].style.visibility = "visible";
      btn.textContent = "Hide the Cards";
    } else {
      cards[i].style.visibility = "hidden";
      btn.textContent = "Show the Cards";
    }
  }
});

displayUserCards();
