<template>
  <v-app id="inspire">
    <v-system-bar app dark>
      <v-spacer></v-spacer>
      <v-icon>mdi-window-minimize</v-icon>
      <v-icon>mdi-window-maximize</v-icon>
      <v-icon>mdi-window-close</v-icon>
    </v-system-bar>

    <v-app-bar app dark elevation="10">
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


    </v-app-bar>

    <v-navigation-drawer app dark permanent expand-on-hover color = "#F12711">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://avatars.githubusercontent.com/u/69652926?v=4"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Gustavo Hideo Takao </v-list-item-title>
            <v-list-item-subtitle>@takaozando</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
         <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-access-point</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Streaming</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Minhas playlists</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Conexões</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Favoritos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="black">
      <v-container>
        <v-row>
          <template v-for="n in 2">
            <v-col :key="n" class="mt-2" cols="12">
              <strong class="orange--text">Suas músicas {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 12" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet color="grey" height="150" width = "290"  outlined shaped ></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app dark padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>

    <v-bottom-navigation app v-model="value"
    :background-color="color"
    dark
    shift >

      <v-btn>
        <span>Anterior</span>

        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>

       <v-btn>
        <span>Play/Pause</span>

        <v-icon>mdi-play-pause</v-icon>
      </v-btn>

      <v-btn>

        <span>Próxima</span>

        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

      <v-btn>
        <span>Adicionado à playlist</span>

        <v-icon>mdi-playlist-music</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),
    computed: {
      color () {
        switch (this.value) {
          case 3: return '#F12711'
          
        }
      },
    },
  }
</script>