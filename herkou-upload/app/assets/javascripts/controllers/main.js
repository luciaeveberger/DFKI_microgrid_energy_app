'use strict';

angular.module('iMode')

    .controller('MainCtrl', [
        '$scope',
        'project',
        function($scope, project) {

        $scope.exportProject = function(){
            project.export();
        };

    }]);