// angular.module('iMode')
//     .directive('saveProject', ['$mdDialog','simulationResource', function ($mdDialog, simulationResource) {
//         $scope.saveDetails = function () {
//             return {
//                 simulationResource.update({id: projectId}, project).$promise
//                 .then(
//                     function (data) {
//                         $mdDialog.show(
//                             $mdDialog.alert()
//                                 .parent(angular.element(document.querySelector('#popupContainer')))
//                                 .clickOutsideToClose(true)
//                                 .title('Your information saved!')
//                                 .textContent('saved')
//                                 .ariaLabel('Alert Dialog Demo')
//                                 .ok('Got it!')
//                         );
//                     });
//             }
//         }
//
//     }]);
