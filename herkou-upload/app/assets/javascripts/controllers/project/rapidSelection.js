'use strict';

angular.module('iMode')

.controller('RapidSelectionCtrl', [
    '$rootScope',
    '$scope',
    '$location',
    'project',
    'simulationResource',
    function($rootScope, $scope, $location, project, simulationResource) {
        $scope.savedProject = {};
        $scope.projects = [];
        $scope.isListLoading = true;


        $scope.openProject = function(id){

            $scope.project  = project.project;
            $rootScope.showSpinner = true;
            simulationResource.get({id: id}).$promise
                .then(
                    function(data) {
                        console.log(data);
                       $location.path('/project/' + id +'/overview');
                    },
                    function(err){
                        console.error(err);
                    })
                .finally(function() {
                    $rootScope.showSpinner = false;
            });
        }
    }]);