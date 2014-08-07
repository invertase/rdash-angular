 /**
 * Sidebar Toggle & Cookie Control
 *
 */
var mobileView = 992;

function getWidth() { return window.innerWidth; }

function detect()
{
    if (getWidth() >= mobileView)
    {
        if ($.cookie('toggle') === undefined)
        {
            $("#page-wrapper").addClass("active");
        }
        else
        {
            if($.cookie('toggle') == 'true')
            {
                $("#page-wrapper").addClass("active");
            }
            else
            {
                $("#page-wrapper").removeClass("active");
            }
        }
    }
    else
    {
        $("#page-wrapper").removeClass("active");
    }
}

detect();

/* On Document Ready */
$(function(){

    // Detect any resizes and run our detect() function
    $( window ).resize(function() {
        detect();
    });

    // Sidebar toggle & cookie toggle
    $("#toggle").click(function()
    {
        $("#page-wrapper").toggleClass("active");

        $.cookie('toggle', $("#page-wrapper").hasClass("active"));
    });

    $('.dropdown-toggle').dropdown()

    // Set a tooltip on any elements with rel="tooltip" - see example
    $('[rel="tooltip"]').tooltip();
});