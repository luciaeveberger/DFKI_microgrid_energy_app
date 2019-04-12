
angular.module('iMode')

    .factory('projectResults', [
        '$resource',
        function($resource){
            return $resource('http://46.252.27.66:8080/guiserverinterface/users/1488052145435/projects/:projectId/results')
    }]);