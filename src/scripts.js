import $ from "jquery";
$(document).ready(function () {
  $("#image").mouseenter(function () {
    $("#image").animate({ width: "600px" });
  });
});
$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#all MDBCardBody ").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
