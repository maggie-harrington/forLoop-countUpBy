$(document).ready(function() {
  $("#input form").submit(function(event) {
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    if (isNaN (countTo) || isNaN (countBy)) {
      alert ("Please enter a numeric value!");
    } else if (countTo <= 0 || countBy <= 0) {
      alert ("Entries must be positive numbers!");
    } else if (countTo < countBy) {
      alert ("'Count To' must not be smaller than 'Count By'!");
    } else {
      var results = [];
      for (var result = countBy; result <= countTo; result += countBy) {
        results.push(result);
        $("#output").show();
      }
// Used this initially to remove first element of array from output, which was always 0. Later changed result = 0 to result = countBy so this became unnecessary.
//    results.reverse();
//    results.pop();
//    results.reverse();
    $("#outputNumbers").text(results);
    event.preventDefault();
    }
  });
});
