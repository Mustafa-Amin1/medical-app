import $ from 'jquery';
import localeEn from '../../../locales/en'
import localeAr from '../../../locales/ar'
import { getGridSelectedObj } from '@/app/shared/grid-functionality/grid-utilities.js';

export function testFunc() {
    alert('shared function');
}
export const translation = {
    en: {
        ...localeEn
    },
    ar: {
        ...localeAr
    }
}

const lang = localStorage.getItem('NG_TRANSLATE_LANG_KEY');

export const noRecordTemplate = () => `<div class="norecords-template"><img class="nodata-img" src=${require('@/assets/flat-icons/dashboard/doctor.svg')} /> <div>${translation[lang].Common.NoDataFound}</div>`;
export const noRecordTemplateGreen = () => `<div class="norecords-template"><img class="nodata-img" src=${require('@/assets/flat-icons/dashboard/doctor.svg')} /> <div>${translation[lang].Common.NoDataFound}</div>`;
export const noRecordTemplateGreenYet = () => `<div class="norecords-template"><img class="nodata-img" src=${require('@/assets/flat-icons/dashboard/doctor.svg')} /> <div>${translation[lang].Common.NoDataFoundYet}</div>`;

export const disableAddBtn = (e) => {
    let addBtn = e.sender.element.find(".k-grid-add").get(0);
    addBtn.setAttribute("disabled", true);
}

export const enableAddBtn = function (e) {
    let addBtn = $(".k-grid-add").get(0) || e.sender.element.find(".k-grid-add").get(0);
    addBtn.removeAttribute("disabled");
}


export const customPlaceholder = function (e) {
    let x;
    x = e.container.find("td[data-placeholder]");
    //let astrisk = $(`<span class="asterisk">*<span>`)
    for (let i = 0; i < x.length; i++) {
        let placeholderValue = x[i].getAttribute('data-placeholder');
        let input = x[i].childNodes;
        input[0].setAttribute('placeholder', placeholderValue);
    }
}

export const getTooltipTilte = function (e) {
    document.querySelectorAll('[role="tooltip"]').forEach(tooltipDiv => {
        tooltipDiv.style.visibility = 'hidden'
    });

    let elem = e.target[0];
    if ((elem.offsetWidth < elem.scrollWidth) || elem.classList.contains('k-button')) {
        e.sender.content[0].parentElement.style.visibility = 'visible'
        return e.target.text();
    } else {
        e.sender.content[0].parentElement.style.visibility = 'hidden'
        return ""
    }
}

//export const showPopupNotification = (msg, type) => {
//    this.popupNotificationWidget.show(msg, type);
//};

//export const confirmMsg = (type, toasterType, translatedKeyVal) => {
//    showPopupNotification('<h6>' + toasterType + '</h6><p>' + translatedKeyVal + '</p>', type);
//}

export const disablePaging = function () {

    $(".k-pager-wrap").addClass("k-state-disabled");
    $("[data-role='columnsorter']").addClass("disable-sort");

}

export const enablePaging = function () {
    $(".k-pager-wrap ").removeClass("k-state-disabled");
    $("[data-role='columnsorter']").removeClass("disable-sort");
}

export const disableActionBtn = function (e) {
    e.sender.wrapper.find(".k-command-cell .k-grid-edit ,.k-command-cell .k-grid-showConfirmPopup").addClass("disable-layer").attr("disabled", "disabled");
}

export const enableActionBtn = function (e) {
    e.sender.wrapper.find(".k-command-cell .k-grid-edit ,.k-command-cell .k-grid-showConfirmPopup").removeClass("disable-layer").removeAttr("disabled", "disabled");
}

export const preventFilterAutocomplete = function (e) {
    let filterCells = e.sender.thead.find('.k-filter-row').find('input');
    filterCells.map((idx, cell) => {
        if ($(cell).data('role') == 'autocomplete') {
            let autocomplete = $(cell).data('kendoAutoComplete')
            autocomplete.setOptions({
                suggest: false,
                delay: 0,
                clearButton: false
            })

            autocomplete.bind('open', function (e) {
                e.preventDefault();
            });
        }
    })
}

