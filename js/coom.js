window.addEventListener("load", function() {
    var ul = document.querySelector(".list");
    var lists = ul.getElementsByTagName("li");
    var spans = ul.querySelector("span");
    // 对导航进行TAB栏切换
    for (var i = 0; i < lists.length; i++) {
        lists[i].setAttribute("index", i);
        // 每个Li添加点击事件
        lists[i].onclick = function() {
            for (var j = 0; j < spans.length; j++) {
                this.classname = "";
            };
            this.classname = "overspan";
            var num = this.getAttribute("index");
            // 根据自定义属性索引，标识下划线滑动位置
            if (num == 0) {
                spans.style.left = "0px";
            } else if (num == 1) {
                spans.style.left = "105px";
            } else if (num == 2) {
                spans.style.left = "192px";
            } else if (num == 3) {
                spans.style.left = "283px";
            } else if (num == 4) {
                spans.style.left = "368px";
            };
        };
        lists[i].onmousemove = function() {
            for (var j = 0; j < spans.length; j++) {
                this.classname = "";
            };
            this.classname = "overspan";
            var num = this.getAttribute("index");
            // 根据自定义属性索引，标识下划线滑动位置
            if (num == 0) {
                spans.style.left = "0px";
            } else if (num == 1) {
                spans.style.left = "105px";
            } else if (num == 2) {
                spans.style.left = "192px";
            } else if (num == 3) {
                spans.style.left = "283px";
            } else if (num == 4) {
                spans.style.left = "368px";
            };
        };
    }
})