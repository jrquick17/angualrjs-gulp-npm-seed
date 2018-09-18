(function() {
    'use strict';

    angular.module('myApp').controller(
        'PricingController',
        PricingController
    );

    PricingController.$inject = [
        'DefaultVariableService',
        'EnvironmentService',
        'UserDurationService',
        'UserService'
    ];

    function PricingController(
        DefaultVariableService,
        EnvironmentService,
        UserDurationService,
        UserService
    ) {
        var PricingController = this;

        PricingController.user = DefaultVariableService.getObject();
        
        PricingController.loadUser = loadUser;
        function loadUser() {
            return UserService.getUser().then(
                function(user) {
                    if (user) {
                        PricingController.weeks = UserDurationService.getWeeks(user);

                        PricingController.totalWeeks = EnvironmentService.get(
                            'totalWeeks',
                            1
                        );

                        PricingController.percent = PricingController.weeks / PricingController.totalWeeks * 100;
                        if (PricingController.percent > 100) {
                            PricingController.percent = 100;
                        }
                    }

                    return user;
                }
            );
        }

        PricingController.reset = reset;
        function reset() {
            PricingController.percent = 0;

            PricingController.title = DefaultVariableService.getString(
                PricingController.title,
                'PROGRAM PROGRESSION'
            );

            PricingController.totalWeeks = 1;

            PricingController.weeks = 0;
        }

        PricingController.init = init;
        function init() {
            PricingController.reset();
            PricingController.loadUser();
        }

        PricingController.init();
    }
})();