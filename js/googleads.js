//change ad groups' name
function main() {
	var l = ['a-', 'a|-', 'b-', 'b|-', 'c-', 'd-', 'd|-', 'e-', 'e|-', 'f-', 'g-'];
	var lenL = l.length;
	var r1 = ['0', '1', '2', '3', '4', '5'];
	var lenR1 = r1.length;
	var r2 = ['A', 'B', 'C', 'D', 'E', 'F'];
	var lenR2 = r2.length;
	var newR2 = ['u', 'v', 'w', 'x', 'y', 'z'];
	
	for(var i=0; i<lenL; i++){
		for(var j=0; j<lenR1; j++){
			for(var k=0; k<lenR2; k++){
				var adGroupSelector = AdsApp.adGroups().withCondition("Name CONTAINS '"+l[i]+r1[j]+r2[k]+"'").orderBy("AdGroupName ASC");
				var adGroupIterator = adGroupSelector.get();
				while (adGroupIterator.hasNext()){
					var adGroup = adGroupIterator.next();
					adGroup.setName(l[i]+r1[j]+newR2[k]);
				}
			}
		}
	}
}

//add ad schedule for a campaign
function main(){
	var w = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
	var t = [0, 4, 8, 12, 16, 24];
	var wl = w.length;
	var c = AdsApp.campaigns()
	.withCondition("CampaignName = '三国'")
	.get().next();
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[0], 0, t[1], 0, 1.1);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[1], 0, t[2], 0, 1.2);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[2], 0, t[3], 0);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[3], 0, t[4], 0, 0.8);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[4], 0, t[5], 0);}
}

//remove ad schedule for a campaign
function main(){
	var c = AdsApp.campaigns()
	.withCondition("CampaignName = '三国'")
	.get().next();
	var as = c.targeting().adSchedules().get();
	while(as.hasNext()){
		var s = as.next();
		s.remove();
	}
}

//set all schedule a price change
function main(){
	var c = AdsApp.campaigns()
	.withCondition("CampaignName = 'COSMOS'")
	.get().next();
	var as = c.targeting().adSchedules().get();
	while(as.hasNext()){
		var s = as.next();
		s.setBidModifier(0.8);
	}
}

//get final url
function main(){
	var c = AdsApp.keywords()
	.withCondition("CampaignName = '西魏'")
	.withCondition("AdGroupName = '北周'")
	.withCondition("KeywordText = 'sugar daddy websites'")
	.get().next();
	Logger.log(c.urls().getFinalUrl());
}

//set cpc of keywords
function main(){
	var campaignName = 'USA-DEMO'; //a specified demo campaign or all demo campaigns
	
	var p0 = [0.6, 0.73, 0.76, 0.9, 0.93, 1.1, 1.2, 1.3, 1.5]; //sugar daddy websites
	
	var p1 = []; for(var i=0; i<p0.length; i++){p1[i] = p0[i]+0.05;} //best sugar daddy websites
	
	var p2 = p0; //sugar daddy sites
	
	var p3 = p1; //best sugar daddy sites
	
	var p4 = []; for(var i=0; i<p0.length; i++){p4[i] = p0[i]+0.1;} //sugar daddy dating sites
	
	var p5 = p0; //sugar babies website
	
	var p6 = p1; //best sugar babies website
	
	var p7 = p0; //sugar baby sites
	
	var p8 = p1; //best sugar baby sites
	
	var p9 = p0; //sugar baby dating sites
	
	var p10 = p0; //sugar daddy dating
	
	var p = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
	
	var x = ['a-', 'a|-', 'b-', 'b|-', 'c-', 'd-', 'd|-', 'e-', 'e|-', 'f-', 'g-'];
	
	var y1 = '0';
	var y2 = ['1', '5'];
	var y3 = ['2', '3', '4'];
	var z1 = 'z';
	var z2 = ['x', 'y'];
	var z3 = ['u', 'v', 'w'];
	
	for(var c=0; c<p.length; c++){
		var kw = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y1+z1+"'").get().next().bidding()
		.setCpc(p[c][0]); // 18-25, bottom50%
		
		for(var i=0; i<z2.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y1+z2[i]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][1]);}} // 18-25, top50%~30%
		
		for(var i=0; i<z3.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y1+z3[i]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][2]);}} // 18-25, top30%
		
		for(var i=0; i<y2.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y2[i]+z1+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][3]);}} // 25-35||65+, bottom50%
		
		for(var i=0; i<y3.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y3[i]+z1+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][4]);}} // 35-65, bottom50%
		
		for(var i=0; i<y2.length; i++){for(var j=0; j<z2.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y2[i]+z2[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][5]);}}} // 25-35||65+, top50%~30%

		for(var i=0; i<y2.length; i++){for(var j=0; j<z3.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y2[i]+z3[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][6]);}}} // 25-35||65+, top30%

		for(var i=0; i<y3.length; i++){for(var j=0; j<z2.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y3[i]+z2[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][7]);}}} // 35-65, top50%~30%

		for(var i=0; i<y3.length; i++){for(var j=0; j<z3.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y3[i]+z3[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][8]);}}} // 35-65, top30%
	}
}