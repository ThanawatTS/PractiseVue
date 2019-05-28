<template>
    <div id="morealbums">
      <v-container fluid grid-list-xl>
            <v-flex d-flex>
                <v-select
                    style="margin-left: 5%; width: 20%;"
                    :items="select"
                    label="Category"
                    solo
                ></v-select>
                <v-text-field
                    style="margin-right: 5%; margin-left:5%; width: 65%;"
                    solo
                    label="Search"
                    append-icon="search"
                ></v-text-field>
            </v-flex>
        </v-container>
        <div v-for="(item,index) in amountOfVideoList" :key="index" style="margin-bottom: 5%">
            <AllAlbums />
        </div>

        <div class="text-xs-center" style="margin-top: 5%; margin-bottom: 5%">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  
  </div>

    </div>
</template>


<script>
import AllAlbums from '@/components/podcast/AllAlbums.vue'

export default {
    name: "MoreAlbums",
    components: {
        AllAlbums
    },
    data () {
        return {
            page: 1,
            select: ["1", "2"],
            amountOfVideoList: 3
        }
    }
}
</script>

<style scoped>

</style>
