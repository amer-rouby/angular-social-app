module.exports = function(app) {
    app.controller('contactController', function(postService, Post) {
        
        debugger
        let vm = this;
        vm.posts = [];

        // vm.showMore = function(post) {
        //     post.showMore = true;
        // }

        // function getAllPosts() {
        //     postService.getPosts().then(function(result){
        //         debugger
        //         for(let i=0; i < result.data.length; i++){
        //             let pp = new Post(result.data[i])
        //             vm.posts.push(pp);
        //         }
        //     })
        // }

        // getAllPosts();
    });
}