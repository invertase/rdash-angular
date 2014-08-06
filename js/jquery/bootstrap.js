$( document ).ready(function() {

    var mobileView = 992;

    function getWidth() { return window.innerWidth; }

    $( window ).resize(function()
    {
        if (getWidth() >= mobileView)
        {
            if ($.cookie('toggle') === undefined)
            {
                console.log("undefined");
                $("#page-wrapper").addClass("active");
            }
            else
            {
                console.log($.cookie('toggle'));
                if(! $.cookie('toggle'))
                {
                    
                    $("#page-wrapper").removeClass("active");
                }
                else
                {
                    console.log("here21234");
                    $("#page-wrapper").addClass("active");
                }
            }
        }
        else
        {
            $("#page-wrapper").removeClass("active");
        }
    });

    $("#toggle").click(function()
    {
        $("#page-wrapper").toggleClass("active");

        $.cookie('toggle', $("#page-wrapper").hasClass("active"));
    });

    $(window).trigger('resize');

});