iMode.factory('componentInstallationResource', [
    '$resource',
    function($resource) {
        return $resource('/api/components_installation_parameter/:component_details_id.json', {
            component_details_id: '@component_details_id'
        }, {
            all: {
                isArray: true
            }
        });
    }
]);