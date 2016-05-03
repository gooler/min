
window.onload=function(){
	var box=$('.box');
	var docH=document.documentElement.clientHeight;
	var imgs=$('img');
	var arr=[];
	for(var i=0;i<box.length;i++){
		arr.push(box[i].offsetTop);		
	}
	
	window.onscroll=function(){
	var doc=document.body.scrollTop?document.body:document.documentElement;
		for(var i=0;i<box.length;i++){
			if(doc.scrollTop+docH>=arr[i]){
				for(var k=0;k<imgs.length;k++){
			imgs[k].src=imgs[k].getAttribute('all');
			// alert()
		}
		}
		}		
	}
		window.onscroll();
}
