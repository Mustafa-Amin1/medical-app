import $ from 'jquery';

export const refreshGrid = function (gridSelector) {
    var grid = $(gridSelector).data("kendoGrid");
    grid.dataSource.read();
    grid.refresh();
}

export const refreshGridAfterDelete = function (gridSelector) {
    refreshGrid(gridSelector)

    var gridAfterRefresh = $(gridSelector).data("kendoGrid");
    var page = gridAfterRefresh.dataSource.page();
    if (page > 1) {
        if (gridAfterRefresh._data.length == 1) {
            var newPage = page - 1;
            gridAfterRefresh.dataSource.page(newPage);
        }
    }
}

export const getGridSelectedObj = function (gridSelector,e) {
    let grid = $(gridSelector).getKendoGrid();
    return grid.dataItem($(e.target).closest("tr"));
}



