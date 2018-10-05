var page = {
	onButton: function(e) {
		console.log("clicked");

		// this.setData({label1: { value : "Hello RT-Thread", refresh : true}});

		pm.navigateTo({url: "page2/page2"});
	}
};

Page(page);
