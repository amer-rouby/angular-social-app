module.exports = function(app) {
    app.factory('Post', function() {
        return function Post(model) {
            var vm = this;
            
            vm.id = null;
            vm.userId = null;
            vm.title = null;
            vm.body = null;
            vm.showMore = false;
            vm.showMoreComment = false;
            vm.showComments = false;
            vm.likes = parseInt(Math.floor(Math.random() * 100));
            vm.isLike = false;

            if (model){
                vm.id = model.id;
                vm.userId = model.userId;
                vm.title = model.title;
                vm.body = model.body;
                // vm.likes = model.likes;
            } 
        }
    });
}