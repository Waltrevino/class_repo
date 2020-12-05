$(".delplan").on("click", function(event) {
    // Get the ID from the button.
    // This is shorthand for $(this).attr("data-planid")
    var id = $(this).data("planid");

    // Send the DELETE request.
    $.ajax("/api/plans/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#createplan").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // [name=plan] will find an element with a "name" attribute equal to the string "plan"
    var newPlan = {
      plan: $("#createplan [name=plan]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/plans", {
      type: "POST",
      data: newPlan
    }).then(
      function() {
        console.log("created new plan");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#updateplan").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $("[name=id]").val().trim();

    var updatedPlan = {
      plan: $("#updateplan [name=plan]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/api/plans/" + id, {
      type: "PUT",
      data: updatedPlan
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });