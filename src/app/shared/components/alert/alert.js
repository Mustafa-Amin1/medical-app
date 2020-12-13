// Notes:
// to use alert 
// set watch Parent actionStatue to run notification (must be boolean)

//must define in data function two value
// 1 - notificationStatueValue to set notification statue like warning or success etc...
// 2 - notificationMessageValue to set notification message



import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {

    name: 'alert',
    props: {
        actionStatue: Boolean,
        notificationStatue: '',
        notificationMsg: ''
    },
    components: {
        'kendo-notification': Notification
    },
    watch: {
        actionStatue: function (val) {
            if (val == true) {
                console.log(val);
                this.popupNotificationWidget.show(this.notificationMsg, this.notificationStatue);
            }
        },
        notificationStatue: function (val) {
            if (val) {
                this.notificationStatue = val
            }
        },
        notificationMsg: function (val) {
            if (val) {
                this.notificationStatue = val
            }
        }
    },
    mounted: function () {
        this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
    }
}