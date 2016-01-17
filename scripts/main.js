$(document).ready(function() {
  var canvas = $("#speedometer");
  var context = canvas.getContext("2d");
  context.font = '12pt Calibri';
  context.fillStyle = 'blue';
  context.fillText('Area Under Construction!', 10, 130);
  context.beginPath();
  context.arc(95,50,40,0,2*Math.PI);
  context.stroke();
  var timer, count = 0,
    time = 10,
    donation = 410;

  function transition() {
    clearTimeout(timer);
    $('h3').html('$' + count++);
    
		if (count >= (donation - 7)) {
      time = time + 10;
    } else if (count >= (donation - 20)) {
      time = time + 5;
    } else if (count >= (donation - 50)) {
      time = 50;
    };

    if (count <= donation) {
      timer = setTimeout(transition, time);
    };
  }
  setTimeout(transition, time);
});
