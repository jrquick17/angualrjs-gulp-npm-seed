(function() {
    'use strict';

    // require('something');
})();
(function() {
    'use strict';

    angular.module('myApp', []);
})();

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
            template:'<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"><h5 class="my-0 mr-md-auto font-weight-normal">AngularJS Seed</h5><nav class="my-2 my-md-0 mr-md-3"><a class="p-2 text-dark" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Features</a> <a class="p-2 text-dark" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Enterprise</a> <a class="p-2 text-dark" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Support</a> <a class="p-2 text-dark" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Pricing</a></nav><a class="btn btn-outline-primary" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Sign up</a></div><div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"><h1 class="display-4">Pricing</h1><p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\'s built with default Bootstrap components and utilities with little customization.</p></div><div class="container"><div class="card-deck mb-3 text-center"><div data-ng-repeat="plan in ctrl.plans"><plan plan="plan"></plan></div></div><footer class="pt-4 my-md-5 pt-md-5 border-top"><div class="row"><div class="col-6 col-md"><h5>Features</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="https://jrquick.com">Cool stuff</a></li><li><a class="text-muted" href="https://jrquick.com">Random feature</a></li><li><a class="text-muted" href="https://jrquick.com">Team feature</a></li><li><a class="text-muted" href="https://jrquick.com">Stuff for developers</a></li><li><a class="text-muted" href="https://jrquick.com">Another one</a></li><li><a class="text-muted" href="https://jrquick.com">Last time</a></li></ul></div><div class="col-6 col-md"><h5>Resources</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Resource</a></li><li><a class="text-muted" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Resource name</a></li><li><a class="text-muted" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Another resource</a></li><li><a class="text-muted" href="https://github.com/jrquick17/angualrjs-gulp-npm-seed">Final resource</a></li></ul></div><div class="col-6 col-md"><h5>About</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="https://jrquick.com">Team</a></li><li><a class="text-muted" href="https://jrquick.com">Locations</a></li><li><a class="text-muted" href="https://jrquick.com">Privacy</a></li><li><a class="text-muted" href="https://jrquick.com">Terms</a></li></ul></div></div></footer></div>'
        };
    }
})();
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
            template:'<div class="card mb-4 box-shadow"><div class="card-header"><h4 class="my-0 font-weight-normal">{{ plan.title }}</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">${{ plan.price }} <small class="text-muted">/ mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>{{ plan.num_of_users }} users included</li><li>{{ plan.gigabytes }} GB of storage</li><li data-ng-repeat="bonus in plan.additional">{{ bonus }}</li></ul><button type="button" class="btn btn-lg btn-block btn-outline-primary">{{ plan.button_text }}</button></div></div>'
        };
    }
})();