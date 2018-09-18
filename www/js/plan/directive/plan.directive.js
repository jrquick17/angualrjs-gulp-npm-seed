(function() {
    'use strict';

    angular.module('myApp').directive(
        'plan',
        plan
    );

    function plan() {
        return {
            controller:   'PlanController',
            controllerAs: 'ctrl',
            restrict:     'E',
            scope:        {
                plan: '='
            },
            templateUrl:  'plan.html'
        };
    }
})();