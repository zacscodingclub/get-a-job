(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.jobs', {
                    url: 'jobs',
                    templateUrl: 'jobs/jobs.html',
                    controller: 'TweetsController as vm'
                });

            $urlRouterProvider.otherwise('/');
        });
}());
