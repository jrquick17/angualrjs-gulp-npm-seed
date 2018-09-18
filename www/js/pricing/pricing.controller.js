(function() {
    'use strict';

    angular.module('myApp').controller(
        'PricingController',
        PricingController
    );

    PricingController.$inject = [
        'PricingService'
    ];

    function PricingController(
        PricingService
    ) {
        var PricingController = this;
        
        PricingController.loadPlans = loadPlans;
        function loadPlans() {
            return PricingService.getPlans().then(
                function(plans) {
                    if (plans) {
                        PricingController.plans = plans;
                    }

                    return plans;
                }
            );
        }

        PricingController.reset = reset;
        function reset() {
            PricingController.plans = [];
        }

        PricingController.init = init;
        function init() {
            PricingController.reset();
            PricingController.loadPlans();
        }

        PricingController.init();
    }
})();