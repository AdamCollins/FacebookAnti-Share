console.log("Facebook anti-share loading...")
removeShares();
window.setInterval(removeShares,1000);

function removeShares(){
	console.log("removing shares...");
	$(".fcg:contains('shared')").parents().eq(11).remove();
}