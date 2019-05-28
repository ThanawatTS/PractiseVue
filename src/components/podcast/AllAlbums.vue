<template>
<div id="allalbums">
    <v-card class="card-size">
        <b-row>
        <b-col cols="3">
        <div v-on:click="gotoVideoDetail(index)">
        <b-img id="video-pic" src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></b-img>
        <h2>The Secret Sauce</h2>
        <span style="font-family: 'Courier New', Courier, monospace;">THE STANDARD Podcast</span><br>
        <v-icon>home</v-icon> {{videoDetail[0].view}}
        <v-icon>home</v-icon> {{videoDetail[1].view}}
        </div>
        </b-col>

        <b-col cols="9">
        <v-card>
            <v-list v-for="(detail, index) in videoDetail" :key="index" >
            <div v-if="(videoDetail.length <= 5)" >
                <v-list-tile @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>{{detail.title}}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action style="margin-right: 1%">
                    </v-list-tile-action>
                        {{detail.time}} 
                </v-list-tile>
                <v-divider ></v-divider>
                <div v-if="index == videoDetail.length - 1">
                <v-list-tile>
                <v-list-tile-content>
                <v-btn  style="margin: 0 auto;" @click="controlTrack">{{ viewBtn }}</v-btn>
                </v-list-tile-content>
                </v-list-tile>
                </div>
        </div>
        <div v-if="(videoDetail.length > 5)" >
        <div v-if="!showAllTrack">
            <div v-if="(index < 5)">
                <v-list-tile @click="">
                <v-list-tile-content>
                    <v-list-tile-title>{{detail.title}}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action style="margin-right: 1%">
               
                </v-list-tile-action>
                    {{detail.time}} 
                </v-list-tile>
                <v-divider v-if="index != (videoDetail.length-1)"></v-divider>
            </div>

            <div v-if="(index == 5)">
                <v-list-tile>
                <v-list-tile-content>
                    <v-btn style="margin: 0 auto;" @click="controlTrack">{{ viewBtn }}</v-btn>
                </v-list-tile-content>
                </v-list-tile>
            </div>
            </div>

            <div v-if="showAllTrack">
                <v-list-tile @click="">
                <v-list-tile-content>
                    <v-list-tile-title>{{detail.title}}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action style="margin-right: 1%">
               
                </v-list-tile-action>
                    {{detail.time}} 
                </v-list-tile>
                <v-divider ></v-divider>

                <div v-if="index == videoDetail.length - 1">
                <v-list-tile>
                <v-list-tile-content>
                    <v-btn  style="margin: 0 auto;" @click="controlTrack">{{ viewBtn }}</v-btn>
                </v-list-tile-content>
                </v-list-tile>
               
            </div>
            </div>


        </div>

          </v-list>
    


        </v-card>         
        </b-col>
        </b-row>
        </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            viewBtn: 'View All Track',
            showAllTrack: false,
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
              },
              {
                time: '14.49',
                title: '5.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              },
              {
                time: '14.49',
                title: '6.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              },
              {
                time: '14.49',
                title: '7.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              },
              {
                time: '14.49',
                title: '9.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              },
              {
                time: '14.49',
                title: '10.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              },
              {
                time: '14.49',
                title: '11.The SecretSauce Ep.3 แนะนำ \'สุริยา หีบศพ\' กิจการที่ไม่ได้หากินกับคนตาย แต่เน้นขายให้กับ',
                view: '924'
              }
          ]
        }
    },
    methods: {
        gotoVideoDetail(index) {
            this.$router.push('/albumsVideo')
        },
        controlTrack(){
            if(this.$data.viewBtn == "View All Track")
                this.$data.viewBtn = "Hide"
            else
                this.$data.viewBtn = "View All Track"

            if(this.$data.showAllTrack == false)
                this.$data.showAllTrack = !this.$data.showAllTrack
            else
                this.$data.showAllTrack = !this.$data.showAllTrack

                console.log(this.$data.showAllTrack)
            
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
