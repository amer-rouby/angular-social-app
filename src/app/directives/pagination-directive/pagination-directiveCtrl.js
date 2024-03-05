module.exports = function (app) {
  app.controller("paginationController", function () {
    let vm = this;
    
    vm.nextPage = function () {
      debugger;

      if (vm.currentPage < vm.totalPages -1 ) {
        vm.currentPage++;
        vm.updatePagedTasks();
      } else {
        vm.isDisabled = true;
      }
    };

    vm.prevPage = function () {
      vm.isDisabled = false;
      if (vm.currentPage > 0) {
        vm.currentPage--;
        vm.updatePagedTasks();
      }
    };

    vm.updatePageSize = function (size) {
      vm.currentPage = 0;
      vm.updatePagedTasks(size);
    };
  });
};
