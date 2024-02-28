module.exports = function (app) {
  app.controller("paginationController", function () {
    let vm = this;

    vm.nextPage = function () {
      debugger;
      if (vm.currentPage < vm.totalPages) {
        vm.currentPage++;
        vm.updatePagedTasks();
      } else {
        vm.isDdisabled = true;
      }
    };

    vm.prevPage = function () {
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
