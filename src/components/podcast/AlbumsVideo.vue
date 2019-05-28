<template>
    <div id="albumsvideo">
      <v-container fluid grid-list-xl>
            <v-flex d-flex>
                <v-select
                    style="margin-left: 5%; width: 20%;"
                    :items="select"
                    label="Category"
                    solo
                ></v-select>
                <v-text-field
                    style="margin-right: 5%; margin-left:5%; width: 65%;"
                    solo
                    label="Search"
                    append-icon="search"
                ></v-text-field>
            </v-flex>
        </v-container>

        <v-card class="card-size">
        <b-row>
        <b-col cols="3">
        <b-img id="video-pic" src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></b-img>
        <h2>The Secret Sauce</h2>
        <span style="font-family: 'Courier New', Courier, monospace;">THE STANDARD Podcast</span><br>
        <v-icon>home</v-icon> {{videoDetail[0].view}}
        <v-icon>home</v-icon> {{videoDetail[1].view}}
        
        </b-col>
        <b-col cols="9">
        <v-card>
          <v-list v-for="(detail, index) in videoDetail" :key="index" >
          <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title>{{detail.time}} {{detail.title}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action style="margin-right: 1%">
              <v-icon>chat</v-icon>
            </v-list-tile-action>
            {{detail.view}}
          </v-list-tile>
          <v-divider v-if="index != (videoDetail.length-1)"></v-divider>
          </v-list>
        </v-card>         
        </b-col>
        </b-row>
        </v-card>
    </div>
</template>


<script>
export default {
    name: 'albumsvideo',
    data () {
        return {
          select: ["1", "2"],
          videoDetail: [
              {
                time: '14.49',
                title: '1.The SecretSauce Ep.0 แนะนำ \'The Secret Sauce\'',
                view: '924'
              },
              {
                time: '14.49',
                title: '4.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              }
          ]
        }
    }
}
</script>

<style scoped>

    #video-pic {
        width: 80%;
        height: 250px;
    }

</style>
