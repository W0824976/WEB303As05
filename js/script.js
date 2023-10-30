$(document).ready(function() {
    
    $(".accordion .label").click(function() {
        $(this).siblings(".panel:visible").slideUp();
        $(this).next(".panel").slideDown();
    });

   
    $(".tabs .tab-labels span").click(function() {
        var target = $(this).data('target');
        $(".tab-content").hide();
        $("#" + target).show();
    });
});