export const showDeleteConfirmPopup = function (gridSelector, e, screenObj) {
    let rowObj = getGridSelectedObj(gridSelector, e)
    screenObj._bv__modal.show('modal-scoped')
    screenObj.confirmdata.iconName = 'text-danger fas fa-exclamation-triangle';
    screenObj.confirmdata.headerTitle = screenObj.$i18n.t('Common.Alert');
    screenObj.confirmdata.confirmBtnText = screenObj.$i18n.t('Common.No');
    screenObj.confirmdata.cancelBtnText = screenObj.$i18n.t('Common.Yes');
    screenObj.confirmdata.messageText = screenObj.$i18n.t('Common.DeleteMsg');
    screenObj.confirmdata.itemName = localStorage.getItem('NG_TRANSLATE_LANG_KEY') === 'en' ? `"${rowObj.EnName}"` : `${rowObj.ArName}"`;
    screenObj.confirmdata.qmark = screenObj.$i18n.t('Common.QuestionMark');
    screenObj.confirmdata.id = rowObj.ID;
    screenObj.confirmdata.modifiedTs = rowObj.ModifiedTS;
}

//export const customGridCommand = [

//        {
//            name: 'edit',
//            text: { cancel: this.$i18n.t('Common.Cancel'), update: this.$i18n.t('Common.Update') },
//            click: this.clickEditRow,
//            template: `<a role="button" class="k-button k-button-icontext k-grid-edit">${this.$i18n.t('Common.Edit')}<img src=${require('@/assets/svg/edit.svg')} /></a>`
//        },
//        {
//            name: "showConfirmPopup",
//            iconClass: 'fas fa-trash-alt',
//            click: this.showConfirmPopup,
//            template: `<a role="button" class='k-grid-showConfirmPopup k-button k-button-icontext k-grid-delete'>${this.$i18n.t('Common.Delete')}<img src=${require('@/assets/svg/delete.svg')} /></a>`
//        }

//]
// allowDecimal with param to replace directive in grids
export const allowDecimalWithConstraint = function (element, e, allowBeforeDec, allowAfterDec) {
    if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46) {
        e.preventDefault();
    }

    //no dec. point
    if (element.value.indexOf(".") == -1 && element.value.length >= allowBeforeDec && e.keyCode != 46 && e.target.selectionStart >= allowBeforeDec) { // allows only one (.)
        e.preventDefault();
    }

    else if (element.value.indexOf(".") != -1 && e.keyCode == 46) {
        e.preventDefault();
    }

    //has dec. point
    else if (element.value.indexOf(".") != -1) {
        const numbersBeforeDot = e.target.value.split('.')[0];
        const numbersAfterDot = e.target.value.split('.')[1];

        //editing before .  and got to max length
        if (0 <= e.target.selectionStart && e.target.selectionStart <= e.target.value.indexOf(".") && numbersBeforeDot.length >= allowBeforeDec) {
            e.preventDefault();
        }

        //editing after .  and got to max length
        if (e.target.value.indexOf(".") < e.target.selectionStart && e.target.selectionStart <= e.target.value.length && numbersAfterDot.length >= allowAfterDec) {
            e.preventDefault();
        }


    }
}

export const allowIntegersOnly = function (e) {
    if (!(e.keyCode >= 48 && e.keyCode <= 57)) {
        e.preventDefault();
    }
    else {
        return;
    }
}


export const showPopupNotification = function (headerTitle, content, type) {
    this.popupNotificationWidget.show(`<h6>${headerTitle}</h6><p>${content}</p>`, `${type}`);
};

export const enableFilterRow = function (e) {
    if (!e.sender && typeof e === 'string') {
        $(e).find(".k-filter-row .k-autocomplete,.k-filter-row .k-numeric-wrap,.k-filter-row .k-dropdown,.k-filter-row [data-role='filtercell']").removeClass('disable-filter');
        return
    }
    e.sender.wrapper.find(".k-filter-row .k-autocomplete,.k-filter-row .k-numeric-wrap,.k-filter-row .k-dropdown,.k-filter-row [data-role='filtercell']").removeClass('disable-filter');
}

export const disableFilterRow = function (e) {
    e.sender.wrapper.find(".k-filter-row .k-autocomplete,.k-filter-row .k-numeric-wrap,.k-filter-row .k-dropdown,.k-filter-row [data-role='filtercell']").addClass('disable-filter');
}
