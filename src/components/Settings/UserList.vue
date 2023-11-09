<template>
    <div>
      <v-col cols="12" md="12">
      <v-card>
        <v-col cols="12" md="12">
          <v-row dense>
          <Entry v-model="ShowEntry" ref="EntryModal"/>
              <strong class=""><span>User List</span></strong>
              <v-tooltip bottom color="green">
                <template v-slot:activator="{ on, attrs }">
              <v-btn outlined dark small color="green"  v-bind="attrs" v-on="on" class="ml-5" @click="NewItem()">
                <v-icon color="#green">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>create new</span>
            </v-tooltip>
        <!-- </v-col> -->
        <v-col cols="12" md="12" class="mt-2">
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
        <!-- </v-col> -->
            
          </v-col>
         
          <!-- <div class="mt-4"> -->
            <v-col cols="12" md="12">
            <DataTableHelper ref="DataTable" :headers="getTableHeaders" :dataLoader1="desserts">
              <template v-slot:item="row">
                <tr>
                  <td >
                    <v-tooltip bottom color="grey darken-4">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="aa"  v-bind="attrs" v-on="on" small icon color="#030BFF" ><v-icon>mdi-pen</v-icon></v-btn>
                      </template>
                      <span>edit</span>
                    </v-tooltip>
                    <v-tooltip bottom color="grey darken-4">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn  @click="aa" small v-bind="attrs" v-on="on" icon color="#FF0303" ><v-icon>mdi-delete-forever</v-icon></v-btn>
                      </template>
                      <span>delete</span>
                    </v-tooltip>
                  </td>
                  <td>{{ row.item.name }}</td>
                  <td>{{ row.item.calories }}</td>
                  <td>{{ row.item.carbs }}</td>
                  <td>{{ row.item.protein }}</td>
                  <td>{{ row.item.iron }}</td>
                </tr>
              </template>
            </DataTableHelper>
            </v-col>
          </v-row>
          </v-col>
        </v-card>
      </v-col>
    </div>
</template>
<script>
import DataTableHelper from '../base/DatatableHelper.vue'
import Entry from '../Settings/UserEntry.vue'
  export default {
    data () {
      return {
        opened:false,
        ShowEntry:false,
        headers: [
          { text: 'Action', value: '', color:'blue' },
          { text: 'Name', value: 'calories' },
          { text: 'Father Name', value: 'fat' },
          { text: 'NRC', value: 'carbs' },
          { text: 'Address', value: 'protein' },
          { text: 'Education', value: 'iron' },
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
    components:{
      DataTableHelper, Entry
    },
    created() {},
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
  mounted: {},
  methods: {
    format(date) {
      date = new Date(date);
      const day = `${date.getUTCDate()}`.padStart(2, "0");
      const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    },
    NewItem(){
      this.$refs.EntryModal.dialog = true;
      this.ShowEntry = true;
    }
  },
  }
</script>
