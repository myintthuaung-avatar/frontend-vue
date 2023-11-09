<template>
  <div>
   
   <router-view ref="rv"></router-view>

   <div v-show="isExactActive">
      <v-col cols="12" md="12">
            <v-card>
              <v-col cols="12" md="12">
                <v-row dense>
                  <Entry v-model="ShowEntry" ref="EntryModal"/>
                    <v-col cols="12" md="12"  class="d-flex align-center">
                      <strong class=""><span>Password List</span></strong>
                      <v-tooltip bottom color="green">
                        <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined dark small class="ml-5" color="green" v-bind="attrs" v-on="on" @click="NewItem()">
                        <v-icon color="green">mdi-plus</v-icon>
                      </v-btn>
                      </template>
                      <span>create new</span>
                      </v-tooltip>
                  </v-col>  
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
            
            <!-- <v-card class="mt-2"> -->
              
              <div class="mt-4">
               
              <DataTableHelper ref="DataTable" :headers="getTableHeaders" :dataLoader1="desserts">
                <template v-slot:item="row">
                  <tr>
                    <td >
                      <v-tooltip bottom color="#030BFF">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn @click="aa"  v-bind="attrs" v-on="on" small icon color="#030BFF" class="mr-2"><v-icon>mdi-pen</v-icon></v-btn>
                        </template>
                        <span>edit</span>
                      </v-tooltip>
                      <v-tooltip bottom color="#FF0303">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn  @click="aa" small v-bind="attrs" v-on="on" icon color="#FF0303" class="mr-2"><v-icon>mdi-delete-forever</v-icon></v-btn>
                        </template>
                        <span>delete</span>
                      </v-tooltip>
                    </td>
                    <td>{{ row.item.d1 }}</td>
                    <td>{{ row.item.d2 }}</td>
                  </tr>
                </template>
              </DataTableHelper>
            </div>
            </v-card>
          <!-- </v-col>
        </v-card> -->
      </v-col>

    </div>
    
  </div>
</template>

<script>
import DataTableHelper from "../base/DatatableHelper.vue";
import Entry from "../Settings/Entry.vue";
export default {
  components: {
    DataTableHelper, Entry
  },
  data() {
    return {
      items:[],
      isExactActive: true,
      opened:false,
        ShowEntry:false,
      headers: [
        { text: "Actions",value:"edit" , sortable: false, width: 100 },
        { text: "Book Name", value: "d1", width: 200 },
        { text: "Author Name", value: "d2", width: 200 },
      ],
      desserts: [
        {
          d1: "RedGantGaw",
          d2: "MinLu",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "MaEainKan",
          d2: "Khin Khin Htoo",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "RedGantGaw",
          d2: "MinLu",
        },
        {
          d1: "MaEainKan",
          d2: "Khin Khin Htoo",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "RedGantGaw",
          d2: "MinLu",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "MaEainKan",
          d2: "Khin Khin Htoo",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "RedGantGaw",
          d2: "MinLu",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "MaEainKan",
          d2: "Khin Khin Htoo",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "RedGantGaw",
          d2: "MinLu",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "MaEainKan",
          d2: "Khin Khin Htoo",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "RedGantGaw",
          d2: "MinLu",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
        {
          d1: "MaEainKan",
          d2: "Khin Khin Htoo",
          edit:"mdi-pencil-circle",
          delete:"mdi-delete-circle"
        },
      ]
    };
  },
  computed: {
    showActionButtons() {
      return true;
    },
    getTableHeaders() {
      let hideColumns = [];
      if(this.showActionButtons === false) {
          hideColumns.push('actions');
      }
      return this.headers.filter((e)=> {
          return !hideColumns.includes(e.value);
      });
    },
  },
  // updated() {
  //   this.isExactActive = typeof this.$refs.rv === "undefined";
  // },

  // mounted() {
  //   this.isExactActive = typeof this.$refs.rv === "undefined";
  // },
  created() {
    this.$emit("eventname", true);
    this.GetAllData();
    window.console.log(this.GetAllData)
  },
  methods:{
    GetAllData(){
      window.console.log(this.desserts)
      return this.desserts;
      
    },
    NewItem(){
      this.$refs.EntryModal.dialog = true;
      this.ShowEntry = true;
    }
  }
  
};
</script>