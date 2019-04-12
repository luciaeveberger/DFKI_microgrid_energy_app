iMode.controller('projectController',
    function(
        $scope,
        $http,
        projectResource,
        $location, 
        simulationResource, 
        $state
        ) {
        $scope.isPhysical = false;
        $scope.projects = projectResource.query(function() {});
        $scope.goNext = function(hash) {
            $location.path(hash);
       }
       $scope.createNew = function(){
            $state.go('new-project');
        };
        $scope.update = function(project) {
            if (project.id != null) {
            } else {
                console.log(project);
                 projectResource.create(project);
                 $state.go('system');
            }
        };
        $scope.goBack = function() {
            $state.go('overview');
        }
        $scope.removeProject = function(project) {
            projectResource.destroy(project);
            $scope.projects = projectResource.query(function() {});
        }
        $scope.collectProject = function(project) {
            $scope.simulationResource = simulationResource;
            $scope.simulationResource.project = project;
            $scope.simulationResource = project;
            $state.go('system');
        }
    });