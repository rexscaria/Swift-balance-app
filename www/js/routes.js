angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.exercises', {
    url: '/exercises-list',
    views: {
      'tab2': {
        templateUrl: 'templates/exercises.html',
        controller: 'exercisesCtrl'
      }
    }
  })

  .state('tabsController.perfomance', {
    url: '/perfomance-list',
    views: {
      'tab3': {
        templateUrl: 'templates/perfomance.html',
        controller: 'perfomanceCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('clockReach', {
    url: '/cloc- reach',
    templateUrl: 'templates/clockReach.html',
    controller: 'clockReachCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')

  

});