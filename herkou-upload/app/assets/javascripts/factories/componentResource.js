iMode.factory('componentResource', [
    '$resource',
    function($resource) {
        return $resource('/api/components_detail/:id.json', {
            id: '@id'
        }, {
            all: {
                isArray: true
            },
            update: {
                method: 'PUT',
                transformRequest: function(object) {
                    return angular.toJson({
                        component: object
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
                        component: object
                    });
                }
            }
        });
    }
]);