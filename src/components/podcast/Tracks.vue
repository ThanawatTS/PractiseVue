<template>
    <div id="Tracks">
      <h1>Tracks</h1>
        <div class="hide-mobile">
            <v-flex xs12 v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
            <v-card style="margin-bottom: 1%">
              <v-layout>
                <v-flex xs3>
                  <v-img
                    :src="imgDes.picture"
                    aspect-ratio="1.5"
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  
                    <div id="card-Detail">
                      <div id="title">
                        {{ titlearr[index] }}
                        <div id="subtitle">
                          {{ descriptionarr[index] }}
                        </div>
                      </div>
                      
                    </div>
                 
                  <div id="card-footer">
                    <v-icon>home</v-icon> {{imgDes.view}}
                    <v-icon>home</v-icon> {{imgDes.love}}
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </div>
        <div class="show-mobile">
            <v-flex xs12 v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
            <v-card style="margin-bottom: 5%">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="imgDes.picture"
                    aspect-ratio="1.5"
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  
                    <div id="card-Detail">
                      <div id="title">
                        {{ titlearr[index] }}
                        <div id="subtitle">
                         {{ descriptionarr[index] }}
                        </div>
                      </div>
                      
                    </div>
                 
                  <div id="card-footer">
                    <v-icon>home</v-icon> {{imgDes.view}}
                    <v-icon>home</v-icon> {{imgDes.love}}
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tracks',
    data () {
        return {
          imgarr: [ 
                {
                    id: 0,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิ",
                    view: 101,
                    love: 222
                },
                {
                    id: 1,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://placekitten.com/g/30/30",
                    description: "Hello 22323",
                    view: 201,
                    love: 322
                },
                {
                    id: 2,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 301,
                    love: 422
                },
                {
                    id: 3,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 401,
                    love: 522
                },
                {
                    id: 4,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 501,
                    love: 622
                },
                {
                    id: 5,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",  
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 601,
                    love: 722
                },
                {
                    id: 6,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 801,
                    love: 922
                },
                 {
                    id: 7,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 1001,
                    love: 1122
                },
                 {
                    id: 8,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 1111,
                    love: 1222
                },
                 {
                    id: 9,
                    title: "SUPER PRODUCTIONIVE EP.15 7วิธีคิดและตัดสินใจให้โดนตัวเลขหลอก สำหรับคนลงทุน ทำงาน สร้างธุรกิจ",
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    view: 2101,
                    love: 3222
                },
          ],
          titlearr: [],
          descriptionarr: []
        }
    },
    methods: {
      limitTitle () {
        for(var x in this.$data.imgarr){
          if(screen.width > 1200){
              if(this.$data.imgarr[x].title.length > 120){
                this.$data.titlearr.push(this.$data.imgarr[x].title.substring(0,120))
              } else {
                this.$data.titlearr.push(this.$data.imgarr[x].title)
              }

              if(this.$data.imgarr[x].description.length > 50){
                this.$data.descriptionarr.push(this.$data.imgarr[x].description.substring(0,50))
              } else {
                this.$data.descriptionarr.push(this.$data.imgarr[x].description)
              }

          } else if (screen.width > 750) {
              if(this.$data.imgarr[x].title.length > 100){
                this.$data.titlearr.push(this.$data.imgarr[x].title.substring(0,100))
              } else {
                this.$data.titlearr.push(this.$data.imgarr[x].title)
              }

              if(this.$data.imgarr[x].description.length > 25){
                this.$data.descriptionarr.push(this.$data.imgarr[x].description.substring(0,25))
              } else {
                this.$data.descriptionarr.push(this.$data.imgarr[x].description)
              }
          } else if (screen.width > 100) {
            
              if(this.$data.imgarr[x].title.length > 40){
                this.$data.titlearr.push(this.$data.imgarr[x].title.substring(0,40))
              } else {
                this.$data.titlearr.push(this.$data.imgarr[x].title)
              }
               
              if(this.$data.imgarr[x].description.length > 10){
                this.$data.descriptionarr.push(this.$data.imgarr[x].description.substring(0,10))
              } else {
                this.$data.descriptionarr.push(this.$data.imgarr[x].description)
              }
          }
         
        }
      }
    },
    beforeMount() {
      this.limitTitle();
    }
}
</script>

<style>

  #Tracks {
    text-align: left;
    margin: auto;
    width: 80%;
  }
  
  #card-Detail {
    margin-left: 5%
  }

  #card-footer {
    margin-left: 2%;
    position: absolute;
    bottom: 0;
  }
  
 
  
  #subtitle {
    font-family: 'Courier New', Courier, monospace;
  }

  @media only screen and (min-width: 100px) {
    .show-mobile {
    display: block;
    }

    .hide-mobile {
    display: none;
    }

    #title {
      margin-right: 10%;
      position: absolute;
      font-size: 80%;
    }
  }

  @media only screen and (min-width: 376px) {
    .show-mobile {
    display: none;
    }

    .hide-mobile {
    display: block;
    }

    #title {
      margin-right: 10%;
      position: absolute;
      font-size: 100%;
    }
  }

  @media only screen and (min-width: 769px) {
    .show-mobile {
    display: none;
    }

    .hide-mobile {
    display: block;
    }

    #title {
      margin-right: 10%;
      position: absolute;
      font-size: 150%; 
    }
  }
    
</style>