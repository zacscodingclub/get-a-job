(function() {
    'use strict';

    function JobsController() {
        var vm = this;
        
        // callable methods on VM
        vm.createJob = createJob;
        vm.updateJob = updateJob;
        vm.deleteJob = deleteJob;
        vm.getJob = getJob;

        // init methods
        activate();


        // method definitions
        function activate() {
            getJobs()
        }

        function getJobs() {

        }

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
        .controller('JobsController', JobsController);
}());
