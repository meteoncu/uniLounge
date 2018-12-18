function showSharingDetails(){
	$("#shareSomethingDetails").animate({"height":"30px"},300,function(){
		$("#shareSomethingPlace").animate({"marginLeft":"0px"},500);
		$("#shareSomethingButton").animate({"marginRight":"0px"},600);
	});
}

function hideSharingDetails(){
		$("#shareSomethingPlace").animate({"marginLeft":"-320px"},500);
		$("#shareSomethingButton").animate({"marginRight":"-140px"},600,function(){
			$("#shareSomethingDetails").animate({"height":"0px"},300);
		});
}