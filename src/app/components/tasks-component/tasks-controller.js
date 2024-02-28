module.exports = function (app) {
  app.controller("tasksController", function (postService) {
    var vm = this;
    vm.showInfo = false;
    vm.tasks = [];

    vm.currentPage = 0;
    vm.pageSize = 5;
    vm.pageSizeOptions = [5, 10, 15];

    vm.isShowInfo = function () {
      vm.showInfo = !vm.showInfo;
    };

    postService.getTodos().then(function (result) {
      vm.tasks = result.data;
      vm.updatePagedTasks();
    });

    vm.addTask = function () {
      if (!vm.newTask) return (vm.newTaskError = true);
      vm.pagedTasks.push({
        id: Math.random(),
        title: vm.newTask,
        completed: false,
        userId: 3,
      });
      vm.newTask = "";
      vm.showInfo = true;
    };

    vm.onFocus = function () {
      vm.newTaskError = false;
    };

    vm.removeTask = function (id) {
      vm.pagedTasks = vm.pagedTasks.filter((task) => task.id != id);
      vm.tasks = vm.tasks.filter((task) => task.id != id);
      //valdation change paged Tasks
      if (vm.pagedTasks.length == 0) {
        vm.updatePagedTasks();
      }
    };

    vm.updatePagedTasks = function (size) {
      vm.pageSize = size || vm.pageSize;

      var start = parseInt(vm.currentPage) * parseInt(vm.pageSize);
      var end = start + parseInt(vm.pageSize);
      vm.totalPages = Math.round(vm.tasks.length / vm.pageSize);
      vm.pagedTasks = vm.tasks.slice(start, end);
    };

    vm.removeAllTasks = function () {
      vm.pagedTasks.length = 0;
      vm.showInfo = false;
      vm.totalPages = 0;
      vm.currentPage = 0;
    };
  });
};
