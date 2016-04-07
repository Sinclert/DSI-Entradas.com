$(document).ready(
    function()
    {
        // Get the height and width of the page
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
    
        /*  Vertical and horizontal centering of modal window(s). We will use
            each() function so if we have more then 1 modal window we center
            them all. */
        $(".modalWindow").each(
            function()
            {
                // Get the height and width of the modal
                var modalHeight = $(this).outerHeight();
                var modalWidth = $(this).outerWidth();

                // Calculate top and left offset needed for centering
                var top = (windowHeight - modalHeight)/2;
                var left = (windowWidth - modalWidth)/2;

                // Apply new top and left css values 
                $(this).css({"top":top , "left":left});
            }
        );
    
        $(".activateModal").click(
            function()
            {
                /*  Get the id of the modal window stored in the name of the
                    activating element */
                var modalID = $(this).attr("name");

                // Use the function to show it
                showModalWindow(modalID);
            }
        );

        $("#mask").click(
            function()
            {
                /*  Do not delete the content of the email; just hide the modal
                    windows */
                hideModalWindows();
            }
        );
        
        $("#sendButton").click(
            function()
            {
                /*  Email has (apparently) been sent, so we discard all data in
                    the email modal windows and then we hide all windows related
                    to emailing. */
                discardEmail();
            }
        );

        $("#cancelDiscard").click(
            function()
            {
                /*  If the user does not want to discard the email, the warning
                    message is hidden. */
                    hideModalWindow("modalWindow2");
            }
        );

        $("#confirmDiscard").click(
            function()
            {
                /*  If the user confirms that s/he wants to discard the email,
                    such action is taken. */
                discardEmail();
            }
        );
    }
);


// Hide modal windows if the ESC key is pressed
$(document).keyup(function(e) {
    if (e.which == 27) {
        hideModalWindows();
    }
});

// This function hides modal windows and deletes any data writen on the email.
function discardEmail()
{
    // Hide the two modal windows
    hideModalWindows();

    // Reset text fields in the modal window
    $("#issueTextBox").val("");
    $("#messageBody").val("");
}

// This function hides a specific modal window.
function hideModalWindow(modalID)
{
    // Hide modal window
    $("#" + modalID).fadeOut(300);
    
    if(modalID == "modalWindow1")
    {
        // Hide the mask
        $("#mask").fadeOut(300);
    }
}

// This function hides the two modal windows.
function hideModalWindows()
{
    hideModalWindow("modalWindow2");
    hideModalWindow("modalWindow1");
}

// This function shows a specific modal window.
function showModalWindow(modalID)
{
    if(modalID == "modalWindow1")
    {
        // Set display to block and opacity to 0 so we can use fadeTo
        $("#mask").css({"display":"block", opacity:0});
        
        // Fade in the mask to opacity 0.8 
        $("#mask").fadeTo(300,0.8);
    }
    
    // Show the modal window
    $("#" + modalID).fadeIn(300);
}