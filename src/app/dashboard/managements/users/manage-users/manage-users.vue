<template>
  <div id="manage-users">
    <p>{{ getAlert }}</p>
    <div class="container-fluid">
      <datasource
        ref="datasource"
        :data="products"
        :page-size="20"
        :batch="true"
      >
      </datasource>
      <!-- <toolbar @click="onClick">
        <toolbar-item type="button" text="New Client" icon="add"></toolbar-item>
      </toolbar> -->
      <kendo-grid
        ref="grid"
        :offline-storage="'offline-kendo-demo'"
        :data-source-ref="'datasource'"
        :editable="'inline'"
        :column-menu="true"
        :filterable="true"
        :pageable="true"
        :pageable-page-sizes="[5, 10, 20, 30]"
        :pageable-always-visible="false"
        :sortable="true"
        :selectable="'multiple row'"
        :groupable="true"
        :scrollable-endless="true"
        :height="700"
      >
        <grid-column :selectable="true" :width="20"></grid-column>

        <grid-column
          field="id"
          title="Product Name"
          :width="60"
        ></grid-column>
        <grid-column
          field="name"
          title="Unit Price"
          :width="80"
          :format="'{0:c}'"
        ></grid-column>
        <grid-column
          field="email"
          title="Units In Stock"
          :width="50"
        ></grid-column>
        <grid-column
          field="gender"
          title="Gender"
          :width="50"
          :values="Gender"
        ></grid-column>
        <!-- custom column -->

        <!-- <kendo-grid-column
        :command="{ text: 'View Details', click: showDetails }"
        :title="'&nbsp;'"
        :width="50"
      ></kendo-grid-column> -->

        <grid-column
          :command="[
            'edit',
            'delete',
            { text: 'View Details', click: showDetails },
          ]"
          title=" Actions"
          :width="100"
        ></grid-column>
      </kendo-grid>
    </div>
  </div>
</template>
<script src="./manage-users.js"></script>

<style lang="scss" scoped>
// @import "../../theme/users.scss";
.k-window-content {
  overflow: hidden !important;
}
</style>
