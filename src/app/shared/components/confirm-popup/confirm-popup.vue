<template>

    <b-modal no-close-on-backdrop :id="suffix && suffix != null && suffix != undefined && suffix != '' ? `modal-scoped${suffix}` : `modal-scoped`" scrollable :content-class="{'Error-border': styleBorder == 'errorBorder' ,'Success-border': styleBorder == 'successBorder'  , 'warning-border':true}">
        
        
        <template v-slot:modal-header="{ cancel}">
            <h5 class="d-flex"  v-if="styleBorder != 'successBorder'">
                <span :class="confirmdata.iconName" class="mr-2"></span> {{ confirmdata.headerTitle }}
            </h5>
            <h5 class="d-flex"  v-if="styleBorder == 'successBorder'" >
                <span class="mr-2 fas fa-check-circle"></span> {{ confirmdata.headerTitle }}
            </h5>
           
            <!-- close button action -->
            <b-button size="sm" variant="muted" @click="canceled($event);cancel()">
                x
            </b-button>
        </template>

        <template v-slot:default="{ }">
            <p>{{ confirmdata.messageText }} <span class="h6">{{ confirmdata.itemName }}</span> {{ confirmdata.qmark }}</p>
        </template>

        <template v-slot:modal-footer="{ ok, cancel }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="outline-secondary" @click="canceled($event);cancel()">
                {{ confirmdata.confirmBtnText }}
            </b-button>
            <b-button size="sm" variant="danger" @click="confirmAction($event);ok()" v-if="confirmdata.cancelBtnText">
                {{ confirmdata.cancelBtnText }}
            </b-button>
        </template>
    </b-modal>
</template>

<script src="./confirm-popup.js"></script>

<style lang="scss" scoped>
@import 'theme/confirm-popup.scss';
</style>