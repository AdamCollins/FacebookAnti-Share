var isEnabled;
var removeShares;
var removeSponsored;
var removeCommentReplies;
var removeFriendsLike;

let numShares;
let numReplies;
let numSponsored;
chrome.storage.sync.get(function(config){

	isEnabled = (isEnabled===undefined)?true:config.isEnabled;
	removeShares = (removeShares===undefined)?true:config.hideShares;
	removeSponsored = (removeSponsored===undefined)?true:config.hideSponsored;
	removeCommentReplies = (removeCommentReplies===undefined)?false:config.hideCommentReplies;
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
		//removes shared posts
		if(removeShares)
			numShares = $(".fcg:contains('shared')").parents().eq(11).remove().length;

		//removes comment replies
		if(removeCommentReplies)
			numReplies = $(".fcg:contains('comment')").parents().eq(11).remove().length;

		//removes Sponsored posts
		if(removeSponsored)
			numSponsored = $(".f_n2tkn1mx_:contains('SpSonSsoSredS')").parents().eq(16).remove().length;

		//removes Sponsored posts
		if(removeFriendsLike)
			numFriendsLike = $(".fcg:contains('like')").parents().eq(11).remove().length;


		//print what is removed
		if(numShares>0)
			console.log(`removed ${numShares} shares`);
		if(numReplies>0)
			console.log(`removed ${numReplies} shares`);
		if(numSponsored>0)
			console.log(`removed ${numSponsored} shares`);
	}
}