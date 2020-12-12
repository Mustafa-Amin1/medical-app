import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';
import kendo from '@progress/kendo-ui'
import $ from 'jquery' ;

import DeleteConfirmation from '@/app/shared/components/delete-confirmation/delete-confirmation.vue'
import Alert from '@/app/shared/components/alert/alert.vue'

export default {
  components: {
    'kendo-grid': Grid,
    'kendo-grid-column': GridColumn,
    'kendo-datasource': KendoDataSource,
    'delete-confirmation': DeleteConfirmation,
    'notification':Alert
  },
  data() {
    return {
      //delete
      showDeleteConfirmation:false,
      isDeleted:null,
      rowDeleted:'',
      isHello:false,

      schemaModelFields: {
        ProductID: { editable: false, nullable: true },
        ProductName: {
          validation: {
            required: true,
            productnamevalidation: function (input) {
              if (input.is("[name='ProductName']") && input.val() != "") {
                input.attr("data-productnamevalidation-msg", "Product Name should start with capital letter");
                return /^[A-Z]/.test(input.val());
              }

              return true;
            }
          }
        },
        UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
        Discontinued: { type: "boolean" },
        UnitsInStock: { type: "number", validation: { min: 0, required: true } }
      }
    }
  },
  methods: {
    parameterMap: function (options, operation) {
      //*** options.models = object with new update
      //*** options == object contains array of models
      if (operation !== 'read' && options.models) {
        console.log(options)
        console.log(operation)
        return { models: kendo.stringify(options.models) }
      }
    },
    DeleteUser: function(e) {
      e.preventDefault();
      //show confirmation modal
      this.showDeleteConfirmation = true
      //get row content
      let grid = this.$refs.grid.kendoWidget();
      let targetRow = $(e.currentTarget).closest("tr")
      let rowData = grid.dataItem(targetRow);
      console.log(rowData.ProductName);
      this.rowDeleted = targetRow

  },
  confirmationValuee: function(params) {
    this.isDeleted = params;
    console.log(this.isDeleted);
  }
  },
  watch: {
    isDeleted: function (val) {
      if(val){
        this.showDeleteConfirmation = false
        this.rowDeleted.remove()
        this.rowDeleted=''
        this.isHello = true
        console.log('deleted');
      }else if (val == false){
        this.showDeleteConfirmation = false
        console.log('delete is cancelled');
      }
    }
  }
}