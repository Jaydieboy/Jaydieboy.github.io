$(document).ready(function() {
  var timer, count = 0,
    time = 10,
    donation = 500;

  function transition() {
    clearTimeout(timer);
    $('p').html('$' + count++);
    
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
