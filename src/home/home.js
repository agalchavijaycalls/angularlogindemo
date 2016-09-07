angular.module('angular-login.home', ['angular-login.grandfather'])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/',
      templateUrl: 'src/home/home.tpl.html',
      controller: 'HomeController'
    });
})
.controller('HomeController', function ($scope) {
  $scope.users = angular.fromJson(localStorage.getItem('userStorage'));
});
