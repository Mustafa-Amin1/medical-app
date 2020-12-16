<template>
  <div id="patients">
    <ConfirmPopup v-bind:confirmdata="confirmdata" />
    <kendo-tooltip
      :filter="'tr:not(.k-grid-edit-row) td:not(.k-command-cell)'"
      :position="'top'"
      :width="250"
      :content="getTooltipTilte"
    >
      <kendo-tooltip
        ref="kTooltip"
        id="agglomerations"
        :filter="'td a'"
        :position="'top'"
        :content="getTooltipTilte"
      >
        <kendo-grid
          ref="grid"
          :data-source="CPGListDataSource"
          :no-records="{ template: noRecordTemplate }"
          id="CPGListGrid"
          :columns="columns"
          :sortable="true"
          :navigatable="true"
          :pageable-always-visible="true"
          :filterable-extra="false"
          :filterable-mode="'row'"
          :pageable-page-sizes="[5, 10, 20, 30]"
        >
          <!-- @databound="onDataBound" -->

          <div class="k-header k-grid-toolbar">
            <!--Add to grid from external page form-->
            <button
              class="k-button k-button-icontext k-grid-add"
              @click="clickAddRow"
            >
              <span class="k-icon k-i-plus"></span>
            </button>
          </div>
        </kendo-grid>
      </kendo-tooltip>
    </kendo-tooltip>
<kendo-notification :autoHideAfter="hideNotification" ref="popupNotificationSave"></kendo-notification>
  </div>
</template>
<script src="./patient-list.js"></script>
<style lang="scss" scoped>
</style>