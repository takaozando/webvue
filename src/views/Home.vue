<template>
    <v-sheet  color = "#968a99">
      <v-carousel hide-delimiters height="480px">
        <v-carousel-item eager v-for="(nextArtistImage,i) in $store.state.dj" :key="i">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="nextArtistImage.imgUrl" style="width:1100px;height:400px;" :alt="nextArtistImage.imgUrl"/>
               <v-col  align="center" justify="center" >
              <div class="display-1 white--text">{{ nextArtistImage.nome }} </div>
                <v-btn color="white" tile>
                  <v-icon x-large>mdi-youtube</v-icon>
                </v-btn>
               </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
</template>
