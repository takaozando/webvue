
<template>
    <v-row>
         <v-col class="mt-2" cols="12">
              <strong class="orange--text">Playlists</strong>
            </v-col>
            <v-card v-for="(dj, index) of $store.state.dj" :key="index" > 
                <v-img :src = "dj.imgUrl" height="200" width="200"> </v-img>
                <v-card-title > {{dj.nome}} </v-card-title>
                <v-card-subtitle> {{dj.vertente}} </v-card-subtitle>
            </v-card>
    </v-row>
</template> 

