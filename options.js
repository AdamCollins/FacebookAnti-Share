// Saves options to chrome.storage
function save_options() {
  console.log("saved");
  var on = document.getElementById("isEnabled").checked;
  var hideShares = document.getElementById("hideShares").checked;
  var hideSponsored = document.getElementById("hideSponsoredPosts").checked;
  var hideCommentReplies = document.getElementById("hideCommentReplies").checked;
  console.log("hide cr:"+hideCommentReplies);
    chrome.storage.sync.set({
    isEnabled: on,
    hideShares: hideShares,
    hideCommentReplies: hideCommentReplies,
    hideSponsored: hideSponsored
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    isEnabled: true,
    hideShares: true,
    hideCommentReplies: false,
    hideSponsored: true
  }, function(items) {
    document.getElementById('isEnabled').checked = items.isEnabled;
    document.getElementById('hideShares').checked = items.hideShares;
    document.getElementById('hideSponsoredPosts').checked = items.hideSponsored;
    document.getElementById('hideCommentReplies').checked = items.hideCommentReplies;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);