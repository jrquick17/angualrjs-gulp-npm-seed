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