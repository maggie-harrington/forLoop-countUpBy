$(document).ready(function() {
  $("#input form").submit(function(event) {
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    var results = [];
    for (var result = countBy; result <= countTo; result += countBy) {
      results.push(result);
    }
// Used this initially to remove first element of array from output, which was always 0. Later changed result = 0 to result = countBy so this became unnecessary.
//    results.reverse();
//    results.pop();
//    results.reverse();
    $("#outputNumbers").text(results);
    $("#output").show();
    event.preventDefault();
  });
});
