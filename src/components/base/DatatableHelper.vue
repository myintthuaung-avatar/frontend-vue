<style scoped>
.v-data-table-header{
  color: #10100F;

}

</style>
<template>
  <v-data-table :loading="loading" loading-text="Loading... Please wait" 
      :headers="headers" 
      :items="datatable.items"
      :footer-props="datatable.footerProps"
      :options="datatable.options"
      :search="search" class="v-data-table-header">
      
      <template v-slot:item="row">
         <slot
        name="item"
        :item="row.item" />
      </template>

  </v-data-table>
</template>

<script>
import DataTable from '../utilities/datatable.js'

export default {

  props: {
    headers: [],
    dataLoader1:[],
    //dataLoader: Function,
    search: null,
  },

  data() {
    return {
      loading: false,
      datatable: new DataTable(),
    };
  },

  mounted() {
    this.LoadData();
  },

  methods: {

    LoadData() {

      this.loading = true;
      this.datatable.items = this.dataLoader1;
      this.loading = false;
      this.dataLoader().then((resp) => {
        alert("ff")
        this.datatable.items = [];
        if(resp.data) {
          this.datatable.items = this.dataLoader1;//resp.data;
        }
        this.loading = false;
      });
    }

  },
  
}
</script>