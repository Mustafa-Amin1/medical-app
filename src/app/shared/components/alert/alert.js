import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {
    
    name:'alert',
    data () {
        return {
            // deleteStatue:false
        }
    },
    props: {
        deleteStatue:Boolean
    },
    components: {
        'kendo-notification': Notification
      },
       watch: {
        deleteStatue : function(val) {
            console.log(val);
            if(val == true) {
            console.log(val);
            this.popupNotificationWidget.show('User Deleted !!', 'success');   
            }
        },
    },
        mounted: function () {
            this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();        }
}