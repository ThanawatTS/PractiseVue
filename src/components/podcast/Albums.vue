<template>
    <div id="Albums">
        <v-flex xs12>
            <span>Albums</span>
            <div style="display: inline;" >
                <b-button v-b-modal.modal-prevent-closing>Add</b-button>

                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Add Album"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                    
                    label="Album Name"
                    label-for="name-input"
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
                    label-for="name-input"
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
        
            <p v-if="moreDetail" style="display: inline; float: right;">more...</p>
        </v-flex>
        

        <div class="hide-mobile-4Col">
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

        <div class="hide-mobile-2Col">
        <v-layout>
            <v-layout row wrap>
             <v-flex xs5  v-for="(imgDes, index) in imgarr"
                v-bind:key="imgDes.id">
                <div v-if="index < 4">
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
            albumName: '',
            albumOwner: '',
            moreDetail: false,
            files: [],
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
    methods: {
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid ? 'valid' : 'invalid'
            return valid
        },
        resetModal() {
            this.name = ''
            this.nameState = null
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
        // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
            return
        }
            // Push the name to submitted names
            //this.submittedNames.push(this.name)
            // Hide the modal manually
            //this.$nextTick(() => {
            //this.$refs.modal.hide()
            //})
        },
        handleChange(v) {
        this.files = v;
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
        margin: auto;
        width: 80%;
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

    .hide-mobile-4Col {
    display: none;
    }

    .hide-mobile-2Col {
    display: none;
    }
}


@media only screen and (min-width: 376px) {
    
    .show-mobile {
    display: none;
    }

    .hide-mobile-4Col {
    display: none;
    }

    .hide-mobile-2Col {
    display: block;
    margin-left: 10%;
    }
}

@media only screen and (min-width: 769px) {
    .show-mobile {
    display: none;
    }

    .hide-mobile-4Col {
    display: block;
    margin-left: 5%;
    }

    .hide-mobile-2Col {
    display: none;
    }
}

</style>
