<template>
    <div id="Tracks">
      <div id="title-top" style="margin-bottom:2%">
        <h1 style="display:inline; margin-right: 5%;">Tracks</h1>
        <b-button v-b-modal.modal-prevent-addTrack  variant="success" id="btn-trackAdd">Add</b-button>
            <p  style="display: inline; float: right;">more...</p>
      </div>
        <div class="hide-mobile">
            <v-flex xs12 style=" margin-left: 3%" v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
            <v-card style="margin-bottom: 1%">
              <v-layout id="card-size">
                <v-flex xs3>
                  <v-img
                    :src="imgDes.picture"
                    aspect-ratio="1.3"
                  ></v-img>
                </v-flex>
                <v-flex xs12> 
                    <div id="card-Detail">
                      <div id="title">
                        <v-menu bottom left >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                icon
                                style="float: right;"
                                v-on="on"
                                >
                                <v-icon color="info">more_vert</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-tile
                                v-for="(item, i) in items"
                                :key="i"
                                @click="chooseEditIndex(index)"
                                >
                                    <v-list-tile-title v-b-modal.modal-prevent-edit> {{ item.title }} </v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                            </v-menu>

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
            <v-flex xs12 style=" margin-left: 3%" v-for="(imgDes, index) in imgarr"
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

                         <v-menu bottom left >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                icon
                                style="float: right;"
                                v-on="on"
                                >
                                <v-icon color="info">more_vert</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-tile
                                v-for="(item, i) in items"
                                :key="i"
                                @click="chooseEditIndex(index)"
                                >
                                    <v-list-tile-title v-b-modal.modal-prevent-edit> {{ item.title }} </v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                            </v-menu>

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
        <b-modal
                id="modal-prevent-addTrack"
                ref="modal"
                title="New Track Podcast"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                    label="Title"
                    label-for="trackName-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="trackName-input"
                        v-model="trackName"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    
                    label="Link"
                    label-for="linkName-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="linkName-input"
                        v-model="linkName"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <v-container fluid grid-list-xl>
                      <v-flex xs12 d-flex>
                        <span>Category</span>
                        <v-select
                        style="margin-left: 5%"
                        :items="select"
                        label="- Select -"
                        solo
                        ></v-select>

                        <span  style="margin-left: 5%">Albums</span>
                        <v-select
                        style="margin-left: 5%"
                        :items="select"
                        label="- Select -"
                        solo
                        ></v-select>
                      </v-flex>
                    </v-container>
                    
                    <b-form-group
                    label="Reference"
                    label-for="referName-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="referName-input"
                        v-model="referenceName"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <div style="margin-bottom: 5%">
                    <span>Upload Image</span>
                    </div>
                    <div class="file-field">    
                        <div class="btn blue-gradient btn-sm float-left">
                        <span>Choose files</span>
                        <input type="file" multiple>
                        </div>
                    </div>
                </form>
                <template slot="modal-footer" slot-scope="{ close, saveChange}">
                <b-button variant="danger" @click="close()">
                    clear
                </b-button>
                <b-button variant="primary" @click="saveChange()">
                    Save
                </b-button>
                </template>
                </b-modal>
    </div>
</template>

<script>
export default {
    name: 'tracks',
    data () {
        return {
            trackName: '',
            linkName: '',
            referenceName: '',
            items: [
                { title: 'Edit Album' },
                { title: 'Delete Album' }
            ],
            select: ['1', '2', '3', '4'],
            chooseEdit: 0,
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
        for(var x in this.$data.imgarr) {
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
          } else if (screen.width > 100) {
            
              if(this.$data.imgarr[x].title.length > 20){
                this.$data.titlearr.push(this.$data.imgarr[x].title.substring(0,20))
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
      },
      checkFormValidity() {
            // const valid = this.$refs.form.checkValidity()
            // this.nameState = valid ? 'valid' : 'invalid'
            // return valid
        },
        resetModal() {
            // this.name = ''
            // this.nameState = null
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            //bvModalEvt.preventDefault()
            // Trigger submit handler
            //this.handleSubmit()
        },
        handleSubmit() {
        // Exit when the form isn't valid
            //if (!this.checkFormValidity()) {
            //return
            //}
            // Push the name to submitted names
            //this.submittedNames.push(this.name)
            // Hide the modal manually
            //this.$nextTick(() => {
            //this.$refs.modal.hide()
            //})
        },
        handleChange(v) {
        //this.files = v;
        },
      chooseEditIndex(index) {
            this.$data.chooseEdit = index
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
    width: 90%;
   
  }

  #btn-trackAdd {
    padding: 0.7% 3%;
    margin-bottom: 1%
  }
  
  #card-Detail {
    margin-left: 3%
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
      position: absolute;
      font-size: 150%; 
    }

    
  }
    
</style>