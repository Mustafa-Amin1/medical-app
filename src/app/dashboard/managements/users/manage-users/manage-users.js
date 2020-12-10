
//kendo libraries
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';
// import dffsdf from '../../../../../../src/myData.js'
export default {
    data: function () {
        return {
          schemaModelFields: {
            Id: { type: 'number', editable: false },
            Name: { validation: { required: true } },
            Email: { type: 'email', validation: { required: true, min: 1 } },
            // Phone: { type: 'number', validation: { min: 0, required: true } }
        }
        };
      },
      methods:{
        parameterMap: function(options, operation) {
          if (operation !== 'read' && options.models) {
              // return { models: kendo.stringify(options.models) };
          }
      }
      },
      computed:{
        getAlert() {
          return this.$store.getters.getAlert
        },
      },
    components: {
      'kendo-grid': Grid,
      'kendo-grid-column': GridColumn,
      'kendo-datasource': KendoDataSource

      },
}