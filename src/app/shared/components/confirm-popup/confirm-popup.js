import { EventBus } from '@/app/shared/services/event-bus.js';

export default {
    name: "popup",
    props: [
        'confirmdata',
        'suffix',
        'styleBorder'
    ],
    methods: {
        confirmAction(e) {
            EventBus.$emit(this.suffix && this.suffix != null && this.suffix != undefined && this.suffix != '' ? `confirmed-action${this.suffix}` : `confirmed-action`, this.confirmdata);
            console.log(e);
            console.log(this.confirmdata.id) //prints out an empty string
            EventBus.$emit('HideLoader');
        },
        canceled() {
            EventBus.$emit(this.suffix && this.suffix != null && this.suffix != undefined && this.suffix != '' ? `canceled${this.suffix}` : `canceled`, this.confirmdata);
            EventBus.$emit('HideLoader');

        }
    },
    created: function () {


        //console.log(confirmdata.cancelBtnText, "sabryConfirm") //prints out an empty string
    },



   
}