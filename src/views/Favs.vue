 <template>
    <v-row>
        <template v-for="n in 2">
            <v-col :key="n" class="mt-2" cols="12">
                <strong class="orange--text">Favoritos {{ n }}</strong>
            </v-col>
            <v-col v-for="j in 12" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet color="grey" height="150" width = "190"  outlined shaped ></v-sheet>
            </v-col>
        </template>
    </v-row>
</template>
