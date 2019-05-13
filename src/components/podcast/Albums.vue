<template>
    <div id="Albums">
        <span>Albums</span>
        <b-button id="btn-add" variant="info" >add</b-button>
        <p v-if="moreDetail">more...</p>

        <div class="hide-mobile">
        <v-layout>
            <v-layout row wrap>
             <v-flex xs3  v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
                <div v-if="index < 8">
                    <v-card id="img-card">
                        <v-img
                        :src="imgDes.picture"
                        aspect-ratio="1.5"
                        ></v-img>
                        

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div></div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn flat color="orange">Share</v-btn>
                            <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                </v-flex>
            </v-layout>
        </v-layout>
        </div>
        
        <div class="show-mobile">
            <v-flex xs12 v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
            <v-card color="cyan darken-2" class="white--text" style="margin-bottom: 5%">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="imgDes.picture"
                    aspect-ratio="1.5"
                    
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{index}}</div>
                      <div>imgDes.description</div>
                    
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                
              </v-card-actions>
            </v-card>
          </v-flex>

        </div>
       

    </div>
</template>

<script>
export default {
    name: 'albums',
    data () {
        return {
            moreDetail: false,
            imgarr: [ 
                {
                    id: 0,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                {
                    id: 1,
                    picture: "https://placekitten.com/g/30/30",
                    description: "Hello 2"
                },
                {
                    id: 2,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                {
                    id: 3,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                {
                    id: 4,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                {
                    id: 5,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                {
                    id: 6,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                 {
                    id: 7,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                 {
                    id: 8,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                 {
                    id: 9,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1"
                },
                
                ]
        }
    },
    beforeMount(){
        if(this.$data.imgarr.length > 8){
            this.$data.moreDetail = true;
        }
    }
}
</script>

<style scoped>

    #Albums {
        text-align: left;
        margin: 3%
    }
    
    #btn-add {
        margin-left: 2%;
    }

    #img-albumsize {
        width: 200px;
        height: 200px;
    }

    #img-card {
        margin-left: 5%;
        margin-top: 10%;
    }

 @media only screen and (min-width: 100px) {
      .show-mobile {
        display: block;
      }
      .hide-mobile {
        display: none;
      }
    }

 @media only screen and (min-width: 701px) {
      .show-mobile {
        display: none;
      }
      .hide-mobile {
        display: block;
      }
    }

</style>
