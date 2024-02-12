module.exports = function ( app ) {
    app.controller( "contactFormController", function( ) {
        let vm = this;
        vm.username = "";
        vm.password = "";
        vm.message = "";

        vm.usernameErr = false;
        vm.passwordErr = false;
        vm.messageErr = false;

        vm.validationError = function(){
        //    !vm.username ? vm.usernameErr = true : vm.usernameErr = false
            if (!vm.username ) {
                vm.usernameErr = true;
                return
              }else{
                vm.usernameErr = false;
              }

            if (!vm.password) {
                vm.passwordErr =true 
                return
              }else{
                vm.passwordErr = false;
              }

            if (!vm.message) {
                vm.messageErr = true;
                return
              } else{
                vm.messageErr = false;
              }
              _resetForm()
              alert('Form submitted successfully!');
        }

        function _resetForm(){
            vm.username = "";
            vm.password = "";
            vm.message = "";
        }
        
    });
}