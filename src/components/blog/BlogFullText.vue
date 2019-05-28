<template>
    <div id="blogfulltext">
        <div id="cardBlog">
        <div v-for="(img, index) in detail" :key="index" style="margin-left: 5%; margin-bottom:5%; width: 800px" >
        <v-card >
        <v-card-title  primary-title>
          <div>
            <div><h2>Stop What You're Doing And Learn Coding If You And A Job In Ten Year bhabhabhabhabha</h2></div>
            <span class="grey--text"> 20 May 2019 - Sololearn </span>
            <div style="float: right">
                <v-icon>home</v-icon>
                 <span>{{detail[0].view}}</span>
                <v-icon>home</v-icon>
                <span>{{detail[0].like}}</span>
            </div>
          </div>
        </v-card-title>
        <v-img
          :src="img.picture"
          aspect-ratio="2"
        ></v-img>
        <v-card-title  primary-title>    
          <div>
           <span>   The v-card component is a versatile component that can be 
                    used for anything from a panel to a static image. The card component 
                    has numerous helper components to make markup as easy as possible.
                    Components that have no listed options use Vue's functional component 
                    option for faster rendering and serve as markup sugar to make building easier.
           </span>
          </div>
        </v-card-title>
        </v-card> 
        </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'blogfulltext',
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
                }
             ]
        }
    }
}
</script>

<style scoped>

    #blogfulltext {
        margin-left: 20%
    }

</style>
