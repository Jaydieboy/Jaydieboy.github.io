$(document).ready(function() {
  //****CHANGE THESE VALUES WHEN UPDATING! (keep at top)****
  var donation = 610,
    updateDate = "9:00 pm 1/16/2016";
  
  //****Donation Count Up****
  var timer,
    count = 0,
    time = 10;

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
  
  //****Update "updateInfo" class****
  var getNotice = $(".updateInfo").html();
  $(".updateInfo").html(getNotice + " (Last updated: " + updateDate + ")");
});
