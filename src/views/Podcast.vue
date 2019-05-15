<template>
    <div class="podcast">
        <h1>Postcast</h1>
        <Albums />
    </div>
</template>

<script>
import Albums from '@/components/podcast/Albums.vue'
import Tracks from '@/components/podcast/Tracks.vue'

export default {
    name: 'podcast',
    components: {
        Albums
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scope>
</style>

