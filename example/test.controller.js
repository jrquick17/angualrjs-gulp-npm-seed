(function() {
    'use strict';

    angular.module('myTestApp').controller('TestController', TestController);

    function TestController() {
        var TestController = this;

        TestController.reset = reset;
        function reset() {
            //
        }

        TestController.init = init;
        function init() {
            TestController.reset();
        }

        TestController.init();
    }
})();