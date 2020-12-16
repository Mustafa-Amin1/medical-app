// import $, { data } from "jquery";
import $ from "jquery";

//kendo libraries
import { Grid, GridColumn } from "@progress/kendo-grid-vue-wrapper";
import { Window } from "@progress/kendo-window-vue-wrapper";
import { DataSource } from "@progress/kendo-datasource-vue-wrapper";
import { ToolBar, ToolBarItem } from "@progress/kendo-buttons-vue-wrapper";
// api data
import axios from "axios";

//delete confirmation component
import DeleteConfirmation from '@/app/shared/components/delete-confirmation/delete-confirmation.vue'
import ConfirmPopup from '@/app/shared/components/delete-confirmation/delete-confirmation.vue'

import { ValidationProvider, ValidationObserver } from "vee-validate";

// child compopnents
import paitentFormPopup from '../../../../../app/shared/components/forms/patient-form/patient-form.vue'

//state
// import { mapGetters, mapState } from "vuex";
export default {
  components: {
    "kendo-grid": Grid,
    "grid-column": GridColumn,
    datasource: DataSource,
    window: Window,
    toolbar: ToolBar,
    "toolbar-item": ToolBarItem,
    ValidationProvider,
    ValidationObserver,
    "app-paitent-form-popup": paitentFormPopup,
    'delete-confirmation': DeleteConfirmation,
    ConfirmPopup
  },
  data: function () {

    return {
      //delete
      showDeleteConfirmation: false,
      isDeleted: false,
      rowDeleted: '',
      notificationStatueValue: 'success',
      notificationMessageValue: 'Doctor is Deleted !!',
      products: [],
      categories: [],
      actions: ["Minimize ", "Maximize", "Close"],
      //view mode
      objData:{},
      //when window close
      windowClosed:false,
      // isViewMode:false
    };
  },
  created() {
    axios.get("http://localhost:3000/products").then((response) => {
      console.log(response.data);
      return (this.products = response.data);
    });
    axios.get("http://localhost:3000/categories").then((response) => {
      console.log(response.data);
      return (this.categories = response.data);
    });
    // window pop up keyboar navigations
    var vm = this;
    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.keyCode == 87) {
        $(vm.$refs.window1.$el).focus();
      }
    });
  },
  mounted: function () {
    this.$refs.grid.kendoWidget().dataSource.online(false);
  },
  methods: {
    //show doctor information
    showDetails: function (e) {
      e.preventDefault();

      var grid = this.$refs.grid.kendoWidget();
      var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
      //show window
      this.objData = dataItem
      this.$store.state.isViewMode = true
      setTimeout(() => {
      this.patientFormWindow()
      }, 50);
      console.log(dataItem);
    },
    onClose : function() {
      this.$store.state.isViewMode = false
      this.$store.state.isWindowClosed = true
      // this.windowClosed=true
    },
    // patient form
    patientFormWindow: function () {
      let window = this.$refs.patientFormWindow.kendoWidget();
      window.center().open();
    },
    //patient info
    // viewDetails: function () {
    //   var window = this.$refs.viewMode.kendoWidget();
    //   window.center().open();
    // },
    DeleteUser: function (e) {
      e.preventDefault();
      //show confirmation modal

      this.showDeleteConfirmation = true
      //get row content
      let grid = this.$refs.grid.kendoWidget();
      let targetRow = $(e.currentTarget).closest("tr")
      let rowData = grid.dataItem(targetRow);
      console.log(rowData.ProductName);
      this.rowDeleted = targetRow
      // this.confirmData.notificationStatueValue='success'
      // this.confirmData.notificationMessageValue='Doctor is Deleted !!'

    },
    confirmationValuee: function (params) {
      this.isDeleted = params;
      console.log(this.isDeleted);
    }
  },
  computed: {
  },
  watch: {
    Data: function () {
      return (this.Data = this.$store.getters["products"]);
    },
    isDeleted: function (val) {
      if (val) {
        this.showDeleteConfirmation = false
        this.rowDeleted.remove()
        this.rowDeleted = ''
        this.isDeleted = false
        console.log('deleted');
      } else if (val == false) {
        this.showDeleteConfirmation = false
        console.log('delete is cancelled');
      }
    }
  },
};












// export default {
// 	name: 'App',
// 	data() {
// 		return {}
// 	},
// 	components: {
// 	}, 
// 	methods: {
//         addtostore(){
//             debugger
//             this.$store.commit('UpdateCPG', {  CPGId: 254 });
//             this.$router.push({'path': '/dashboard/new-doctor'})
//         }
// 	},
// 	created() {
// 	},
// }