iMode.factory('componentEconomicResource', [
    '$resource',
    function($resource) {
        return $resource('/api/components_economic_detail/:component_details_id.json', {
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