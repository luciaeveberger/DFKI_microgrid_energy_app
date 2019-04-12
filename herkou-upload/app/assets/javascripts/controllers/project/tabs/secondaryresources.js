'use strict';
angular.module('iMode')
    .controller('secondaryResource', [
        '$scope',
        'project',
        'simulationResource',
        function(
            $scope,
            project,
            simulationResource
        )
        {

        $scope.project = project.project;
        $scope.tariffTypeOptions = [
            {name:'Flat', description: 'one static value'},
            {name:'Time-of-use (TOU)', description: 'daily repeating periods of several hours with the same price, (peak, medium, non-peak)'},
            {name:'Real-time-pricing (RTP)', description: 'for each time-step (15 min), a different value is possible'}
        ];
        $scope.incomeTariffTypeOptions = [
            {name:'feed in', description: 'money is paid for feeding into power grid'},
            {name:'self consumption', description: 'money is paid for self-consuming the generated power'}
        ];

        $scope.saveSecondaryComponents = function () {
                $scope.project = project.project;
                simulationResource.update({id:$scope.project.project_id}, project).$promise
                    .then(
                        function (data) {
                        });
            };

        }

    ]);