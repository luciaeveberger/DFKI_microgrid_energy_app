// 'use strict';
// // app dependencies
var iMode = angular.module('iMode',
    ['ngMaterial',
    'ngMessages', 
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ngResource',  
    'ngMap',
    'nvd3', 'templates',
     'ui.bootstrap', 'ang-drag-drop'
    ]);


iMode.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/home', {
        templateUrl: 'views/index.html',
        controller: 'HomeCtrl'
      })
      .when('/style', {
          templateUrl: 'views/tabs/style.html',
          controller: 'HomeCtrl'
      })
      .when('/project/:projectId/overview', {
          templateUrl: 'views/tabs/overview.html',
          controller: 'ProjectOverviewCtrl'
      })
      .when('/project/:projectId/resources', {
          templateUrl: 'views/tabs/resources.html',
          controller: 'ProjectResourcesCtrl'
      })
      .when('/project/:projectId/loads', {
          templateUrl: 'views/tabs/loads.html',
          controller: 'ProjectLoadsCtrl'
      })
      .when('/project/:projectId/components', {
          templateUrl: 'views/tabs/components.html',
          controller:  'ProjectComponentsCtrl'
      })
      .when('/project/:projectId/system', {
          templateUrl: 'views/tabs/system.html',
          controller: 'ProjectSystemCtrl'
      })
      .when('/project/:projectId/settings', {
          templateUrl: 'views/tabs/settings.html',
          controller: 'ProjectSettingsCtrl'
      })
      .when('/project/:projectId/results', {
          templateUrl: 'views/tabs/results.html',
          controller:  'ProjectResultsCtrl'
      })
      .otherwise({redirectTo: '/home'});
}])

.config(['$resourceProvider', function ($resourceProvider) {
        $resourceProvider.defaults.actions = {
            create: {method: 'POST', headers: {'Content-Type': 'application/json'}},
            get:    {method: 'GET', headers: {'Content-Type': 'application/json'}},
            getAll: {method: 'GET', isArray:true, headers: {'Content-Type': 'application/json'}},
            update: {method: 'PUT', headers: {'Content-Type': 'application/json'}},
            delete: {method: 'DELETE', headers: {'Content-Type': 'application/json'}}
        };
}])

.run(['$rootScope', 'project', function($rootScope, project) {

    // set default value for spinner
    $rootScope.showSpinner = false;

    // create an empty project
    project.newProject();
}]);

