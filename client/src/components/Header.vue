<template>
  <v-toolbar color=blue dark>

     <v-menu offset-y class="hidden-md-and-up">
      <v-btn slot="activator" color="primary" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          :to="{
                    name: 'home'
            }">
          <v-list-tile-title >
              Home
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :to="{
                    name: 'test'
            }">
          <v-list-tile-title >
              My Photos
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :to="{
                    name: 'test'
            }">
          <v-list-tile-title >
              Photo Wall
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>


      <v-btn 
        flat
        :to="{
                    name: 'home'
            }">
          Home</v-btn>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
        flat
        :to="{
                    name: 'test'
            }">
          Link One</v-btn>
      <v-btn flat
        :to="{
                    name: 'home'
            }">Link Two</v-btn>
      <v-btn 
        flat
        :to="{
                    name: 'register'
            }">
          Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
.btn--router {
  
}
</style>


