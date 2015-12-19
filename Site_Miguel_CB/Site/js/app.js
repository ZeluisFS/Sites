//Aqui fica tudo ligado ao UI-Router
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homeopatia');

  $urlRouterProvider.when('', '/homeopatia'); //Quando vai parar ao index html, automaticamente vai para o estado homeopatia

  $stateProvider

    .state('homeopatia', {
      url: '/homeopatia',
      templateUrl: 'homeopatia.html'
    })

    .state('quemSou', {
      url: '/quemSou', 
      templateUrl: 'quemSou.html'
    })

    .state('contacto', {
      url: '/contacto', 
      templateUrl: 'contacto.html'
    })

    .state('ondeEstou', {
      url: '/ondeEstou', 
      templateUrl: 'ondeEstou.html'
    })

    .state('blog', {
      url: '/blog', 
      templateUrl: 'blog.html'
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
