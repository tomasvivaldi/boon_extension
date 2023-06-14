document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("emailData", function (result) {
    if (result.emailData) {
      document.getElementById("sender").textContent =
        "Sender: " + result.emailData.sender;
      document.getElementById("subject").textContent =
        "Subject: " + result.emailData.subject;
      document.getElementById("body").textContent =
        "Body: " + result.emailData.body;
    } else {
      document.getElementById("content").textContent =
        "No email data available.";
    }
  });
});
