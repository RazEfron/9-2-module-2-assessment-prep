const list = document.querySelector("#pokemon-list");
const currPokemon = document.querySelector("#curr-pokemon");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.results.length; i++) {
      const p = document.createElement("p");
      p.innerText = data.results[i].name;

      p.addEventListener("click", (e) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${p.innerText}`)
          .then((response) => response.json())
          .then((json) => {
            const h3 = `<h3>${p.innerText}</h3>`;
            currPokemon.innerHTML = h3;

            const baseExperienceP = `<p><strong>Base Experience:</strong>${json.base_experience}</p>`;
            currPokemon.innerHTML += baseExperienceP;

            const heightP = `<p><strong>Height:</strong>${json.height}</p>`;
            currPokemon.innerHTML += heightP;

            const weight = `<p><strong>Weight:</strong>${json.weight}</p>`;
            currPokemon.innerHTML += weight;

            const img = `<img src="${json.sprites.front_default}" alt="${json.name}"/>`;
            currPokemon.innerHTML += img;

            console.log(json);
          });
      });

      list.append(p);
    }
    console.log(data);
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const warning = document.querySelector("#pokemon-sightings p");
  //   e.target; // the form
  //   e.target.site.value; // the value of the input with tha 'name' === 'site'
  if (!currPokemon.innerHTML) {
    window.alert("Choose a Pokemon first");
  } else {
    if (e.target.site.value) {
      if (warning) warning.remove();

      const li = document.createElement("li");
      const h3 = currPokemon.querySelector("h3");
      li.innerHTML = `<strong>${h3.innerText}:</strong> ${e.target.site.value}`;

      const button = document.createElement("button");
      button.innerText = "Delete Log";
      button.addEventListener("click", (e) => {
        li.remove();
      });

      li.append(button);
      ul.append(li);
    } else {
      if (!warning) {
        const pEle = document.createElement("p");
        pEle.innerText = "Must choose a site first";
        ul.before(pEle);
      }
    }
  }
});

const deleteButton = document.querySelector("button");
deleteButton.addEventListener("click", (e) => {
  ul.innerHTML = "";
});
