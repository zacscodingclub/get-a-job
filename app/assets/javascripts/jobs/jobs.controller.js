(function() {
    'use strict';

    function JobsController(JobFactory) {
        var vm = this;

        // callable methods on VM
        vm.createJob = createJob;
        vm.getJobs = getJobs;

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
                                .then(addToJobs(vm.newJob))
                                .then(vm.newJob = {});
        }

        function addToJobs(newJob) {
            return vm.jobs.push(newJob);
        }

        function setJobs(data) {
            return vm.jobs = data;
        }
    }

    angular
        .module('app')
        .controller('JobsController', JobsController);
}());
