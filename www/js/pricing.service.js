(function() {
    'use strict';

    angular.module('myApp').service('PricingService', PricingService);

    PricingService.$inject = [
        '$q'
    ];

    function PricingService(
        $q
    ) {
        var PricingService = this;

        PricingService.getPlans = getPlans;
        function getPlans() {
            var plans = [
                {
                    title: 'Free',
                    price: 0,
                    num_of_users: 10,
                    gigabytes: 10,
                    additional: [
                        'Email support',
                        'Help center access'
                    ],
                    button_text: 'Sign up for free'
                },
                {
                    title: 'Pro',
                    price: 15,
                    num_of_users: 20,
                    gigabytes: 10,
                    additional: [
                        'Priority email support',
                        'Help center access'
                    ],
                    button_text: 'Get started'
                },
                {
                    title: 'Enterprise',
                    price: 29,
                    num_of_users: 30,
                    gigabytes: 15,
                    additional: [
                        'Phone and email support',
                        'Help center access'
                    ],
                    button_text: 'Contact us'
                }
            ];

            return $q.resolve(plans);
        }
        
        PricingService.reset = reset;
        function reset() {

        }

        PricingService.reset();

        return PricingService;
    }
})();