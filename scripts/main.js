$(document).ready(function () {
    //****Global variables (Must be whole number)****
    var donation = 1077,
            updateDate = "8:58 pm 1-25-2016",
            gofundme = 410;

    $("#plane_price_mobile").hide(); 

    //****Draw Progress Bar****
    setTimeout(function () {
        progress2((100 * (gofundme / 1300)), $('#progressBar'));
    }, 500);
    progress((100 * (donation / 1300)), $('#progressBar'));

    function progress(percentdon, $element) {
        var progressBarWidth = Math.ceil((percentdon * $element.width() / 100) - 10);
        $element.find('#total').animate({width: progressBarWidth}, 500).html("$" + donation);
    }
    function progress2(percentgo, $element) {
        var progressBarWidth = Math.ceil(percentgo * $element.width() / 100) - 10;
        $element.find('#gofundme').animate({width: progressBarWidth}, 500).html("gofundme $" + gofundme);
    }

    //****Show plane cost****
    $("#plane").hover(function () {
        $("#planePrice").css("visibility", "visible");
    }, function () {
        $("#planePrice").css("visibility", "hidden");
    });
    
$("#plane_mobile").click(function(){
    $("#plane_price_mobile").toggle();
});
    //****Radial Progress Bar****
    var c = document.getElementById("mobile_progress_bar");
    var ctx = c.getContext("2d");
    
    //Draw background arc
    ctx.beginPath();
    ctx.strokeStyle = "#666666";
    ctx.lineCap = "round";
    ctx.arc(150, 150, 100, 120 / 180 * Math.PI, 420 / 180 * Math.PI); //300 in total
    ctx.lineWidth = 24.0;
    ctx.stroke();
//******************************************************************************
    var start = 120;
    var around = 0;
    var adjNeeded = false;
    var id2 = null;

    //****Correcting countup termination
    function adjInt(num) {
        if (num % 5 !== 0) {
            adjNeeded = true;
            var adjFinal = num - (num % 5);
            return [adjNeeded, adjFinal];
        } else {
            return [adjNeeded, num];
        }
    }
    ctx.font = "50px Arial";
    ctx.textAlign="center";
    ctx.fillStyle = "#0099ff";
    ctx.fillText("$" + around, 150, 165);
    ctx.font = "30px Arial";
    ctx.textAlign="center";
    ctx.fillStyle = "#ffa31a";
    ctx.fillText("$" + around, 150, 250);
    
    function frame1() {
        //****Draw total progress bar****

        if (adjInt(donation)[0] === true) {
            if (around <= adjInt(donation)[1]) {
                around = around + 5;
            } else {
                around = donation;
            }
        } else {
            around = around + 5;
        }
        var barPosition = ((around / 1300) * 300) + start;
        ctx.beginPath();
        ctx.strokeStyle = "#0099ff";
        ctx.lineCap = "round";
        ctx.arc(150, 150, 100, start / 180 * Math.PI, barPosition / 180 * Math.PI);
        ctx.lineWidth = 22.0;
        ctx.stroke();

        ctx.clearRect(80, 170, 140, -50);
        ctx.font = "50px Arial";
        ctx.textAlign="center";
        ctx.fillStyle = "#0099ff";
        ctx.fillText("$" + around, 150, 165);

        if (around === donation) {
            clearInterval(id);
            around = 0;
            id2 = setInterval(frame2, 10);
        }
    }
    
    function frame2() {
        if (adjInt(gofundme)[0] === true) {
            if (around <= adjInt(gofundme)[1]) {
                around = around + 5;
            } else {
                around = donation;
            }
        } else {
            around = around + 5;
        }
        
        //****Draw gofundme bar****
        var barPosition = ((around / 1300) * 300) + start;
        ctx.beginPath();
        ctx.strokeStyle = "#ffa31a";
        ctx.lineCap = "round";
        ctx.arc(150, 150, 100, start / 180 * Math.PI, barPosition / 180 * Math.PI);
        ctx.lineWidth = 22.0;
        ctx.stroke();
        
        ctx.clearRect(115, 260, 70, -50);
            ctx.font = "30px Arial";
            ctx.textAlign="center";
    ctx.fillStyle = "#ffa31a";
    ctx.fillText("$" + around, 150, 250);
        
        if (around === gofundme) {
            clearInterval(id2);
            ctx.font = '14pt Arial';
            ctx.textAlign = "start";
ctx.fillStyle = '#fff';
ctx.strokeStyle = '#fff';
ctx.lineWidth = 1;
drawTextAlongArc(ctx, "gofundme", 10, 150, 150, 95, Math.PI*60/180, true);
        }
    }
    var id = setInterval(frame1, 10);
    
    //write test on arc
    function drawTextAlongArc(context, str, hei, centerX, centerY, radius, angle, above) {
    var met, wid;
    context.save();
    context.translate(centerX, centerY);
    if (!above) {
        radius = -radius;
        angle = -angle;
    }
    else{
        hei = 0;
    }
    context.rotate(-1 * (angle + 90/180*Math.PI));
    context.rotate(-1 * (angle / str.length) / 2);

    for (var n = 0; n < str.length; n++) {
        var char = str[n];
        met = context.measureText(char);
        wid = met.width;
        console.log(met);
        
        context.rotate(angle / str.length);
        context.fillText(char, -wid / 2, -radius + hei);
        context.strokeText(char, -wid / 2, -radius + hei);
    }
    context.restore();
}

    //****Update "updateInfo" class****
    var getNotice = $(".updateInfo").html();
    $(".updateInfo").html(getNotice + " (Last updated: " + updateDate + ")");
});
