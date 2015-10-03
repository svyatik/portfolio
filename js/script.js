jQuery.fn.extend ({
    navbarStick: function () {
        return this.each (function () {
            var elem = this;

            $ (document).scroll (function (evt) {
                onactive ();
            });
            $ (window).resize (function (evt) {
                // console.log ('resize');
                onactive ();
            });

            onactive = function () {
                if (($(document).scrollTop () > 0) || ($ (document).width () < 767)) {
                    $ (elem).addClass ('navbarStick');
                } else {
                    $ (elem).removeClass ('navbarStick');
                }
            }

            onactive ();
        });
    }
});

/*startFunction = function ($navbar) {
    navbarStick ($navbar);
};

navbarStick = function ($navbar) {
    $navbar.scroll (evt) {
        console.log (evt);
    };
};
*/