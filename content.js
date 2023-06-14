// This is a very simplistic example. You'll need to update the selectors based on the actual email service you're targeting.
document.addEventListener("DOMContentLoaded", function () {
  var sender = document.querySelector(".sender").textContent;
  var subject = document.querySelector(".subject").textContent;
  var body = document.querySelector(".body").textContent;

  // Send the email data to the background script
  chrome.runtime.sendMessage({ emailData: { sender, subject, body } });
});
