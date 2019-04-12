iMode.factory('projectResource', [
    '$resource',
    function($resource) {
        return $resource('/api/projects/:id.json', {
            id: '@id'
        }, {
            all: {
                isArray: true
            },
            update: {
                method: 'PUT',
                transformRequest: function(object) {
                    return angular.toJson({
                        project: object
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
                        project: object
                    });
                }
            }
        });
    }
]);