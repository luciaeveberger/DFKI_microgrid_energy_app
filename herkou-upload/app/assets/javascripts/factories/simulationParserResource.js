iMode.factory('simulationParserResource', [
    '$resource',
    function($resource) {
        return $resource('/api/simulation_parser/:id.json', {
            id: '@id'
        }, {
            all: {
                isArray: true
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