<template>
    <div id="cardblog">
        <div v-for="(img, index) in detail" :key="index" style="display:inline-block; margin-right: 5%">
            <v-btn-toggle style="margin-left: 5%;margin-top: 5%">
                <div v-on:click="gotoVideoDetail(index)">
                    <v-card style="width: 260px">
                        <v-img
                            :src="img.picture"
                            aspect-ratio="1.2"
                        ></v-img>

                    <v-card-title  primary-title>
                    <div>
                        <div><h5>Stop What You're Doing And Learn Coding If You And A Job In Ten Year bhabhabhabhabha</h5></div>
                            <span class="grey--text"> 20 May 2019 - Sololearn </span><br>
                            <v-icon style="margin-right: 10%">home</v-icon>
                            <span class="section"></span>
                            <v-icon style="margin-left: 2%">home</v-icon> 
                            <br>
                            <span style="margin-right: 10%">{{detail[0].view}}</span>
                            <span class="section"></span>
                            <span style="margin-left: 2%">{{detail[0].like}}</span>
                        </div>
                    </v-card-title>
                    </v-card>
                </div>
            </v-btn-toggle>
        </div>
    </div>
</template>

<script>
export default {
    name: "cardblog",
    data() {
        return {
            detail: [
                {
                    id: 0,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce Titile topic",
                    subtitle_card: "The standard podcast subtitle topic",
                    view: "30 K",
                    like: "100 K"
                },
                {
                    id: 1,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce Titile topic",
                    subtitle_card: "The standard podcast subtitle topic",
                    view: "30 K",
                    like: "100 K"
                },
                {
                    id: 2,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce Titile topic",
                    subtitle_card: "The standard podcast subtitle topic",
                    view: "30 K",
                    like: "100 K"
                }
            ]
        }
    },
    methods: {
        gotoVideoDetail(index){
            this.$router.push('/allblog')
        }
    }
}
</script>

<style scoped>
    .section{
        border-left: 2px #cccccc solid;
    }

</style>
