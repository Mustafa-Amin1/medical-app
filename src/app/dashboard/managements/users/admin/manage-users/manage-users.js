// import $ from "jquery";

// //kendo libraries
// import { Grid, GridColumn } from "@progress/kendo-grid-vue-wrapper";
// import { Window } from "@progress/kendo-window-vue-wrapper";
// import { DataSource } from "@progress/kendo-datasource-vue-wrapper";
// import { ToolBar, ToolBarItem } from "@progress/kendo-buttons-vue-wrapper";
// // api data
// import axios from "axios";

// // child compopnents
// import paitentFormPopup from './popups/patient-form-popup'
// export default {
//   components: {
//     "kendo-grid": Grid,
//     "grid-column": GridColumn,
//     datasource: DataSource,
//     window: Window,
//     toolbar: ToolBar,
//     "toolbar-item": ToolBarItem,
//     "app-paitent-form-popup": paitentFormPopup
//   },
//   data: function () {
//     return {
//       products: [],
//       categories: [],
//       actions: ["minimize ", "Maximize", "Close"],
//     };
//   },
//   created() {
//     axios.get("http://localhost:3000/products").then((response) => {
//       console.log(response.data);
//       return (this.products = response.data);
//     });
//     axios.get("http://localhost:3000/categories").then((response) => {
//       console.log(response.data);
//       return (this.categories = response.data);
//     });
//     // window pop up keyboar navigations
//     var vm = this;
//     window.addEventListener("keydown", (e) => {
//       if (e.altKey && e.keyCode == 87) {
//         $(vm.$refs.window1.$el).focus();
//       }
//     });
//   },
//   mounted: function () {
//     this.$refs.grid.kendoWidget().dataSource.online(false);
//   },
//   methods: {
//     showDetails: function (e) {
//       e.preventDefault();

//       var grid = this.$refs.grid.kendoWidget();
//       var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));

//       alert(
//         '"' + dataItem.Name + '" details are about to be logged on the console.'
//       );
//       console.log(dataItem);
//     },
//     onClick: function () {
//       var window = this.$refs.windowRef.kendoWidget();
//       window.center().open();
//     },
//   },
//   computed: {},
//   watch: {
//     Data: function () {
//       return (this.Data = this.$store.getters["products"]);
//     },
//   },
// };