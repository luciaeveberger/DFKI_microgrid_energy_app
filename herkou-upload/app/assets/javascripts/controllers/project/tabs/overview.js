'use strict';
angular.module('iMode')
    .controller('ProjectOverviewCtrl', [
        '$scope',
        'project',
        'projectResource',
        '$location',
        'componentResource',
        'simulationResource',
        '$locale',
        '$http',
        '$mdDialog',
        function(
            $scope,
            project,
            projectResource, 
            $location, 
            componentResource, 
            simulationResource,
            $locale,
            $http,
            $mdDialog)
        {
            $scope.project  = project.project;
            var geocoder = new google.maps.Geocoder;
            var infowindow = new google.maps.InfoWindow;

            // if places are not loaded, default at this location
            $scope.coordinates = '';
            $scope.center = [52.5200, 13.4050];
            $scope.latlng = [52.5200, 13.4050];
            $scope.nodesAttachmentOptions = ['electricity', 'heat', 'cooling'];


            $scope.getpos = function (event) {
                $scope.lat = event.latLng.lat();
                $scope.lng = event.latLng.lng();
                $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
                $scope.project.coordinates = $scope.latlng;
            };
            $scope.onlyNumbers = /^\d+$/;

            $scope.geoMarker = function () {
                $scope.center = [parseInt($scope.coordinates.split(',')[0]),parseInt($scope.coordinates.split(',')[1])];
                $scope.latlng = $scope.center;
                $scope.project.coordinates = $scope.latlng;
            };

            $scope.placeMarker = function(){
                var loc = this.getPlace().geometry.location;
                $scope.latlng = [loc.lat(), loc.lng()];
                $scope.center = [loc.lat(), loc.lng()];
                $scope.project.coordinates = $scope.latlng;
                $scope.coordinates = $scope.latlng;
            };

            var myHash = location.hash.split('/');
            var projectId = myHash[2];
            if (projectId != 'new') {
                simulationResource.get({id: projectId}).$promise
                    .then(
                        function (data) {
                            $scope.project.author = data.project.author;
                            $scope.project.title = data.project.title;
                            $scope.project.description = data.project.description;
                            $scope.project.coordinates = data.project.coordinates;
                            $scope.center = $scope.project.coordinates;
                            $scope.latlng = $scope.project.coordinates;
                        },
                        function (err) {
                            console.error(err);
                        })
                    .finally(function () {
                    });
            }
            $scope.getTimeZone = function () {
                $http.get("https://maps.googleapis.com/maps/api/timezone/json?location=" + $scope.project.coordinates[0] + ","
                    + $scope.project.coordinates[1] + "&timestamp=1458000000&key=AIzaSyCnwrqjENPGSx3pmkJ5DZvR_wjLwfqGpDk")
                    .then(function(response) {
                        $scope.project.timezone = response.data;
                    });
            };
            $scope.showAlert = function(ev, element_id) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('title')
                        .textContent('After logging into Microgrid-Creator, you get an overview about the functions on your startup screen. Here,' +
                            ' you will also learn about the general layout of the screen and how to use it..')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                        .targetEvent(ev)
                );
            };
            $scope.saveDetails = function () {
                $scope.getTimeZone();
                simulationResource.update({ id:projectId }, project).$promise
                    .then(
                        function (data) {
                            $mdDialog.show(
                                $mdDialog.alert()
                                    .parent(angular.element(document.querySelector('#popupContainer')))
                                    .clickOutsideToClose(true)
                                    .title('Your information saved!')
                                    .textContent('saved')
                                    .ariaLabel('Alert Dialog Demo')
                                    .ok('Got it!')
                            );
                        });
            };
        }]
    );
