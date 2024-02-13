module.exports = function(app) {
    app.controller('tasksController', function( postService) {
      
      var vm = this;
      vm.showInfo = false;
      vm.tasks = [];
      vm.currentPage = 0;
      vm.pageSize = 5; 

      vm.isShowInfo = function(){
            vm.showInfo = !vm.showInfo
      };

      postService.getTodos().then(function(result) {
            vm.tasks = result.data;

            vm.updatePagedTasks();
            vm.totalPages = Math.ceil(vm.tasks.length / +vm.pageSize);  
      });

      vm.addTask = function() {
        if(!vm.newTask ) return vm.newTaskError = true;
          vm.pagedTasks.push({ id:Math.random(), title: vm.newTask, completed: false, userId: 3 });
          vm.newTask = '';
          vm.showInfo = true;  
      };

      vm.onFocus = function(){
        vm.newTaskError = false;
      }

      vm.removeTask = function(id){
          vm.pagedTasks =  vm.pagedTasks.filter(task => task.id != id);
          //valdation change paged Tasks
          if(vm.pagedTasks.length == 0){ 
             --vm.totalPages;
             --vm.currentPage;
          }
      };
    
      vm.updatePagedTasks = function() {
          var start = Number(vm.currentPage ) * Number(+vm.pageSize);
          var end = start + Number(+vm.pageSize); 
          vm.pagedTasks = vm.tasks.slice(start, end);
          vm.totalPages = Math.ceil(vm.tasks.length / +vm.pageSize)
      };
        
      vm.nextPage = function() {
        if (vm.currentPage < vm.totalPages + +vm.pageSize) { 

          if(vm.currentPage == vm.totalPages -1){
            return vm.isDdisabled = true;
          }else{
            vm.currentPage++;
            vm.updatePagedTasks();
          }

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
        vm.totalPages = 0;
        vm.currentPage = 0;
      }
      vm.updatePagedTasks()
  })
}