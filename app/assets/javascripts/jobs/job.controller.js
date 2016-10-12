(function() {
    'use strict';

    function JobController($stateParams, JobFactory) {
        var vm = this;

        // callable methods on VM
        vm.updateJob = updateJob;
        vm.deleteJob = deleteJob;
        vm.getJob = getJob;

        activate();

        function activate() {
            console.log('job.controller.activate() - params: ' + $stateParams.jobId)
            getJob($stateParams.jobId);
        }
        
        function updateJob() {

        }

        function deleteJob() {

        }

        function getJob(id) {
            return JobFactory.getJob(id)
                                .then(setJob);
        }

        function setJob(data) {
            return vm.job = data;
        }
    }

    angular
        .module('app')
        .controller('JobController', JobController);
}());
