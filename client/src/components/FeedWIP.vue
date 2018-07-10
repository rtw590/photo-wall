<template>
  <v-layout column>
    <v-flex xs12 sm6>

      <h1>Hi</h1>
      <ul v-for="posts in cardsGrouped" :key="posts.title">
        <li>Test 1</li>
        <ul v-for="item in posts" :key="item.title">
          <li v-text="item.title"></li>
          <li>Test 2</li>
        </ul>
      </ul>




      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "My Friend",
          src: "1.png"
        },
        {
          title: "Catdog",
          src: "1.png"
        },
        {
          title: "Man o meen",
          src: "1.png"
        },
        {
          title: "My ",
          src: "1.png"
        },
        {
          title: "My Shoe",
          src: "1.png"
        }
      ],
      cardsSpread: []
    };
  },
  methods: {},
  computed: {
    cardsGrouped: function() {
      let cardChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < this.cards.length; i += chunkSize) {
        cardChunks.push(this.cards.slice(i, i + chunkSize));
      }
      console.log(cardChunks);
      return this.cardChunks;
    }
  },
  mounted() {
    this.$store.dispatch("GET_POSTS");
  }
};
</script>


<style scoped>
</style>
