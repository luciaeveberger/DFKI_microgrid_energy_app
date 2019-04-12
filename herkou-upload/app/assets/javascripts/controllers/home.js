'use strict';

angular.module('iMode')

    .controller('HomeCtrl', [
        "$scope",
        "$location",
        "project",
        '$timeout',
        'componentResource',
        'simulationResource',
        '$mdDialog',
        function(
            $scope,
            $location,
            project,
            $timeout,
            componentResource,
            simulationResource,
            $mdDialog
        ) {
            // Limit items to be dropped in list1
            $scope.optionsList1 = {
                accept: function(dragEl) {
                    if ($scope.list1.length >= 2) {
                        return false;
                    } else {
                        return true;
                    }
                }
            };
            $scope.userProjects = [];
            simulationResource.all(function(results){
                angular.forEach(results, function (result) {
                    result.project.id = result.id;
                   $scope.userProjects.push(result.project);

                })

            });

            $scope.handleDrop = function(item, bin) {
                alert('Item ' + item + ' has been dropped into ' + bin);
            }
            $scope.newProject = function() {
                $scope.project = project;
                simulationResource.create($scope.project).$promise
                    .then(function(results){
                      console.log(results);
                      $location.path('/project/' + results.id +'/overview');
                    });

            };

            $scope.importProjectSuccess = function(file) {
                project.import(file);
                $location.path("/project/new/overview");
            };

            $scope.importProjectProgress = function($total, $loaded) {
                console.log("Upload project: " + $loaded + " of " + $total + " byte");
            };

            $scope.importProjectError = function($error) {
                console.error("Upload project error: " + $error);
            };
            var color = d3.scale.category20()
            $scope.options = {
                chart: {
                    type: 'forceDirectedGraph',
                    height: 250,
                    color: function(d) {
                        return color(d.group)
                    },
                    nodeExtras: function(node) {
                        node && node
                            .append("text")
                            .attr("dx", 8)
                            .attr("dy", ".35em")
                            .text(function(d) {
                                return d.name
                            })
                            .style('font-size', '10px');
                    }
                }
            };


        }
    ]);