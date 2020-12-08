import $ from 'jquery';

//kendo libraries
import { Grid, GridColumn } from "@progress/kendo-grid-vue-wrapper";
import { DataSource } from "@progress/kendo-datasource-vue-wrapper";
import { ToolBar, ToolBarItem } from "@progress/kendo-buttons-vue-wrapper";

import axios from "axios";

export default {
    data: function () {
        return {
          products: [],
          StatusDS: '',
          Gender: ["Male", "Female"],
        };
      },
      methods:{
        showDetails: function (e) {
          e.preventDefault();
    
          var grid = this.$refs.grid.kendoWidget();
          var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
    
          alert(
            '"' + dataItem.Name + '" details are about to be logged on the console.'
          );
          console.log(dataItem);
        },
      },
      computed:{
        getAlert() {
          return this.$store.getters.getAlert
        }
      },
      created() {
        axios.get("http://localhost:3000/users").then((response) => {
          // console.log(response.data);
          return (this.products = response.data);
        });
      },
    components: {
      "kendo-grid": Grid,
      "grid-column": GridColumn,
      datasource: DataSource,
      toolbar: ToolBar,
      "toolbar-item": ToolBarItem,

      },
}