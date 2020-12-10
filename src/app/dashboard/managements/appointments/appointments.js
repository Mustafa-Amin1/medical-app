import { SchedulerDataSource } from '@progress/kendo-datasource-vue-wrapper';
import { Scheduler, SchedulerResource, SchedulerView } from '@progress/kendo-scheduler-vue-wrapper';
import kendo from '@progress/kendo-ui' 
export default {
	components: {
		'scheduler': Scheduler,
		'scheduler-view': SchedulerView,
		'scheduler-resource': SchedulerResource,
		'schedulerdatasource': SchedulerDataSource
    },
	data: function () {
		return {
			date: new Date('2013/6/13'),
			startTime: new Date('2013/6/13 07:00 AM'),
			resourceDataSource: [
				{ text: 'Alex', value: 1, color: '#f8a398' },
				{ text: 'Bob', value: 2, color: '#51a0ed' },
				{ text: 'Charlie', value: 3, color: '#56ca85' }
			],
			fields: {
				taskId: { from: 'TaskID', type: 'number' },
				title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
				start: { type: 'date', from: 'Start' },
				end: { type: 'date', from: 'End' },
				startTimezone: { from: 'StartTimezone' },
				endTimezone: { from: 'EndTimezone' },
				description: { from: 'Description' },
				recurrenceId: { from: 'RecurrenceID' },
				recurrenceRule: { from: 'RecurrenceRule' },
				recurrenceException: { from: 'RecurrenceException' },
				ownerId: { from: 'OwnerID', defaultValue: 1 },
				isAllDay: { type: 'boolean', from: 'IsAllDay' }
			},
			filters: [
				{ field: 'ownerId', operator: 'eq', value: 1 },
				{ field: 'ownerId', operator: 'eq', value: 2 }
			]
		}
	},
	methods: {
		parameterMap: function (options, operation) {
			if (operation !== 'read' && options.models) {
				return {models: kendo.stringify(options.models)}
			}
		},
		change: function () {
			var checked = kendo.jQuery.map(kendo.jQuery('#people :checked'), function (checkbox) {
				return parseInt(kendo.jQuery(checkbox).val())
			})
			var scheduler = kendo.jQuery('#scheduler').data('kendoScheduler')
			scheduler.dataSource.filter({
				operator: function (task) {
					return kendo.jQuery.inArray(task.ownerId, checked) >= 0
				}
			})
		}
	}
}