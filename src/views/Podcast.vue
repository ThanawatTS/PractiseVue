<template>
    <div id="podcast">
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
        <v-card class="card-size">
        <Albums />
        </v-card>
        <v-card class="card-size" style="margin-top:5%">
        <Tracks />
        </v-card>

    </div>
</template>

<script>
import Albums from '@/components/podcast/Albums.vue'
import Tracks from '@/components/podcast/Tracks.vue'

export default {
    name: 'podcast',
    components: {
        Albums,
        Tracks,
    },
    data() {
        return {
            select: ["1", "2"]
        }
    }
}
</script>

<style scoped>
    .card-size {
        margin: auto;
        padding: 2%;
        width: 90%;
    }

 

</style>
