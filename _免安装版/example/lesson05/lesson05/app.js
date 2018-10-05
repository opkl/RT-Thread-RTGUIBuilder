var app = {
page : "page1/page1",

onLaunch: function (event)  //app加载回调函数
{
    console.log('app onLaunch');
    var thiz = this;
    uart = pm.openSerialPort({port : "uart5", baud : 115200});    //打开串口设备uart5 波特率设置为 115200
    if (uart)
    {
        console.log('pm.openSerialPort OK');
        uart.write(Buffer(" pm.openSerialPort OK!!! ", 'ascii'));     //串口发送数据，一个ascii字符串数据BUFF
        uart.onData(function(e){thiz.onUart(e)});     //设置串口接收函
    }
},

onUart : function (data)    //串口接收数据回调函数，data 为串口数据
{
    console.log('Uart data : ', data.toString('hex'));  //以十六进制方式打印串口接收到的数据
    console.log('Data len : ', data.length);            //串口接收到的数据长度
    uart.write(Buffer(" onUart ", 'ascii'));
    this.onUpdate({type : 'uart', value : data});       //{type : 'uart', value : data} 对象广播到所有窗口的 onUpdate 函数
}
};

App(app);
