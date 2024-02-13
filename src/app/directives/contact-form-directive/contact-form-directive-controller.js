module.exports = function ( app ) {
    app.controller( "contactFormController", function( ) {
        let vm = this;

          vm.username = "";
          vm.password = "";
          vm.message = "";

        function _handleInputs(){
          vm.usernameErr = false;
          vm.passwordErr = false;
          vm.messageErr = false;
        }
        _handleInputs()

        vm.validationError = function(){
             //vm.usernameErr = !vm.username
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

        vm.onFocus = function(){
          _handleInputs()
        }

        function _resetForm(){
            vm.username = "";
            vm.password = "";
            vm.message = "";
        }
        
    });
}