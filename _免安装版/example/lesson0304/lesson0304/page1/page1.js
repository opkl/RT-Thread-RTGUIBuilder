var page = {
    onLoad : function()
    {
        var thiz = this;

        setInterval(function()
        {
            console.log('timeout');
            thiz.setData({card1 : {next : true}})
        }, 2000);
    }
};

Page(page);
