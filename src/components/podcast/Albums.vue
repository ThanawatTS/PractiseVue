<template>
    <div id="Albums">   
        <v-flex xs12 style="margin-bottom:1%">
           <h1 style="display:inline; margin-right: 3%;">Album</h1>
            <div style="display: inline;" >
                <b-button v-b-modal.modal-prevent-addAlbums  variant="success" id="btn-albumAdd">Add</b-button>

                <b-modal
                id="modal-prevent-addAlbums"
                ref="modal"
                title="Add Album"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                    label="Album Name"
                    label-for="albumName-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="albumName-input"
                        v-model="albumName"
                        required
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group
                    label="Album Owner"
                    label-for="albumOwner-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="albumOwner-input"
                        v-model="albumOwner"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <div class="file-field">    
                        <div class="btn blue-gradient btn-sm float-left">
                        <span>Choose files</span>
                        <input type="file" multiple>
                        </div>
                    </div>
                </form>
                <template slot="modal-footer" slot-scope="{ close, saveChange, }">
      
                <b-button size="sm" variant="light" @click="close()">
                    close
                </b-button>
                <b-button size="sm" variant="primary" @click="saveChange()">
                    Save changes
                </b-button>
      
                </template>
                
                </b-modal>
            </div>
        
            <router-link to="/morealbums"><p v-if="moreDetail" style="display: inline; float: right;">more...</p> </router-link>
        </v-flex>

        <div class="hide-mobile-4Col">
        <v-layout>
            <v-layout row wrap style="margin-left:1%">
             <v-flex xs2 style="margin-left: 1%" v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
                <v-btn-toggle style="margin-left: 20%; margin-top: 10%;">
                <div v-on:click="gotoVideoDetail(index)">
                <div v-if="index < 5">
                    <v-card id="img-card">
                        <v-img
                        :src="imgDes.picture"
                        aspect-ratio="1.4"
                        >
                        </v-img>
                        <v-card-title style="width: 220px">
                            <div>
                            <h5 v-if="imgDes.title_card.length < 13">{{titlecardArr[index]}}</h5>
                            <h5 v-if="imgDes.title_card.length > 13">{{titlecardArr[index]}}</h5>
                            <span style="font-family: 'Courier New', Courier, monospace;">{{subtitlecardArr[index]}}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </div>
                </div>
                <v-menu bottom left v-if="index < 5">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            style="position: absolute; z-index: 1;right: 0"
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
                </v-btn-toggle>
            </v-flex>
            </v-layout>
        </v-layout>
        </div>

        <div class="hide-mobile-2Col">
        <v-layout>
            <v-layout row wrap style="margin-left: 1%">
             <v-flex xs5 style="margin-left: 20%" v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
                
              <v-btn-toggle style="margin-left: 5%;margin-top: 5%">
                    <div v-on:click="gotoVideoDetail(index)">
                <div v-if="index < 10">
                    <v-card id="img-card">
                        <v-img
                        :src="imgDes.picture"
                        aspect-ratio="1.4"
                        >
                        </v-img>
                        <v-card-title style="width: 220px">
                            <div>
                            <h5 v-if="imgDes.title_card.length < 13">{{titlecardArr[index]}}</h5>
                            <h5 v-if="imgDes.title_card.length > 13">{{titlecardArr[index]}}</h5>
                            <span style="font-family: 'Courier New', Courier, monospace;">{{subtitlecardArr[index]}}</span>
                            </div>
                        </v-card-title>
                        
                    </v-card>
                </div>
                 </div>
                <v-menu bottom left v-if="index < 5">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            style="position: absolute; z-index: 1;right: 0"
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
                </v-btn-toggle>
                </v-flex>
            </v-layout>
        </v-layout>
        </div>

        <div class="show-mobile">
            <div style="margin-left: 10%;">
            <v-layout row wrap>
             <v-flex v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
                <v-btn-toggle style="margin-left: 20%;margin-top: 5%">
                <div v-on:click="gotoVideoDetail(index)">
                <div v-if="index < 10">
                    <v-card id="img-card">
                        <v-img
                        :src="imgDes.picture"
                        aspect-ratio="1.4"
                        >
                        </v-img>
                        <v-card-title style="width: 220px">
                            <div>
                            <h5 v-if="imgDes.title_card.length < 13">{{titlecardArr[index]}}</h5>
                            <h5 v-if="imgDes.title_card.length > 13">{{titlecardArr[index]}}</h5>
                            <span style="font-family: 'Courier New', Courier, monospace;">{{subtitlecardArr[index]}}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </div>
                 </div>
                 <v-menu bottom left v-if="index < 5">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            style="position: absolute; z-index: 1;right: 0"
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
                </v-btn-toggle>
                </v-flex>
            </v-layout>
            <b-modal
                id="modal-prevent-edit"
                ref="modal"
                title="Edit Album"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                    
                    label="Album Name"
                    label-for="albumName-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="albumName-input"
                        v-model="albumsNameMock"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    
                    label="Album Owner"
                    label-for="albumOwner-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="albumOwner-input"
                        v-model="albumsNameMock"
                        required
                    ></b-form-input>
                    </b-form-group>
        

                    <b-form-group
                    
                    label="Album Image"
                    label-for="name-input"
                    invalid-feedback="Name is required"
                    >
                        <v-img
                        :src="imgarr[this.$data.chooseEdit].picture"
                        aspect-ratio="1"
                        ></v-img>
                    </b-form-group>
                
                </form>

                <template slot="modal-footer" slot-scope="{ close, saveChange, }">
                    <b-button size="sm" variant="light" @click="close()">
                        close
                    </b-button>
                    <b-button size="sm" variant="primary" @click="saveChange()">
                        Save changes
                    </b-button>
                </template>
                
                </b-modal>
            </div>
        </div>
       

    </div>
