(function() {
    'use strict';

    function JobFactory($http) {
        return {
            getJobs: getJobs,
            getJob: getJob,
            createJob: createJob,
            updateJob: updateJob,
            deleteJob: deleteJob
        }

        function getJobs() {
            return $http.get('/jobs')
                            .then(handleResponse)
                            .catch(handleError);
        }

        function getJob(id) {
            return $http.get('/jobs/' + id + '.json')
                            .then(handleResponse)
                            .catch(handleError);
        }

        function createJob(job) {
            var req = {
                method: 'POST',
                url: '/jobs',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    job: job
                }
            }

            return $http(req)
                            .catch(handleError);
        }

        function updateJob() {

        }

        function deleteJob() {

        }

        function handleResponse(response) {
            return response.data;
        }

        function handleError() {
            console.log(error);
        }
    }

    angular
        .module('app')
        .factory('JobFactory', JobFactory);
}());
