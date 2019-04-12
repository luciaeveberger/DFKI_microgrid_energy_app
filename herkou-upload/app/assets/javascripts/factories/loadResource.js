iMode.factory('loadResource', [
    '$resource',
    function($resource) {
        return $resource('/api/loads/:id.json', {
             id: '@id'
        }, {
            all: {
                isArray: true
            }
        });
    }
]);