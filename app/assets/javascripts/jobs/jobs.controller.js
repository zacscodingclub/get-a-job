(function() {
    'use strict';

    function JobsController(JobFactory) {
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
            return JobFactory.getJobs()
                                .then(setJobs);
        }

        function createJob() {
            return JobFactory.createJob(vm.newJob)
                                .then(getJobs());
        }

        function updateJob() {

        }

        function deleteJob() {

        }

        function getJob() {

        }

        function setJobs(data) {
            return vm.jobs = data;
        }
    }

    angular
        .module('app')
        .controller('JobsController', JobsController);
}());
