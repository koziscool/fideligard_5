
var fido = angular.module('fideligard',['ui.router']);
console.log(fido);

fido.config( function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/stocks');

 $stateProvider
 
 .state('stocks', {
    url: '/stocks',
    controller: 'StocksCtrl',
    templateUrl: '/app/templates/stocks.html'
 }); 

})