<template>
    <div id="adminBlog">
        <div style="margin-top: 2%">
        <h1 style="margin-left: 15%; margin-right: 1%; display:inline">Blog</h1>
        <b-button v-b-modal.modal-prevent-addAlbums  variant="info" id="btn-albumAdd">Add</b-button>
        </div>
                <b-modal
                id="modal-prevent-addAlbums"
                ref="modal"
                title="New Blog"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                    label="Title"
                    label-for="titleName-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="titleName-input"
                        v-model="titleName"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    label="Description"
                    label-for="description-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="description-input"
                        v-model="description"
                        required
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group
                    label="LInk"
                    label-for="link-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="link-input"
                        v-model="Link"
                        required
                    ></b-form-input>
                    </b-form-group>
                    
                    <b-form-group
                    label="Reference"
                    label-for="reference-input"
                    invalid-feedback="Name is required"
                    >
                    <b-form-input
                        id="reference-input"
                        v-model="reference"
                        required
                    ></b-form-input>
                    </b-form-group>

                    <v-container fluid grid-list-xl>
                      <v-flex xs5 d-flex>
                        <span>Category</span>
                        <v-select
                        style="margin-left: 5%"
                        :items="select"
                        label="- Select -"
                        solo
                        ></v-select>
                    </v-flex>
                    </v-container>

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
        <div id="cardblogsize">
        <CardBlog />
        </div>
    </div>
</template>

<script>
import CardBlog from '@/components/blog/CardBlog.vue'
export default {
    name: "adminblog",
    components: {
        CardBlog
    },
    data() {
        return{
            select: ['1', '2', '3', '4']
        }
    }
}
</script>

<style scoped>

    

    #cardblogsize {
        margin: auto;
        padding: 2%;
        width: 75%;
    }
</style>


