function main() {

    (function() {
        'use strict';


        $(document).ready(function() {
            $('.findslider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots: true,
                arrows: true,
                fade: true,
                autoplaySpeed: 4000,
                adaptiveHeight: false,
                infinite: true,
            });

            
        });
    }());


}
main();
