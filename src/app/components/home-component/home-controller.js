module.exports = function(app) {
    app.controller('homeController', function(postService, Post) {
        
        let vm = this;
        vm.posts = [];

        vm.showMore = function(post) {
            post.showMore = true;
        }

        function getAllPosts() {
            postService.getPosts().then(function(result){
                debugger
                for(let i=0; i < result.data.length; i++){
                    let post = new Post(result.data[i])
                    vm.posts.push(post);
                }
            })
        }

        getAllPosts();
    });
}