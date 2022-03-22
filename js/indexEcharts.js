window.addEventListener("load", function() {
    var ajax = new XMLHttpRequest();
    ajax.open('get', 'https://edu.telking.com/api/?type=month');
    ajax.send();

    ajax.onreadystatechange = function() {
        // 为了保证 数据 完整返回，我们一般会判断 两个值
        if (ajax.readyState == 4 && ajax.status == 200) {
            // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
            // 数据是保存在 异步对象的 属性中
            var responses = JSON.parse(ajax.responseText);
            var series = responses.data.series;
            var xAxis = responses.data.xAxis;
            // 修改页面的显示
            ajaxs(series, xAxis);

        }
    }

    function ajaxs(series, xAxis) {
        var myChart = echarts.init(document.querySelector('.pageview'));
        var option = {
            title: {
                text: "曲线数据图展示",
                textStyle: {
                    color: "#333",
                    fontSize: "22px"
                },
                left: 'center',
                top: "15"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxis
            },
            yAxis: {
                type: 'value',
                show: true
            },
            series: [{
                data: series,
                type: 'line',
                smooth: true,
                areaStyle: {
                    opacity: 0.3
                },
                itemStyle: {
                    normal: {
                        label: { show: true }
                    }
                }
            }]
        };
        myChart.setOption(option);

        (function() {
            var myChart = echarts.init(document.querySelector('.market_l'));
            var option = {
                title: {
                    text: '饼状图数据展示',
                    left: 'center',
                    top: "15"
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [{
                    name: '星期',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Fri' },
                        { value: 735, name: 'sat' },
                        { value: 580, name: 'sun' },
                        { value: 484, name: 'Mon' },
                        { value: 300, name: 'Tue' },
                        { value: 200, name: 'Wed' },
                        { value: 100, name: 'Thu' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
            myChart.setOption(option);
        })();

        (function() {
            var myChart = echarts.init(document.querySelector('.market_r'));
            var option = {
                title: {
                    text: "柱状图数据展示",
                    left: 'center',
                    top: "15"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '商品数',
                    nameTextStyle: {
                        color: "black",
                        fontSize: "16"
                    }
                }],
                series: [{
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: [2, 3, 6, 8, 13, 5, 9]
                }]
            };
            myChart.setOption(option);
        })()
    }

})

// ['01/26', '01/28', '01/30', '02/01', '02/03', '02/05', '02/07', '02/09', '02/11', '02/13', '02/15', '02/17', '02/19', '02/21', '02/23']