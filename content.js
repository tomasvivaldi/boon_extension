// This is a very simplistic example. You'll need to update the selectors based on the actual email service you're targeting.
document.addEventListener("DOMContentLoaded", function () {
  var sender = document.querySelector(".qu span span").textContent;
  var subject = document.querySelector("h2.hP").textContent;
  var bodyElements = document.querySelectorAll("div.MsoNormal");
  var body = Array.from(bodyElements)
    .map((element) => element.textContent)
    .join("\n");

  // Send the email data to the background script
  chrome.runtime.sendMessage({ emailData: { sender, subject, body } });
});
