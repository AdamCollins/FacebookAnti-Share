var isEnabled;
var removeShares;
var removeSponsored;
var removeCommentReplies;
chrome.storage.sync.get(function(config){

	isEnabled = config.isEnabled;
	removeShares = config.hideShares;
	removeSponsored = config.hideSponsored;
	removeCommentReplies = config.hideCommentReplies;
	console.log("isEnabled:"+isEnabled);
	console.log("removeShares:"+removeShares);
	console.log("removeSponsored:"+removeSponsored);
	console.log("hideCommentReplies:"+removeCommentReplies);


});
console.log("Facebook anti-share loading...");
removeSpam();
window.setInterval(removeSpam,1000);

function removeSpam(){
	if(isEnabled)
	{
		console.log("removing shares...");
		//removes shared posts
		if(removeShares)
			$(".fcg:contains('shared')").parents().eq(11).remove();

		//removes comment replies
		if(removeCommentReplies)
			$(".fcg:contains('comment')").parents().eq(11).remove();

		//removes Sponsored posts
		if(removeSponsored)
			$("._3e_2._m8c:contains('Sponsored')").parents().eq(11).remove();
	}
}