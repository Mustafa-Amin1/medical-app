<template>
    <div id="doctors">
      <!-- popup window -->
      <window
        ref="patientFormWindow"
        :width="'auto'"
        :height="'800'"
        :title="'Patient Registeration'"
        style="display: none"
        :actions="actions"
        :modal="true"
         v-on:close="onClose"
      >
        <!-- popup component -->
        <app-paitent-form-popup :objData="objData" :windowClosed="windowClosed" ></app-paitent-form-popup>
      </window>
      <!-- view model -->
      <!-- <window
        ref="viewMode"
        :width="'auto'"
        :height="'800'"
        :title="'Patient Information'"
        style="display: none"
        :actions="actions"
        :modal="true"
        v-on:close="onClose"
      > -->
        <!-- popup component -->
        <!-- <app-paitent-form-popup :objData="objData"></app-paitent-form-popup>
      </window> -->

      <datasource ref="datasource" :data="products" :page-size="20" :batch="true">
      </datasource>
      <toolbar @click="patientFormWindow">
        <toolbar-item type="button" text="New Client" icon="add"></toolbar-item>
      </toolbar>
      <kendo-grid
        ref="grid"
        :offline-storage="'offline-kendo-demo'"
        :data-source-ref="'datasource'"
        :editable="'popup'"
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

        <grid-column field="Name" title="Product Name" :width="60"></grid-column>
        <grid-column
          field="Price"
          title="Unit Price"
          :width="80"
          :format="'{0:c}'"
        ></grid-column>
        <grid-column
          field="InventoryCount"
          title="Units In Stock"
          :width="50"
        ></grid-column>
        <grid-column
          field="CategoryID"
          title="Category"
          :width="50"
          :values="categories"
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
            { text: 'Delete', click: DeleteUser },
            { text: 'View Details', click: showDetails },
          ]"
          title=" Actions"
          :width="100"
        ></grid-column>
      </kendo-grid>
      <delete-confirmation :deleteBtnClick="showDeleteConfirmation" @child-delete-confirmation-value-emitter="confirmationValuee" :notificationStatueValue="notificationStatueValue" :notificationMessageValue="notificationMessageValue"></delete-confirmation>
    </div>
</template>
<script src="./doctors.js"></script>
<style lang="scss" scoped>

</style>