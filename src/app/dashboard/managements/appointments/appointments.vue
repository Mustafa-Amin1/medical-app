<template>
    <div id="appointments">
       <div>
	<schedulerdatasource ref="schedulerdatasource1"
							   :batch="true"
							   transport-read-url="https://demos.telerik.com/kendo-ui/service/tasks"
							   transport-read-data-type="jsonp"
							   transport-update-url="https://demos.telerik.com/kendo-ui/service/tasks/update"
							   transport-update-data-type="jsonp"
							   transport-create-url="https://demos.telerik.com/kendo-ui/service/tasks/create"
							   transport-create-data-type="jsonp"
							   transport-destroy-url="https://demos.telerik.com/kendo-ui/service/tasks/destroy"
							   transport-destroy-data-type="jsonp"
							   :transport-parameter-map="parameterMap"
							   schema-model-id="taskId"
							   :schema-model-fields="fields"
							   :filter-logic="'or'"
							   :filter-filters="filters">
    </schedulerdatasource>

    <scheduler data-source-ref="schedulerdatasource1"
					 :date="date"
					 :startTime="startTime"
					 :height="600"
					 :timezone="'Etc/UTC'">
		<scheduler-view :type="'day'"></scheduler-view>
		<scheduler-view :type="'workWeek'" :selected="true"></scheduler-view>
		<scheduler-view :type="'week'"></scheduler-view>
		<scheduler-view :type="'month'"></scheduler-view>
		<scheduler-view :type="'agenda'"></scheduler-view>
		<scheduler-resource :field="'ownerId'" :title="'Owner'" :data-source="resourceDataSource"></scheduler-resource>
	</scheduler>
</div><div>
	<schedulerdatasource ref="schedulerdatasource1"
							   :batch="true"
							   transport-read-url="https://demos.telerik.com/kendo-ui/service/tasks"
							   transport-read-data-type="jsonp"
							   transport-update-url="https://demos.telerik.com/kendo-ui/service/tasks/update"
							   transport-update-data-type="jsonp"
							   transport-create-url="https://demos.telerik.com/kendo-ui/service/tasks/create"
							   transport-create-data-type="jsonp"
							   transport-destroy-url="https://demos.telerik.com/kendo-ui/service/tasks/destroy"
							   transport-destroy-data-type="jsonp"
							   :transport-parameter-map="parameterMap"
							   schema-model-id="taskId"
							   :schema-model-fields="fields"
							   :filter-logic="'or'"
							   :filter-filters="filters">
    </schedulerdatasource>

    <scheduler data-source-ref="schedulerdatasource1"
					 :date="date"
					 :startTime="startTime"
					 :height="600"
					 :timezone="'Etc/UTC'">
		<scheduler-view :type="'day'"></scheduler-view>
		<scheduler-view :type="'workWeek'" :selected="true"></scheduler-view>
		<scheduler-view :type="'week'"></scheduler-view>
		<scheduler-view :type="'month'"></scheduler-view>
		<scheduler-view :type="'agenda'"></scheduler-view>
		<scheduler-resource :field="'ownerId'" :title="'Owner'" :data-source="resourceDataSource"></scheduler-resource>
	</scheduler>
</div>
    </div>
</template>
<script src="./appointments.js"></script>
<style lang="scss" scoped>

</style>