iMode.factory('resourceResource', [
    '$resource',
    function($resource) {
        return $resource('/api/resources/:id.json', {
            id: '@id',
            // params:{
            //     web_address: '@web_address'
            // }
        }, {
            all: {
                isArray: true
            }
        });
    }
]);