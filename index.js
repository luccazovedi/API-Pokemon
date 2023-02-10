new Vue({
  el: "#app",
  data() {
    return {
      buscaPokemon: "",
      pokemon: null,
      error: null,
      loading: false,
    };
  },

  methods: {
    async searchPokemon() {
      this.loading = true;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.buscaPokemon}`       
        );
        const data = await response.json();
        this.pokemon = data;
        this.error = null;
      } catch (error) {
        this.error = "Nada na Pokedex! Tente outro. ";
      }
      this.loading = false;
    },
  },
});

const searchField = document.getElementById("searchField");
const optionsContainer = document.getElementById("optionsContainer");
const pokemons = ["bulbasauro", "Ivysaur", "Venusaur", "charmander", "Charmeleon", "Charizard","Squirtle", "Wartortle", "Blastoise", "Pikachu", "Raichu", "Jigglypuff", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", 
"Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath","Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout","Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler","Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton","Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon","Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo"];

searchField.addEventListener("input", function() {
  let inputValue = searchField.value;
  let filteredPokemons = pokemons.filter(searchPokemon => searchPokemon.toLowerCase().startsWith(inputValue.toLowerCase()));
  optionsContainer.innerHTML = "";
  
  filteredPokemons.forEach(pokemon => {
    let option = document.createElement("div");
    option.innerHTML = pokemon;
    option.style.cursor = "pointer";
    option.addEventListener("click", function() {
      searchField.value = pokemon;
      optionsContainer.innerHTML = "";
    });
    optionsContainer.appendChild(option);
  });
});