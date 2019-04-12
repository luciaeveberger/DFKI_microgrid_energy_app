iMode.factory('simulationResource', [
    '$resource',
    function($resource) {
        return $resource('/api/simulations/:id.json', {
            id: '@id'
        }, {
            all: {
                isArray: true
            },
            update: {
                method: 'PUT',
                transformRequest: function(object) {
                    return angular.toJson({
                        simulation: object
                    });
                }
            },
            destroy: {
                method: 'DELETE',
                transformRequest: function(object) {}
            },
            create: {
                method: 'POST',
                transformRequest: function(object) {
                    return angular.toJson({
                        simulation: object
                    });
                }
            }
        });
    }
]);