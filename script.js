async function buscarPokemon(nombre) {
  const input = document.getElementById("pokemonInput");
  const pokemon = nombre || input.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("No existe");

    const data = await res.json();

    document.getElementById("pokemonName").textContent = data.name.toUpperCase();
    document.getElementById("pokeId").textContent = data.id;

    document.getElementById("pokemonImg").src =
      data.sprites.other["official-artwork"].front_default;

    document.getElementById("pokeType").textContent =
      data.types.map(t => t.type.name).join(", ");

    document.getElementById("pokeHeight").textContent = (data.height / 10) + " m";
    document.getElementById("pokeWeight").textContent = (data.weight / 10) + " kg";

    document.getElementById("pokeAbilities").textContent =
      data.abilities.map(a => a.ability.name).join(", ");

    document.getElementById("error").textContent = "";

  } catch {
    document.getElementById("error").textContent = "Pokémon no encontrado";
  }
}

function pokemonRandom() {
  const randomId = Math.floor(Math.random() * 1000) + 1;
  buscarPokemon(randomId);
}