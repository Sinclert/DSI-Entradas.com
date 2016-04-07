$(document).ready(
    function()
    {
       // Get the height and width of the page
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
    
        // Get the height and width of the profile window
        var profileWindowHeight = $("#profileWindow").outerHeight();
        var profileWindowWidth = $("#profileWindow").outerWidth();
        
        // Calculate top and left offset needed for centering
        var top = $(".banner").outerHeight() + $("#path_and_profile").outerHeight();
        var left = windowWidth - profileWindowWidth;

        // Apply new top and left css values 
        $("#profileWindow").css({"top":top, "left":left});

        $(".activateProfileWindow").click(
            function()
            {
                $("#profileMask").show();
                // Show the profile window
                $("#profileWindow").fadeIn(300);
            }
        );

        $("#profileMask").click(
            function()
            {
                $("#profileMask").hide();
                $("#profileWindow").fadeOut(300);
            }
        );
    }
);

// hide the profile window if the ESC key is pressed
$(document).keyup(function(e) {
    if (e.which == 27) {
        $("#profileMask").hide();
        $("#profileWindow").fadeOut(300);
    }
});