requirejs.config ({
    baseUrl: "js/",
    shim : {
        vticker: { "deps": ['jquery'] },
        circliful: { "deps": ['jquery'] },
        script: { "deps": ['jquery'] },
        bootstrap: {
            exports: '$.fn.popover',
            deps: ["jquery"]
        },
        jquery: {
            exports: '$'
        }
    },
    paths: {
        jquery: "https://code.jquery.com/jquery-2.1.4.min",
        bootstrap: "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min",
        vticker: "http://richhollis.github.io/vticker/downloads/jquery.vticker.min.js?v=1.15",
        circliful: "jquery.circliful.min",
        script: "script"
    }
});

requirejs (['jquery'], function ($) {
    $ (window).load (function () {
        $ ('.preloader').animate ({
            opacity: 0
        }, function () {
            $ ('.preloader').css ('display', 'none');


          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });

        });
    });
});

requirejs (['jquery', 'vticker'], function ($) {
    $ ('#example').vTicker ({
        mousePause: false,
        pause: 3000
    });
});

requirejs (['jquery', 'circliful'], function (a) {
    $ ('.myStat').circliful ();
});

requirejs (['jquery', 'script'], function (a) {
    $ ('.navbar').navbarStick ();
});

requirejs([
    'jquery', 
    'bootstrap'
    ], function($, _bootstrap){
    /*  $('.navbar-default').on('click',function(e) {
        $('#bs-example-navbar-collapse-1').collapse('hide');
    });*/
   /* $(".navbar-toggle").click(function(event) {
$(".navbar-collapse").toggle('in');
})*/
$(".navbar-nav li a").click(function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });
});
