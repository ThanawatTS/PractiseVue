<template>
    <div class="podcast">
        <h1>Postcast</h1>
        <Albums />
        <br>
        <Tracks />
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
</style>

