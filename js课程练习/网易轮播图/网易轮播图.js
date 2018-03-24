var js_slider = document.getElementById("js_slider");
var slider_ctrl =js_slider.children[1];
var slider = js_slider.children[0];
var slider_main=slider.children[0];
var imgs=slider_main.children;//拿到装图片的盒子
//创建span
for(var i=0;i<imgs.length;i++){
	var span = document.createElement("span");
	slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
	span.className="slider-ctrl-con";
	span.innerHTML=imgs.length - i;
	
}
//得到第一个span 设置样式
var spans = slider_ctrl.children;
//spans[1].className+=" current";//这里要有一个空格
spans[1].setAttribute("class","slider-ctrl-con current");

//得到盒子的宽度,即照片需走的距离
 var slider_width = js_slider.clientWidth;

 for(var i=1;i<imgs.length;i++){
 	imgs[i].style.left=slider_width+"px";
 }
 
// 遍历八个按钮
//now表示正位于盒子的照片
//放循环外面
var now = 0;
for(var k in spans){
	spans[k].onclick = function(){
		var that = this;
		if(this.className=="slider-ctrl-prev"){
			animate(imgs[now],{left:slider_width});
			now--;
			now = now < 0?imgs.length-1:now;
			imgs[now].style.left = -slider_width + "px";
			animate(imgs[now],{left:0});
		}
		else if(this.className == "slider-ctrl-next"){
			animate(imgs[now],{left:-slider_width});
			now++;
			now = now > imgs.length-1?0:now;
//			走到末尾了就让第一张排到末尾后面
			imgs[now].style.left = slider_width + "px";
			animate(imgs[now],{left:0})
		}
		else{
			//获得点击的小方块的索引号
			var index = this.innerHTML -1;
			//now为当前显示图片的索引号
			if(now < index){//相当于点击右键
				animate(imgs[now],{left:-slider_width});
				imgs[index].style.left = slider_width+"px";
			} 
			else if(now > index ){
				animate(imgs[now],{left:slider_width});
				imgs[index].style.left = -slider_width + "px";
			}
				now = index;
				animate(imgs[now],{left:0});
		}
			setSquare();
	}
}

function setSquare(){
	for(var i=1;i<spans.length-1;i++){
		spans[i].className = "slider-ctrl-con"
	}
		spans[now+1].className = "slider-ctrl-con current"
}

//定时器开始
var timer=null;
timer = setInterval(autoplay,3000)
	function autoplay(){
		animate(imgs[now],{left:-slider_width});
			now++;
			now = now > imgs.length-1?0:now;
//			走到末尾了就让第一张排到末尾后面
			imgs[now].style.left = slider_width + "px";
			animate(imgs[now],{left:0})
			setSquare();
	}

js_slider.onmouseover = function(){
	clearInterval(timer);
}
js_slider.onmouseout = function(){
	clearInterval(timer);
	timer = setInterval(autoplay,2000)
	
}
