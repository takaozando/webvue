<template>
  <v-app id="inspire">
    <v-toolbar  app color="#854594" max-height="50px" height="50px"  >

      <v-spacer></v-spacer>
        <router-link to = "/stream">
          <v-btn icon>
            <v-icon large>mdi-access-point</v-icon>
          </v-btn>
        </router-link>

      <router-link to = "/dj">
        <v-btn icon>
          <v-icon large>mdi-account-music</v-icon>
        </v-btn>
      </router-link>

      <router-link to = "/friends">
        <v-btn icon>
          <v-icon large>mdi-account-multiple</v-icon>
        </v-btn>
      </router-link>

      <router-link to = "/favs">
        <v-btn icon>
          <v-icon large>mdi-star</v-icon>
        </v-btn>
      </router-link>

    </v-toolbar>

    <v-navigation-drawer app dark  expand-on-hover color = "#854594" clipped-left >
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

        <router-link to = "/stream">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-access-point</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Streaming</v-list-item-title>
          </v-list-item>
        </router-link>
        
        <router-link to = "/dj">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-music</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Meus DJs</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to = "/friends">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Conexões</v-list-item-title>
        </v-list-item>
        </router-link>

        <router-link to = "/favs">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Favoritos</v-list-item-title>
        </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>

    <v-main class="black">
      <v-container>
        <router-view> </router-view>
      </v-container>
    </v-main>



    

    <v-bottom-navigation app v-model="value"
    :background-color="color"
    dark
    shift 
    height="40px">

      <v-btn>
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>

       <v-btn>
        <v-icon>mdi-play-pause</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

      <v-btn>
        <span>+Playlist</span>

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
          case 3: return '#6a1c7c'
        }
      },
    },
  }
</script>