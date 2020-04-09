window.openNav = function () {
  document.getElementById("myNav").style.width = "100%";
};

window.closeNav = function () {
  document.getElementById("myNav").style.width = "0%";
};

// Initialize and add the Google map
window.initMap = function () {
  // The location of Sky Cafe
  var skyCafe = { lat: 39.937037, lng: -75.162849 };
  // The map, centered at Sky Cafe
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: skyCafe,
  });
  // The marker, positioned at Sky Cafe
  var marker = new google.maps.Marker({ position: skyCafe, map: map });
};

function getAccordionCb(element_id, screen) {
  return () => {
    console.log("something");

    if ($(window).width() < screen) {
      var concat = "";
      const obj_tabs = $(element_id + " li").toArray();
      const obj_cont = $(".tab-content .tab-pane").toArray();
      jQuery.each(obj_tabs, function (n, val) {
        concat += '<div id="' + n + '" class="panel panel-default">';
        concat +=
          '<div class="panel-heading" role="tab" id="heading' + n + '">';
        concat +=
          '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' +
          n +
          '" aria-expanded="false" aria-controls="collapse' +
          n +
          '">' +
          val.innerText +
          "</a></h4>";
        concat += "</div>";
        concat +=
          '<div id="collapse' +
          n +
          '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' +
          n +
          '">';
        concat += '<div class="panel-body">' + obj_cont[n].innerHTML + "</div>";
        concat += "</div>";
        concat += "</div>";
      });
      $("#accordion").html(concat);
      $("#accordion").find(".panel-collapse:first").addClass("in");
      $("#accordion")
        .find(".panel-title a:first")
        .attr("aria-expanded", "true");
      $(element_id).remove();
      $(".tab-content").remove();
    } 
    else {
      location.reload();
    }
  };
}

window.addEventListener("resize", getAccordionCb("#tabs", 1000));

export default "yo";
