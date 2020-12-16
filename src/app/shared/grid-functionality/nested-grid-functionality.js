
export const expandRow = function(e) {
    e.sender.collapseRow(e.sender.content.find("tr.row-border"));//collapse last opened row if exist
    e.masterRow.addClass('row-border expand-row-bg');
    e.detailRow.addClass('expand-row-bg');
    startDetailsGridFromLeft(e);
}

const startDetailsGridFromLeft= function (e) {
    let detailRow = e.detailRow.find(".k-hierarchy-cell");
    let visible = detailRow.is(':visible');
    detailRow.hide();
    if (visible) {//if the row not expanded before
        let subgrid = e.detailRow.find(".k-detail-cell");
        subgrid.attr("colspan", +subgrid.attr("colspan") + 1);
    }
}

export const collapseRow = function(e) {
    e.masterRow.removeClass('row-border expand-row-bg');
    e.detailRow.removeClass('expand-row-bg');
}

export const disableMasterActionBtn = function (e, gridClass=" ") {
    e.sender.wrapper.find(`${gridClass} .k-command-cell .k-grid-edit , ${gridClass} .k-command-cell .k-grid-showConfirmPopup `).attr("disabled", "disabled");
}

export const enableMasterActionBtn = function (e, gridClass = " ") {
    e.sender.wrapper.find(`${gridClass} .k-command-cell .k-grid-edit , ${gridClass} .k-command-cell .k-grid-showConfirmPopup`).removeAttr("disabled", "disabled");
}

export const disableNestedActionBtn = function (e) {
    e.sender.element.find('.k-grid-edit-row + .k-detail-row').find('.k-grid-add,.k-grid-edit,.k-grid-delete').attr("disabled", "disabled");
}

export const enableNestedActionBtn = function (e) {
    e.sender.element.find('.k-grid-edit-row + .k-detail-row').find('.k-grid-add,.k-grid-edit,.k-grid-delete').removeAttr("disabled");
}