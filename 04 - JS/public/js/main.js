const fetchPokemon = async () => {
  try {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const data = await res.json();

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      experiencia: data.base_experience,
      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat,
    };

    await pintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = async (pokemon) => {
  const imgPokemon = document.getElementById("imgPokemon");
  const namePokemon = document.getElementById("namePokemon");
  const ataquePokemon = document.getElementById("ataquePokemon");
  const ataqueEspecialPokemon = document.getElementById(
    "ataqueEspecialPokemon"
  );
  const defensaPokemon = document.getElementById("defensaPokemon");
  const hpPokemon = document.getElementById("hpPokemon");

  let namePokemonUpperChart =  pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.slice(1)

  imgPokemon.src = pokemon.img;
  namePokemon.innerHTML = `${namePokemonUpperChart} <span>${pokemon.hp}hp</span>`;
  ataquePokemon.innerHTML = `${pokemon.ataque}K <span>Ataque</span>`;
  ataqueEspecialPokemon.innerHTML = `${pokemon.especial}K <span>Ataque Especial</span>`;
  defensaPokemon.innerHTML = `${pokemon.defensa}K <span>Defensa</span>`;
  hpPokemon.innerHTML = `${pokemon.experiencia}K <span>EXP</span>`;
};
