var page = {
    str : ["", "", "", ""],
    str_i : 0,
    keyboard_i : "",

    onInput : function(e)
    {
        console.dir(e);
        var data = {};
        data["keyboard" + this.keyboard_i] = { hide : true};
        console.dir(data);
        /* pm.keyboard 接口用于操作键盘，用法类似 setData 接口 */
        pm.keyboard(data);
        
        if (e.target.id == "inputbox01")
        {
            this.str_i = 0;
            this.keyboard_i = "01";
            /* pm.keyboard 接口用于操作键盘，keyboard01 为对应键盘的自定义面板名称，position 为弹出键盘的左上角坐标 */
            pm.keyboard({keyboard01 : { hide : false, position : {x : 350, y : 100}, refresh : true}});
        }
        else if (e.target.id == "inputbox02")
        {
            this.str_i = 1;
            this.keyboard_i = "01";
            pm.keyboard({keyboard01 : { hide : false, position : {x : 50, y : 100}, refresh : true}});
        }
        else if (e.target.id == "inputbox03")
        {
            this.str_i = 2;
            this.keyboard_i = "02";
            pm.keyboard({displaybar : this.str[this.str_i]});
            pm.keyboard({keyboard02 : { hide : false, position : {x : 350, y : 60}, refresh : true}});
        }
        else if (e.target.id == "inputbox04")
        {
            this.str_i = 3;
            this.keyboard_i = "02";
            pm.keyboard({displaybar : this.str[this.str_i]});
            pm.keyboard({keyboard02 : { hide : false, position : {x : 350, y : 60}, refresh : true}});
        }
    },
    
    keyboard : function(e)  //键盘中Button的bindtap事件接收函数，命名固定为keyboard
    {
        console.dir(e);
        if (e.target.id == "num0")
        {
            this.str[this.str_i] = this.str[this.str_i] + '0'
        }
        else if (e.target.id == "num1")
        {
            this.str[this.str_i] = this.str[this.str_i] + '1'
        }
        else if (e.target.id == "num2")
        {
            this.str[this.str_i] = this.str[this.str_i] + '2'
        }
        else if (e.target.id == "num3")
        {
            this.str[this.str_i] = this.str[this.str_i] + '3'
        }
        else if (e.target.id == "num4")
        {
            this.str[this.str_i] = this.str[this.str_i] + '4'
        }
        else if (e.target.id == "num5")
        {
            this.str[this.str_i] = this.str[this.str_i] + '5'
        }
        else if (e.target.id == "num6")
        {
            this.str[this.str_i] = this.str[this.str_i] + '6'
        }
        else if (e.target.id == "num7")
        {
            this.str[this.str_i] = this.str[this.str_i] + '7'
        }
        else if (e.target.id == "num8")
        {
            this.str[this.str_i] = this.str[this.str_i] + '8'
        }
        else if (e.target.id == "num9")
        {
            this.str[this.str_i] = this.str[this.str_i] + '9'
        }
        else if (e.target.id == "num10")
        {
            this.str[this.str_i] = this.str[this.str_i] + '.'
        }
        else if (e.target.id == "num11")
        {
            this.str[this.str_i] = this.str[this.str_i].substring(0, this.str[this.str_i].length - 1);
        }
       
        if (e.target.id == "close")
        {
            var data = {};
            data["keyboard" + this.keyboard_i] = { hide : true};
            console.dir(data);
            pm.keyboard(data);
            this.setData({page1 : {refresh : true}});
        }
        else
        {
            var data = {};
            data["inputbox0" + (this.str_i + 1)] = { value : this.str[this.str_i], refresh : true};
            console.dir(data);
            this.setData(data);
            pm.keyboard({displaybar : {value : this.str[this.str_i], refresh : true}});
        }
    }
};

Page(page);

