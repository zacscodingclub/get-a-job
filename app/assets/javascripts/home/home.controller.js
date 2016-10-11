(function() {
    'use strict';

    function HomeController() {
        var vm = this;

        // callable methods on VM
        vm.createJob = createJob;
        vm.updateJob = updateJob;
        vm.deleteJob = deleteJob;
        vm.getJob = getJob;


        // method definitions
        function createJob() {

        }

        function updateJob() {

        }

        function deleteJob() {

        }

        function getJob() {

        }
    }

    angular
        .module('app')
        .controller('HomeController', HomeController);
}());
