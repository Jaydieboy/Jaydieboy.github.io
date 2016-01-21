$(document).ready(function () {
    var donation = 710,
            updateDate = "8:57 pm 1-20-2016",
            gofundme = 410;

    //****Draw Progress Bar****
    setTimeout(function(){ progress2(Math.ceil(100 * (gofundme / 1300)), $('#progressBar'));}, 500);
    progress(Math.ceil(100 * (donation / 1300)), $('#progressBar'));
    
    function progress(percentdon, $element) {
        var progressBarWidth = (percentdon * $element.width() / 100) - 10;
        $element.find('#total').animate({width: progressBarWidth}, 500).html("$" + donation);
    }
    function progress2(percentgo, $element) {
        var progressBarWidth = (percentgo * $element.width() / 100) - 10;
        $element.find('#gofundme').animate({width: progressBarWidth}, 500).html("gofundme $" + gofundme);
    }

    //****Show plane cost****
    $("#plane").hover(function () {
        $("#planePrice").css("visibility", "visible");
    }, function () {
        $("#planePrice").css("visibility", "hidden");
    });

    //****Update "updateInfo" class****
    var getNotice = $(".updateInfo").html();
    $(".updateInfo").html(getNotice + " (Last updated: " + updateDate + ")");
});
