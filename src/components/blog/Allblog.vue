<template>
    <div id="allblog">
        <v-container fluid grid-list-xl>
            <v-flex d-flex>
                <v-select
                    style="margin-left: 15%; width: 15%;"
                    :items="select"
                    label="Category"
                    solo
                ></v-select>
                <v-text-field
                    style="margin-right: 20%; margin-left:5%; width: 50%;"
                    solo
                    label="Search"
                    append-icon="search"
                ></v-text-field>
            </v-flex>
        </v-container>

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
           <span> The v-card component is a versatile component that can be 
               used for anything from a panel to a static image. The card component 
               has numerous helper components to make markup as easy as possible.
                Components that have no listed options use Vue's functional component 
                option for faster rendering and serve as markup sugar to make building easier.
           </span>

           <v-btn
                style="float: right;"
                v-on="on"
                color="info"          
                v-on:click="gotoBlogDetail(index)"     
                >
                Read More...
            </v-btn>
          </div>
        </v-card-title>

      </v-card>
         
        </div>


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
export default {
    name: 'allblog',
    data() {
        return {
            page: 1,
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
        gotoBlogDetail(index){
            this.$router.push('/blogfulltext')
        }
    }
}
</script>

<style scoped>

    #cardBlog{
        margin-left: 20%
    }
    
</style>
