module.exports = function(app) {
    app.controller('tasksController', function( postService) {
        var vm = this;
        vm.showInfo = false;
        //vm.newTaskErro = true;
        vm.tasks = [];
        vm.totalPages= [];
        vm.currentPage = 0;
        vm.pageSize = 6; 
      
        vm.isShowInfo = function(){
            vm.showInfo = !vm.showInfo
        };

        postService.getTodos().then(function(result) {
            vm.tasks = result.data;
            vm.totalPages = Math.ceil(vm.tasks.length / vm.pageSize);
            vm.updatePagedTasks();
      });
      newTaskError = false
      vm.addTask = function() {
        if(!vm.newTask ) return vm.newTaskError = true;
          vm.pagedTasks.push({ id:Math.random(), title: vm.newTask, completed: false, userId: 3 });
          vm.newTask = '';
          vm.newTaskError = false
          vm.showInfo = true;  
      };
    
      vm.removeTask = function(id) {
          vm.pagedTasks =  vm.pagedTasks.filter(task => task.id != id)
          return  vm.pagedTasks
      };
    
        ///
      vm.updatePagedTasks = function() {
          var start = vm.currentPage * vm.pageSize;
          var end = start + vm.pageSize; 
          vm.pagedTasks = vm.tasks.slice(start, end);
      };
        
      vm.nextPage = function() {
        if (vm.currentPage < vm.totalPages - 1) {
          vm.currentPage++;
          vm.updatePagedTasks();
        }
      };
      
      vm.prevPage = function() {
        if (vm.currentPage > 0) {
          vm.currentPage--;
          vm.updatePagedTasks();
        }
      }; 
      
      vm.removeAllTasks = function(){
        vm.pagedTasks.length = 0;
        vm.showInfo = false;
        
      }
})}