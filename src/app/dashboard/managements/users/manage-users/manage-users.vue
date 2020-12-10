<template>
  <div id="manage-users">
    <p>{{ getAlert }}</p>

    <div class="container-fluid">
        <kendo-datasource ref="datasource1"
                      :offline-storage="'offline-kendo-demo'"
                      :transport-read-url="'https://10.24.100.240:44351/odata/students'"
                      :transport-read-data-type="'jsonp'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers/Update'"
                      :transport-update-data-type="'odata'"
                      :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers/Destroy'"
                      :transport-destroy-data-type="'odata'"
                      :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers/Create'"
                      :transport-create-data-type="'odata'"
                      :transport-parameter-map="parameterMap"
                      :schema-model-id="'Id'"
                      :schema-model-fields="schemaModelFields"
                      :batch='true'
                      :page-size='20'>
    </kendo-datasource>

    <kendo-grid ref="grid"
                :height="600"
                :data-source-ref="'datasource1'"
                :pageable-refresh='true'
                :editable="'inline'"
                :toolbar="['create']"
                :selectable="'multiple row'">
        <kendo-grid-column :field="'Name'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Email'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <!-- <kendo-grid-column :field="'Phone'"
                           :width="120"></kendo-grid-column> -->
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="200"></kendo-grid-column>
    </kendo-grid>
    </div>
  </div>
</template>
<script src="./manage-users.js"></script>

<style lang="scss" scoped>
// @import "";
.k-window-content {
  overflow: hidden !important;
}
</style>
