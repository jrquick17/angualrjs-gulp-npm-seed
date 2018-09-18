(function() {
    'use strict';

    angular.module('myApp').directive(
        'pricing',
        pricing
    );

    function pricing() {
        return {
            bindToController: {
                title: '@'
            },
            controller:   'PricingController',
            controllerAs: 'ctrl',
            restrict:     'E',
            scope:        {},
            templateUrl:  'pricing.html'
        };
    }
})();