(function() {
    'use strict';

    angular.module('myApp').controller(
        'PlanController',
        PlanController
    );

    PlanController.$inject = [];

    function PlanController() {
        var PlanController = this;

        PlanController.reset = reset;
        function reset() {

        }

        PlanController.init = init;
        function init() {
            PlanController.reset();
        }

        PlanController.init();
    }
})();