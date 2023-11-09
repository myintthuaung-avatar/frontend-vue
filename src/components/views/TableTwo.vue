<template>
    <div>
      
        <v-col cols="12" md="12">
            <v-card>
          <v-col cols="12" md="12">
            <Entry v-model="ShowEntry" ref="EntryModal"/>
            <v-tooltip bottom color="green">
              <template v-slot:activator="{ on, attrs }">
            <v-btn outlined dark small class="mr-5 mt-7" color="green" v-bind="attrs" v-on="on" @click="NewItem()">
              <v-icon color="green">mdi-plus</v-icon>
            </v-btn>
            </template>
            <span>create new</span>
            </v-tooltip>
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="800"
                offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined
          class="mt-7"
            color="blue"
            v-bind="attrs"
            v-on="on">
            Search
          </v-btn>
        </template>
        <v-col cols="12" md="12" style="background-color:whitesmoke;">
        <v-card>
                <v-col cols="12" md="12">
                  <v-row dense>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="aa"
                        outlined
                        dense
                        clearable
                        placeholder="aa ဖြင့်ရှာဖွေရန်"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="aa"
                        outlined
                        dense
                        clearable
                        placeholder="bb ဖြင့်ရှာဖွေရန်"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="aa"
                        outlined
                        dense
                        clearable
                        placeholder="cc ဖြင့်ရှာဖွေရန်"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="aa"
                        outlined
                        dense
                        clearable
                        placeholder="dd ဖြင့်ရှာဖွေရန်"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="text-right mt-n6">
                      <v-tooltip bottom color="blue darken-2">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" outlined dark small v-bind="attrs" v-on="on" @click="NewItem()" class="mr-3">
                            <v-icon color="primary">mdi-search-web</v-icon>
                          </v-btn>
                        </template>
                        <span>search</span>
                      </v-tooltip>
                      <v-tooltip bottom color="orange">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn outlined dark small v-bind="attrs" v-on="on" color="orange"  @click="NewItem()">
                          <v-icon color="orange">mdi-restart</v-icon>
                        </v-btn>
                      </template>
                      <span>restart</span>
                    </v-tooltip>
                    </v-col>
                  </v-row>
                </v-col>
        </v-card>
      </v-col>
              </v-menu>
          </v-col>
          
          <v-col cols="12" md="12">
            <v-data-table theme="white"
              v-model="selected"
              :headers="headers"
              :items="desserts"
              :single-select="singleSelect"
              item-key="name"
              show-select
              loading
                loading-text="Loading... Please wait"
              class="elevation-1"
              fixed-header>
             
        <template v-slot:center>
          
          <v-switch
            v-model="singleSelect"
            label="Single select"
            class="pa-3"
          ></v-switch>
        </template>
            </v-data-table>
          </v-col>
        </v-card>
      </v-col>
    </div>
  </template>
  <script>
  import Entry from "@/components/Settings/Entry.vue"
  export default {
    components: {
     Entry
  },
    data () {
      return {
        singleSelect: false,
        selected: [],
        opened:false,
        ShowEntry:false,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
      }
    },
    created() {
    this.$emit("eventname", true);
    this.GetAllData();
    window.console.log(this.GetAllData)
  },
  methods:{
    GetAllData(){
      //window.console.log(this.desserts)
      return this.desserts;
      
    },
    NewItem(){
      this.$refs.EntryModal.dialog = true;
      this.ShowEntry = true;
    }
  }
  }
</script>