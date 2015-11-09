/**
 * Created by rhkina on 08/11/15.
 */
Template.main.onRendered(function () {
    (function($){
        $(function(){

            $('.button-collapse').sideNav();
            $('.parallax').parallax();

        }); // end of document ready
    })(jQuery); // end of jQuery name space
});