</template>

<script>
import AlbumsVideo from '@/components/podcast/AlbumsVideo.vue'
import MoreAlbums from '@/components/podcast/MoreAlbums.vue'


export default {
    name: 'albums',
    components: {
        AlbumsVideo,
        MoreAlbums
    },
    data () {
        return {
            items: [
                { title: 'Edit Album' },
                { title: 'Delete Album' }
            ],
            albumsNameMock: 'The Secret Sauce',
            chooseEdit: 0,
            albumName: '',
            albumOwner: '',
            moreDetail: false,
            files: [],
            titlecardArr: [],
            subtitlecardArr: [],
            imgarr: [ 
                {
                    id: 0,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce Titile topic",
                    subtitle_card: "The standard podcast subtitle topic"
                },
                {
                    id: 1,
                    picture: "https://placekitten.com/g/30/30",
                    description: "Hello 2",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                {
                    id: 2,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                {
                    id: 3,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                {
                    id: 4,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                {
                    id: 5,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                {
                    id: 6,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                 {
                    id: 7,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                 {
                    id: 8,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                 {
                    id: 9,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                 {
                    id: 10,
                    picture: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    description: "Hello 1",
                    title_card: "The Secret Sauce",
                    subtitle_card: "The standard podcast"
                },
                
                ]
        }
    },
    methods: {
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
        gotoVideoDetail(index) {
            this.$router.push('/albumsVideo')
        },
        chooseEditIndex(index) {
            this.$data.chooseEdit = index
        },
        titlecardLength() {
            for(var x in this.$data.imgarr) {
                if(this.$data.imgarr[x].title_card.length < 15){
                    this.$data.titlecardArr.push(this.$data.imgarr[x].title_card)
                    this.$data.subtitlecardArr.push(this.$data.imgarr[x].subtitle_card)
                    
                } else {
                    this.$data.titlecardArr.push(this.$data.imgarr[x].title_card.substring(0,15)+"...")
                    this.$data.subtitlecardArr.push(this.$data.imgarr[x].subtitle_card.substring(0,15)+"...")
                    
                }
            }
        }
    },
    
    beforeMount(){
        if(this.$data.imgarr.length > 10){
            this.$data.moreDetail = true;
        }
        this.titlecardLength()
       
    }
}
</script>

<style scoped>

    #Albums {
        text-align: left;
        margin: auto;
    }
    
    #btn-albumAdd {
        padding: 0.7% 3%;
        margin-bottom: 1%
    }

    #img-card {
        margin-left: 1%
    }
    
    #btn-add {
        margin-left: 2%;
    }
    
    #subtitle {
    font-family: 'Courier New', Courier, monospace;
    }

@media only screen and (min-width: 100px) {
    .show-mobile {
    display: block;
    }

    .hide-mobile-4Col {
    display: none;
    }

    .hide-mobile-2Col {
    display: none;
    }
    
     #title {
      margin-right: 10%;
      position: absolute;
      font-size: 80%;
    }
    
}


@media only screen and (min-width: 700px) {
    
    .show-mobile {
    display: none;
    }

    .hide-mobile-4Col {
    display: none;
    }

    .hide-mobile-2Col {
    display: block;
    }
    #title {
      margin-right: 10%;
      position: absolute;
      font-size: 100%;
    }
}

@media only screen and (min-width: 1200px) {
    .show-mobile {
    display: none;
    }

    .hide-mobile-4Col {
    display: block;
    }

    .hide-mobile-2Col {
    display: none;
    }

    #title {
      margin-right: 10%;   
      position: absolute;
      font-size: 150%; 
    }
}

</style>
