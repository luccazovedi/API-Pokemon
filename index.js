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