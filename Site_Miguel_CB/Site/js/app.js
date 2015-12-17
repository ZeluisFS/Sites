//Aqui fica tudo ligado ao UI-Router
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homeopatia');

  $urlRouterProvider.when('', '/homeopatia'); //Quando vai parar ao index html, automaticamente vai para o estado homeopatia

  $stateProvider

    .state('homeopatia', {
      url: '/homeopatia',
      templateUrl: 'homeopatia.html', 
      controller: function() {
        console.log("Entrou no homeopatia");
      }
    })

    .state('quemSou', {
      url: '/quemSou', 
      templateUrl: 'quemSou.html', 
      controller: function() {
        console.log('Entrou no quemSou');
      }
    })

    .state('contacto', {
      url: '/contacto', 
      templateUrl: 'contacto.html', 
      controller: function() {
        console.log('Entrou nos contactos');
      }
    })

    .state('ondeEstou', {
      url: '/ondeEstou', 
      templateUrl: 'ondeEstou.html', 
      controller: function() {
        console.log('Entrou no ondeEstou');
      }
    });

} );




//Aqui fica todo o JS normal
/*var navMenu = [6];

function initnavMenu() {
  for (var i = 0; i < 6; i++) {
    navMenu[i] = document.getElementById("nav" + i + 1);
    console.log('nav' + i);
  }
}*/
