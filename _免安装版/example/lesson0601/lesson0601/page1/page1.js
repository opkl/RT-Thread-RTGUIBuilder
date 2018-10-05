var page = {
	onButton: function(e) {
	
		var thiz = this;
		console.dir(e);
		if(e.target.id == "connect")
		{
			var rq1 = pm.request({
			  url: 'http://www.rt-thread.com/service/rt-thread.txt', 
			  method : 'POST',
			  header:{
			      "Content-Type":"application/json"
			  },
			  data: {
				  x: '',
				  y: ''
			  },
			  success: function(res) {
				 console.log('request success'),
			     console.log(res.data),
				 console.log(res.statusCode),
				 console.dir(res.header),
				 thiz.setData({MultiTextBox1: { value : res.data , refresh : true}});
				 
			  },
			  complete: function(){
				console.log('request complete')  
			  },
			  fail: function(){
				console.log('request failed'),
				thiz.setData({MultiTextBox1: { value : "connect failed" , refresh : true}})  
			  }
			});
		}else if(e.target.id == "clean")
		{
			console.log("ready to clean"),
			thiz.setData({MultiTextBox1: { clear : true , refresh : true}});
		}

	}
};

Page(page);
