 <template>
    <v-row>
        <template >
            <v-col cols ="12"> 
                <strong class="orange--text"> Amigos </strong>
            </v-col>
            <v-col v-for="j in 18" :key="`${n}${j}`" cols="6" md="2">
              <img src="https://complianceneles.com.br/wp-content/uploads/2020/12/no-picture.gif" alt="30" width="180">
            </v-col>
        </template>
    </v-row>
</template>