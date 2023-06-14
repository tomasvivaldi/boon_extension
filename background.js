// Using chrome.action instead of chrome.browserAction in MV3
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

// Using chrome.runtime.onMessage in MV3
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.storage.local.set({ emailData: request.emailData }, function () {
    console.log("Email data saved");
  });
});
