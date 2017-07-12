// angular.module('loc8rApp', ['ngRoute']);
// function config($routeProvider) {
//     $routeProvider
//         .when('/', {
//             controller: 'homeCtrl',
//             templateUrl: 'home/home.view.html',
//             constrollerAs: 'vm'
//         })
//         .otherwise({ redirectTo: '/' });
// }
// angular
//     .module('loc8rApp')
//     .config(['$routeProvider', config]);

    /*new*/
    (function () {

  angular.module('loc8rApp', ['ngRoute']);

  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'home/home.view.html',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }

  angular
    .module('loc8rApp')
    .config(['$routeProvider', config]);

})();