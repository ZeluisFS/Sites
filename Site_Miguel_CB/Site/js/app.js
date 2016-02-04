//Aqui fica tudo ligado ao UI-Router
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homeopatia');

  $urlRouterProvider.when('', '/homeopatia'); //Quando vai parar ao index html, automaticamente vai para o estado homeopatia
  $urlRouterProvider.when('/questoesFrequentes', '/questoesFrequentes/questao1');

  $stateProvider

    .state('homeopatia', {
      url: '/homeopatia',
      templateUrl: 'homeopatia.html',
      onEnter: function() {
         var logo = document.getElementById("nav1");
        logo.src = "img/header/botaoHomeopatiaOn.jpg";
      },
      onExit: function() {
         var logo = document.getElementById("nav1");
        logo.src = "img/header/botaoHomeopatiaOff.jpg";
      }
    })

    .state('quemSou', {
      url: '/quemSou', 
      templateUrl: 'quemSou.html',
      onEnter: function() {
         var logo = document.getElementById("nav2");
        logo.src = "img/header/botaoQuemSouOn.jpg";
      },
      onExit: function() {
         var logo = document.getElementById("nav2");
        logo.src = "img/header/botaoQuemSouOff.jpg";
      }
    })

    .state('questoesFrequentes', {
      url: '/questoesFrequentes',
      templateUrl: 'questoesMain.html',
      onEnter: function() {
         var logo = document.getElementById("nav3");
        logo.src = "img/header/botaoQuestoesOn.jpg";
      },
      onExit: function() {
         var logo = document.getElementById("nav3");
        logo.src = "img/header/botaoQuestoesOff.jpg";
      }
    })

      //Nested Views from questoesFrequentes
        .state('questoesFrequentes.questao1', {
          url: '/questao1',
          templateUrl: 'questoesFrequentes/questao1.html'
        })

        .state('questoesFrequentes.questao2', {
          url: '/questao2',
          templateUrl: 'questoesFrequentes/questao2.html'
        })

        .state('questoesFrequentes.questao3', {
          url: '/questao3',
          templateUrl: 'questoesFrequentes/questao3.html'
        })

        .state('questoesFrequentes.questao4', {
          url: '/questao4',
          templateUrl: 'questoesFrequentes/questao4.html'
        })

        .state('questoesFrequentes.questao5', {
          url: '/questao5',
          templateUrl: 'questoesFrequentes/questao5.html'
        })

        .state('questoesFrequentes.questao6', {
          url: '/questao6',
          templateUrl: 'questoesFrequentes/questao6.html'
        })

        .state('questoesFrequentes.questao7', {
          url: '/questao7',
          templateUrl: 'questoesFrequentes/questao7.html'
        })

        .state('questoesFrequentes.questao8', {
          url: '/questao8',
          templateUrl: 'questoesFrequentes/questao8.html'
        })

        .state('questoesFrequentes.questao9', {
          url: '/questao9',
          templateUrl: 'questoesFrequentes/questao9.html'
        })
      //End of nested views

    .state('contacto', {
      url: '/contacto', 
      templateUrl: 'contacto.html',
      onEnter: function() {
         var logo = document.getElementById("nav4");
        logo.src = "img/header/botaoContactosOn.jpg";
      },
      onExit: function() {
         var logo = document.getElementById("nav4");
        logo.src = "img/header/botaoContactosOff.jpg";
      }
    })

    .state('ondeEstou', {
      url: '/ondeEstou', 
      templateUrl: 'ondeEstou.html',
      onEnter: function() {
         var logo = document.getElementById("nav5");
        logo.src = "img/header/botaoOndeEstouOn.jpg";
      },
      onExit: function() {
         var logo = document.getElementById("nav5");
        logo.src = "img/header/botaoOndeEstouOff.jpg";
      }
    })

    .state('blog', {
      url: '/blog', 
      templateUrl: 'blog.html',
      onEnter: function() {
         document.getElementById("nav6").src = 
         "img/header/botaoBlogOn.jpg";

        //Vamos fazer aparecer o footer do Blog
        document.getElementById("footerBlog").style.display = "block";
      },
      onExit: function() {
         document.getElementById("nav6").src =
         "img/header/botaoBlogOff.jpg";

        //Vamos fazer desaparecer o footer do Blog
        document.getElementById("footerBlog").style.display = "none";
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
