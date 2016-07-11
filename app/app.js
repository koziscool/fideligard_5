
var fido = angular.module('fideligard',['ui.router']);
console.log(fido);

fido.config( function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/stocks');

})