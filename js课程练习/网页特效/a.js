//网页滚动距离函数
function returnTop(){
//		不可以直接写成if(window.pageYOffset) 因为刚加载时window.pageYOffset==0
// window.pageYOffset可以支持ie9和其他任何浏览器包括没声明DTD文件
		if(window.pageYOffset!=null){
			return {
				top:window.pageYOffset,
				left:window.pageXOffset
			}
		}
		//判断是否声明DTD
		else if(document.compatMode =="CSS1Compat"){
//			已经声明
			return {
				top:document.documentElement.scrollTop,
				left:document.documentElement.scrollLeft
			}
		} 
			return {
				top:document.body.scrollTop,
				left:document.body.scrollLeft
			}
	}
//网页改变大小函数
	function returnWidth(){
		if(window.innerWidth != null){
			return {
				width:window.innerWidth,
				height:window.innerHeight
			}
		}else if(document.compatMode == "CSS1Compat"){
			return {
				width:document.documentElement.clientWidth,
				height:document.documentElement.clientHeight
			}
		}
			return{
				width:document.body.clientWidth,
				height:document.body.clientHeight
			}
	}

function $(id){
	return document.getElementById(id);
}
