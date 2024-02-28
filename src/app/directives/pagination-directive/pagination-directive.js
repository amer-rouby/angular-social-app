module.exports = function (app) {
    app.directive('paginationDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/pagination-directive/pagination-directive.html' ,
            controller: 'paginationController',
            controllerAs: 'ctrl', 
            bindToController: true,
            scope: {
                pageSize: "=?",
                currentPage: "=?",
                totalPages: "=?",
                updatePagedTasks: "=?",
                isDisabled: "=?",
                pageSizeOptions: "=?",
            },
            
        }
    })
};