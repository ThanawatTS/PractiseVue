<template>
    <div class="adminPodcast">
        <h1 style="margin-left:5%;margin-top:2%">Postcast</h1>
        <v-card class="card-size">
        <AdmimnAlbums />
        </v-card>
        <v-card class="card-size" style="margin-top:5%">
        <Tracks />
        </v-card>
    </div>
</template>

<script>
import AdmimnAlbums from '@/components/podcast/AdminAlbums.vue'
import Tracks from '@/components/podcast/Tracks.vue'

export default {
    name: 'adminPodcast',
    components: {
        AdmimnAlbums,
        Tracks
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scope>
    .card-size {
        margin: auto;
        padding: 2%;
        width: 90%;
    }


</style>

