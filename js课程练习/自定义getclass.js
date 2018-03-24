window.onload = function() {
	function getClass(classname) {
		if(document.getElementsByClassName) {
			return document.getElementsByClassName(classname);
		}
		var arr = [];
		var dom = document.getElementsByTagName("*");
		for(var i = 0; i < dom.length; i++) {
			if(dom[i].className == classname) {
				arr.push(dom[i]);
			}
		}
		return arr;
	}

}
