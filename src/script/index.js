new Vue({
  el: "#app",
  data() {
    return {
      buscaPokemon: "",
      pokemon: null,
      error: null,
      loading: false,
      img: true,
    };
  },

  methods: {
    async searchPokemon() {
      this.img = true;
      this.loading = true;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.buscaPokemon}`       
        );
        const data = await response.json();
        this.pokemon = data;    
        this.nome = data.name;
        this.id = data.id;
        this.altura = data.height;
        this.peso = data.weight;
        this.tipos = data.types.map(tipo => tipo.type.name);
        this.habilidades = data.abilities.map(habilidade => habilidade.ability.name);
        this.movimentos = data.moves.map(movimento => movimento.move.name);
        this.held_items = data.held_items.map(item => item.item.name);
        this.species = data.species.name;
        this.sprites = data.sprites;
        this.forms = data.forms.map(forms => forms.name);
       
        this.estatisticas = data.stats.map(stat => {
          return {
            nome: stat.stat.name,
            valor: stat.base_stat
          };
        });
        this.gameIndices = data.game_indices.map(gameIndex => {
          return {
            game_index: gameIndex.game_index,
            version: gameIndex.version
          };
        });
        this.error = null;
      } catch (error) {
        this.error = "Nada na Pokedex! Tente outro. ";
      }
      this.loading = false;
      this.img = false;
    }
  }
});
