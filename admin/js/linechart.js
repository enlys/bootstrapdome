

// var ctx = document.getElementById("#canvas").getContext('2d');


//设置数据内容
var lineChartData = {
    //设置图标中X轴显示内容
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    //设置图标中的数据
    datasets: [
        {
            //数据标签
            label: "用户量",
            //统计表的背景颜色(先与X轴间区域的颜色)
            fillColor: "rgba(0,0,255,0.5)",
            //统计表画笔颜色(线的颜色)
            strokeColor: "rgba(255,0,0,1)",
            //点的颜色
            pointColor: "rgba(155,39,39,1)",
            //点的边框颜色
            pointStrokeColor: "#f60",
            //鼠标触发时点的颜色
            pointHighlightFill: "#fff",
            //鼠标触发时点边框的颜色
            pointHighlightStroke: "#000",
            //Y轴坐标
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "发帖数",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [10, 48, 40, 19, 86, 27, 90]
        },
        {
            label: "访客数",
            fillColor: "rgba(120,255,10,0.5)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [10, 35, 3, 30, 86, 48, 50]
        }
    ]
};


//


$(function () {
    //获得元素或上下文后
    var ctx = document.getElementById('canvas');

    //实例化预定义的图表类型或创建自己的图表类型
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
        // options: options
    });
});




























