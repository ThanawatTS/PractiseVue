<template>
    <div class="podcast">
        <h1 style="margin-left:5%;margin-top:2%">Postcast</h1>
        <v-card class="card-size">
        <Albums />
        </v-card>
        <br>
        <v-card class="card-size">
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

