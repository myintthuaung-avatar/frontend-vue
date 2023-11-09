<template>
    <div>
        <v-col cols="12" md="12">
            <v-row dense>
                <v-col cols="12" md="8">
                    <v-card>
                        <v-card-title style="color:indigo"> Main News</v-card-title>
                        <v-carousel :show-arrows="false" height="420">
                            <v-carousel-item
                              v-for="(item,i) in items"
                              :key="i"
                              :src="item.src"
                            ></v-carousel-item>
                          </v-carousel>
                          <v-card>
                            <v-card-title>Signing ceremony held in Nay Pyi Taw commemorating the 73rd Anniversary of the Establishment of Diplomatic Relations</v-card-title>
                            <v-card-text>
                                Signing ceremony held in Nay Pyi Taw commemorating the 73rd Anniversary of the Establishment of Diplomatic Relations between the Republic of the Union of Myanmar and the People’s Republic of China (8-6-2023)
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card-title style="color:indigo"> Trending News</v-card-title>
                    <v-card>
                        <v-card-text><v-icon style="color:blue">mdi-newspaper</v-icon><v-spacer></v-spacer>၂၀၂၃ ခုနှစ်၊ မေလ ၁၄ ရက်တွင် မြန်မာနိုင်ငံသို့ ဝင်ရောက်ခဲ့သည့် “မိုခါ”ဆိုင်ကလုန်းမုန်တိုင်းဒဏ်သင့် ဒေသများတွင် ပြန်လည်ထူထောင်ရေးလုပ်ငန်းများ ဆောင်ရွက်ရန်အတွက်</v-card-text>
                    </v-card>
                    <v-card>
                        
                        <v-card-text><v-icon style="color:blue">mdi-newspaper</v-icon><v-spacer></v-spacer>၂၀၂၃ ခုနှစ်၊ မေလ ၁၄ ရက်တွင် မြန်မာနိုင်ငံသို့ ဝင်ရောက်ခဲ့သည့် “မိုခါ”ဆိုင်ကလုန်းမုန်တိုင်းဒဏ်သင့် ဒေသများတွင် ပြန်လည်ထူထောင်ရေးလုပ်ငန်းများ ဆောင်ရွက်ရန်အတွက်</v-card-text>
                    </v-card>
                    <v-card>
                        <v-card-text><v-icon style="color:blue">mdi-newspaper</v-icon><v-spacer></v-spacer>၂၀၂၃ ခုနှစ်၊ မေလ ၁၄ ရက်တွင် မြန်မာနိုင်ငံသို့ ဝင်ရောက်ခဲ့သည့် “မိုခါ”ဆိုင်ကလုန်းမုန်တိုင်းဒဏ်သင့် ဒေသများတွင် ပြန်လည်ထူထောင်ရေးလုပ်ငန်းများ ဆောင်ရွက်ရန်အတွက်</v-card-text>
                    </v-card>
                    <v-card>
                        <v-card-text><v-icon style="color:blue">mdi-newspaper</v-icon><v-spacer></v-spacer>၂၀၂၃ ခုနှစ်၊ မေလ ၁၄ ရက်တွင် မြန်မာနိုင်ငံသို့ ဝင်ရောက်ခဲ့သည့် “မိုခါ”ဆိုင်ကလုန်းမုန်တိုင်းဒဏ်သင့် ဒေသများတွင် ပြန်လည်ထူထောင်ရေးလုပ်ငန်းများ ဆောင်ရွက်ရန်အတွက်</v-card-text>
                    </v-card>
                    <v-card>
                        <v-card-text><v-icon style="color:blue">mdi-newspaper</v-icon><v-spacer></v-spacer>၂၀၂၃ ခုနှစ်၊ မေလ ၁၄ ရက်တွင် မြန်မာနိုင်ငံသို့ ဝင်ရောက်ခဲ့သည့် “မိုခါ”ဆိုင်ကလုန်းမုန်တိုင်းဒဏ်သင့် ဒေသများတွင် ပြန်လည်ထူထောင်ရေးလုပ်ငန်းများ ဆောင်ရွက်ရန်အတွက်</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="12">
            <v-row dense>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
            </v-img>
            <v-card-subtitle class="pb-0" style="color:orange">
              Number 10
            </v-card-subtitle>
            <v-card-text class="text--primary">
                <div style="color:blue">Whitehaven Beach</div>
          
                <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
          </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          >
            <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
          </v-img>
      
          <v-card-subtitle class="pb-0" style="color:orange">
            Number 10
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div style="color:blue">Whitehaven Beach</div>
      
            <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
          >
            <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
          </v-img>
      
          <v-card-subtitle class="pb-0" style="color:orange">
            Number 10
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div style="color:blue">Whitehaven Beach</div>
      
            <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
         
        </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/plane.jpg">
            <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
          </v-img>
      
          <v-card-subtitle class="pb-0" style="color:orange">
            Number 10
          </v-card-subtitle>
      
          <v-card-text class="text--primary">
            <div style="color:blue">Whitehaven Beach</div>
      
            <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/plane.jpg">
            <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
          </v-img>
      
          <v-card-subtitle class="pb-0" style="color:orange">
            Number 10
          </v-card-subtitle>
      
          <v-card-text class="text--primary">
            <div style="color:blue">Whitehaven Beach</div>
      
            <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
          >
            <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
          </v-img>
      
          <v-card-subtitle class="pb-0" style="color:orange">
            Number 10
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div style="color:blue">Whitehaven Beach</div>
      
            <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
         
        </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          >
            <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
          </v-img>
      
          <v-card-subtitle class="pb-0" style="color:orange">
            Number 10
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div style="color:blue">Whitehaven Beach</div>
      
            <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-card-subtitle>Top 10 Australian beaches</v-card-subtitle>
            </v-img>
            <v-card-subtitle class="pb-0" style="color:orange">
              Number 10
            </v-card-subtitle>
            <v-card-text class="text--primary">
                <div style="color:blue">Whitehaven Beach</div>
          
                <div style="color:blue">Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
          </v-card>
            </v-col>
        </v-row>
       
        </v-col>
    </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
        date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>