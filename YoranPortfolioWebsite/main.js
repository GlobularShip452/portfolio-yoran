console.log("test");

$(document).ready(function () {
  $(".submit").click(function (event) {
    event.preventDefault();
    console.log("Clicked button");

    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid.</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid.</div>");
    }

    if (name.length >= 1) {
      statusElm.append("<div>Name is valid.</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Name is not valid.</div>");
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Subject is valid.</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject is not valid.</div>");
    }

    if (message.length > 20) {
      statusElm.append("<div>Message is valid.</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message is not valid.</div>");
    }
  });
});
