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