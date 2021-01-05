import $ from "jquery";
$(document).ready(function() {
  $("#h1")
    .fadeOut("slow")
    .fadeIn("slow");
});

$(document).ready(function() {
  $("#img").mouseenter(function() {
    $("#img").css("opacity", "1");
    $("#img").animate({ width: "500px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img").mouseleave(function() {
    $("#img").css("opacity", "0.8");
    $("#img").animate({ width: "250px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img1").mouseenter(function() {
    $("#img1").css("opacity", "1");
    $("#img1").animate({ width: "500px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img1").mouseleave(function() {
    $("#img1").css("opacity", "0.8");
    $("#img1").animate({ width: "250px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img2").mouseenter(function() {
    $("#img2").css("opacity", "1");
    $("#img2").animate({ width: "500px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img2").mouseleave(function() {
    $("#img2").css("opacity", "0.8");
    $("#img2").animate({ width: "250px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img3").mouseenter(function() {
    $("#img3").css("opacity", "1");
    $("#img3").animate({ width: "500px" }, "slow");
  });
});
$(document).ready(function() {
  $("#img3").mouseleave(function() {
    $("#img3").css("opacity", "0.8");
    $("#img3").animate({ width: "250px" }, "slow");
  });
});
$(document).ready(function() {
  $("p").mouseenter(function() {
    $("p").css("font-weight", "bold");
  });
});
$(document).ready(function() {
  $("#jamoussi").mouseenter(function() {
    $("#jamoussi").animate({ width: "300px" }, "fast");
  });
});
