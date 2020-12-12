export default {
    name: 'delete-confirmation',
    data() {
        return {
            //confirmation value
            confirmationValue: Boolean
        }
    },
    props: {
        // show delete modal
        deleteBtnClick: Boolean
    },
    watch: {

        deleteBtnClick: function (val) {
            this.confirmationValue = null
            if (val) {
                this.$bvModal.msgBoxConfirm('Please confirm that you want to delete .', {
                    title: 'Delete Confirmation',
                    size: 'md',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    okTitle: 'Delete',
                    cancelTitle: 'Cancel',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: false
                })
                    .then(value => {
                        this.confirmationValue = value
                        console.log(this.confirmationValue);
                    })
                    .catch(err => {
                        alert('delete confirmation function error')
                        return err
                        // An error occurred
                    })
            }
        },
        confirmationValue: function (val) {
            // Emit this confirmationValue to the parents component
            this.$emit("child-delete-confirmation-value-emitter", val);
        }


    }
}