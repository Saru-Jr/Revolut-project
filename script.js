 // Données des cartes, avec une image par carte (URL)
  const cards = [
    { id: 1, name: "physical", img: "../img/physical.png", title: "Elevate your spend", description: "Earn points on your purchases with one of our debit cards. Then redeem them for Airline Miles and more. RevPoints T&Cs apply."},
    { id: 2, name: "virtual", img: "../img/virtual.png", title: "Go virtual", description: "Create and add virtual cards to Apple or Google Wallet to start paying right away."},
  ];

  const cardsContainer = document.getElementById("cardsContainer");
  const btnPhysical = document.getElementById("btnPhysical");
  const btnVirtual = document.getElementById("btnVirtual");

  function displayCards(type) {
    cardsContainer.innerHTML = "";

    const filtered = cards.filter(card => card.type === type);

    filtered.forEach(card => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";

      const imgEl = document.createElement("img");
      imgEl.src = card.img;
      imgEl.alt = card.name;

      const h1 = document.createElement("h1");
      h1.textContent = card.title;

      const p = document.createElement("p");
      p.textContent = card.description;

      const btnGet = document.createElement("button");
      btnGet.className = "get-card";
      btnGet.textContent = "Create a card";
      btnGet.addEventListener("click", () => {
        alert(`You have requested: ${card.name}`);
      });

      cardEl.appendChild(imgEl);
      cardEl.appendChild(h1);
      cardEl.appendChild(p);
      cardEl.appendChild(btnGet);

      cardsContainer.appendChild(cardEl);
    });
  }

  function setActiveButton(activeBtn) {
    btnPhysical.classList.remove("active");
    btnVirtual.classList.remove("active");
    activeBtn.classList.add("active");
  }

  btnPhysical.addEventListener("click", () => {
    displayCards("physical");
    setActiveButton(btnPhysical);
  });

  btnVirtual.addEventListener("click", () => {
    displayCards("virtual");
    setActiveButton(btnVirtual);
  });

  // Affiche par défaut les cartes physiques
  displayCards("physical");