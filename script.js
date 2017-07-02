(function($){

  $('form input.points').bind("keypress", function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });

  $("#create-route").click(function() {

    var origin = $("#origin").val();
    var destination = $("#destination").val();

    if (origin != "" && destination != "") {
      storeroute();
      location.reload();
    } else {
      $("#error").text("You must enter start and end point.");
    }

  });

  $(".remove-route").click(function() {
    var index = $(".remove-route").index(this);
    var routes = JSON.parse(localStorage.getItem("routes"));
    console.log(routes.length);
    routes.splice(index,1);
    console.log(routes.length);
    if (routes.length > 0) {
      localStorage.setItem("routes", JSON.stringify(routes));
    } else {
        console.log("Proso");
        localStorage.setItem("routes", "");
        localStorage.removeItem("routes");
    }

    drawRoute();
    $("#jquery").remove();
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'script.js';
    script.id = 'jquery';
    body.appendChild(script);

  });


})(jQuery);
