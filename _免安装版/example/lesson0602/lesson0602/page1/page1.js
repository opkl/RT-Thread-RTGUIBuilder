
var json_obj =0;
var page = {

	data : {timer : 0},
	
	onSetData : function(e)
	{
		var k=10000000;
		var data ={};
		for(var i=8,j=e; i>0 ;i--)
		{
			data['number'+i] = {value: parseInt(j/k)+".png",refresh:true};
			this.setData(data);
			j=j%k;
			k=k/10;
		}
	},
	
	onUpdate : function(){
		this.onSetData(json_obj.sk_info.date);
		this.setData({temp : {value : json_obj.sk_info.temp , refresh : true}});
		this.setData({wind : {value : json_obj.sk_info.wd , refresh : true}});
		this.setData({windlevel : {value : json_obj.sk_info.ws , refresh : true}});
		this.setData({humidity : {value : json_obj.sk_info.sd , refresh : true}});
	},
	
	getSkyInfo: function(e) {
		var thiz = this;
		var str =0;
		
		var rq1 = pm.request({
			  url: 'http://mobile.weather.com.cn/data/sk/101010100.html?_=1381891661455', 
			  method : 'GET',
			  header:{
			      "Content-Type":"application/json"
			  },
			  success: function(res) {
			     str = res.data.toString('utf8');
			     json_obj=JSON.parse(str);
				 thiz.onUpdate();
			  },
			  fail: function(){
				console.log('request failed')
			  }
			});
	},
	
	onLoad : function(e) {
		var thiz = this;
		this.data.timer = setInterval(function()
        {
        	console.log("update sky info");
            thiz.getSkyInfo();
        }, 1000 * 10);
	}	
};

Page(page);
