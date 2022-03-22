//入口函数
window.addEventListener("load", function() {
    //获取元素
    var l_action = document.querySelector(".l_action");
    var r_action = document.querySelector(".r_action");
    var analytics = document.querySelector(".analytics");
    //轮播图显示
    analytics.addEventListener("mouseenter", function() {
        l_action.style.display = "block";
        r_action.style.display = "block";
        //鼠标经过暂停动画
        clearInterval(timer);
    });
    //轮播图隐藏
    analytics.addEventListener("mouseleave", function() {
        l_action.style.display = "none";
        r_action.style.display = "none";
        // 鼠标离开开始轮播
        timer = setInterval(function() {
                r_action.click();
            }, 2000)
            //动画函数
    });
    //装图片的盒子
    var ols = analytics.querySelector("ol");
    //底部按钮盒子
    var uls = analytics.querySelector("ul");
    //图片盒子个数
    var cirat = ols.children.length;
    //每一张图片的宽度
    var widths = ols.children[0].offsetWidth;
    // 遍历盒子个数
    for (var i = 0; i < cirat; i++) {
        var lis = document.createElement("li");
        uls.appendChild(lis);
        lis.setAttribute("index", i);
        // 为底部按钮添加点击事件
        lis.addEventListener("click", function() {
            for (var i = 0; i < uls.children.length; i++) {
                uls.children[i].className = "";

            };
            this.className = "clss";
            var index = this.getAttribute("index");
            rnum = index;
            circle = index
                //点击底部按钮切换
            animate(ols, -index * widths);
        })

    };
    uls.children[0].className = "clss";
    var rnum = 0;
    var circle = 0;
    // 为右侧点击按钮添加点击事件
    r_action.addEventListener("click", function() {
        // 标识到最后一张重新跳转
        if (rnum >= ols.children.length - 1) {
            ols.style.left = 0;
            rnum = 0;
        }
        rnum++
        // 添加动画函数
        animate(ols, -rnum * widths)
        circle++
        // 重新底部添加类样式
        if (circle == ols.children.length) {
            circle = 0;
        }
        for (var i = 0; i < uls.children.length; i++) {
            uls.children[i].className = "";
        }
        uls.children[circle].className = 'clss'
    });
    // /点击左侧按钮切换
    l_action.addEventListener("click", function() {
        if (rnum == 0) {
            rnum = ols.children.length - 1
            ols.style.left = -rnum * widths + "px";
        }
        rnum--
        // 添加动画
        animate(ols, -rnum * widths);
        circle--
        // 重新底部添加类样式
        if (circle < 0) {
            circle = ols.children.length - 1;
        }
        for (var i = 0; i < uls.children.length; i++) {
            uls.children[i].className = "";
        }
        uls.children[circle].className = 'clss'
    });
    // 手动调用事件
    var timer = this.setInterval(function() {
            r_action.click();
        }, 2000)
        //动画函数
    function animate(element, target, callback) {
        setInterval(element.timer);
        element.timer = setInterval(function() {
            var step = (target - element.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //判断动画结束的标志 到达目标位置停止计时器
            if (element.offsetLeft >= target) {
                clearInterval(element.timer);
                if (callback) {
                    callback()
                }
            }
            element.style.left = target + 'px';
        }, 15)
    }
});