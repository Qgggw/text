// function getStyle(obj, attr){
// 	if(obj.currentStyle){
// 		return obj.currentStyle[attr];
// 	} else {
// 		return getComputedStyle(obj, null)[attr];
// 	}
// }
// function animate(obj,json,callback){
// 	clearInterval(obj.timer);
// 	obj.timer = setInterval(function(){
// 		var isStop = true;
// 		for(var attr in json){
// 			var now = 0;
// 			if(attr == 'opacity'){
// 				now = parseInt(getStyle(obj,attr)*100);
// 			}else{
// 				now = parseInt(getStyle(obj,attr));
// 			}
// 			var speed = (json[attr] - now) / 8;
// 			speed = speed>0?Math.ceil(speed):Math.floor(speed);
// 			var cur = now + speed;
// 			if(attr == 'opacity'){
// 				obj.style[attr] = cur / 100;
// 			}else{
// 				obj.style[attr] = cur + 'px';
// 			}
// 			if(json[attr] !== cur){
// 				isStop = false;
// 			}
// 		}
// 		if(isStop){
// 			clearInterval(obj.timer);
// 			callback&&callback();
// 		}
// 	}, 30)
// }


// function animate(element, target) {
//     clearInterval(element.timeId);
//     //定时器的id值存储到对象的一个属性中
//     element.timeId = setInterval(function() {
//         //获取元素的当前的位置,数字类型
//         var current = element.offsetLeft;
//         //每次移动的距离
//         var step = 10;
//         step = current < target ? step : -step;
//         //当前移动到位置
//         current += step;
//         if (Math.abs(current - target) > Math.abs(step)) {
//             element.style.left = current + "px";
//         } else {
//             //清理定时器
//             clearInterval(element.timeId);
//             //直接到达目标
//             element.style.left = target + "px";
//         }
//     }, 20);
// }
// function animate(obj, target) {
//     //元素只有
//     clearInterval(obj.timer);

//     obj.timer = setInterval(function() {
//         //步长值
//         var step = (target - obj.offsetLeft) / 10;
//         if (obj.offsetLeft >= target) {
//             clearInterval(time);
//         } else {
//             obj.style.left = obj.offsetLeft + step + 'px';
//         }
//     }, 30);
// }




























// function getStyle(obj, attr){
// 	if(obj.currentStyle){
// 		return isNaN(parseFloat(obj.currentStyle[attr])) ? obj.style[attr]=0 : obj.currentStyle[attr];
// 	} else {
// 		return isNaN(parseFloat(getComputedStyle(obj, null)[attr])) ? obj.style[attr]=0 : getComputedStyle(obj, null)[attr];
// 	}
// }

// function animate(obj,json,callback){
// 	if(obj.isMoving){
// 		return;
// 	}else{
// 		obj.isMoving = true;
// 	}
// 	var a=0,b=0;
// 	for(var attr in json){
// 		a++;
// 		(function(attr){
// 			var timer = setInterval(function(){
// 				var now = 0;
// 				if(attr == 'opacity'){
// 					now = parseInt( parseFloat(getStyle(obj,attr)) * 100 );
// 				}else{
// 					now = parseInt( getStyle(obj,attr) );
// 				}
// 				var speed = ( json[attr] - now ) / 6;
// 				speed = speed>0?Math.ceil(speed):Math.floor(speed);
// 				if(now == json[attr]){
// 					clearInterval(timer);
// 					b++;
// 					if(a==b){
// 						callback&&callback();
// 						obj.isMoving = false;
// 					}
// 				}else{
// 					if(attr == 'opacity'){
// 						obj.style.opacity = ( now + speed ) / 100;
// 					}else{
// 						obj.style[attr] = now + speed + 'px';
// 					}
// 				}
// 			},30);
// 		})(attr);

// 	}
// }