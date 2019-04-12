iMode.factory('componentGeneralParameterResource', [
    '$resource',
    function($resource) {
        return $resource('/api/components_general_parameter/:component_details_id.json', {
            component_details_id: '@component_details_id'
        }, {
            all: {
                isArray: true
            }
            // update: {
            //     method: 'PUT',
            //     transformRequest: function(object) {
            //         return angular.toJson({
            //             component: object
            //         });
            //     }
            // },
            // destroy: {
            //     method: 'DELETE',
            //     transformRequest: function(object) {}
            // },
            // create: {
            //     method: 'POST',
            //     transformRequest: function(object) {
            //         return angular.toJson({
            //             component: object
            //         });
            //     }
            // }
        });
    }
]);