function $(id){
	return document.getElementById(id);
}
//创建全局功能需要的组件
var clickElement=null;//用于存储被选定的元素，用于删除


//封装div单击事件
function divClick(){
var divs=document.getElementsByTagName("div");
for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(event){
		for(var j=0;j<divs.length;j++){
			divs[j].style.backgroundColor="";
		}
		this.style.backgroundColor="orange";
		event.stopPropagation();//阻止事件冒泡
		clickElement=this;
//		console.log(clickElement)
	}
}
}
//封装删除函数
		function removeElement(elem){
			if(elem.parentNode==document.body)
			{alert("再删除就没有啦");return;}
			elem.parentNode.removeChild(elem);
		}
//封装添加函数
		function addElement(){
			var elem=document.createElement('div');
			var val=$('addValue').value;
			if(val==""){alert("请输入div文本信息");return;}
			if(clickElement==null){alert("请选择元素");return;}
			elem.innerHTML=val;
			clickElement.appendChild(elem);
			$('addValue').value="";
			divClick();
		}
//遍历功能
var arr=[];//用于存储便利过的节点
var symbol=true;//声明 遍历控制符
//var searchArr=null;//封装查询数组；

function preorder(node){
	//遍历node的第一个子元素，如果有子元素，继续遍历第一个子元素，如果没有子元素则
	//便利他的兄弟元素，如果没有兄弟元素，则返回上一层
		if(node!==null){
//			console.log("success")
			arr.push(node);
			preorder(node.firstElementChild);
			if(node!==$('demo')){
				preorder(node.nextElementSibling);
			}
		}
}
		function postOrder(node){
		//广度遍历,数组追加当前节点，循环数组长度，数组【0】.的第一颗子元素，如果有子元素
		//则便利他的兄弟元素
		if(node){
			arr.push(node);
			var i=0;
			while(i<arr.length){
				var newnode=arr[i];
				var firstChild=newnode.firstElementChild;
				while(firstChild){
					arr.push(firstChild);
					firstChild=firstChild.nextElementSibling;
				}
				i++;
			}
		}
		}
		function sign(){
			if(symbol){
				symbol=false;
			}else{symbol=true};
		}
		
function display(fnn){//遍历显示数组中的元素
			if(symbol){
		switch(fnn){
			case 1:preorder($('demo'));
						break;
			case 2:postOrder($('demo'));
						break;
		}
			var old=null;
//			console.log(arr.length);
			symbol=false;
			for(var i=0;i<arr.length+1;i++){
			setTimeout(function(i){
					return  function(){
						if(arr.length==i){arr.length=0;symbol=true;}
						if(old!=null){
						old.style.background="white"};
						if(arr[i]==null){return;}
						arr[i].style.background="pink";
//					console.log('success')
						old=arr[i];
					}
			}(i),i*500)
				}
			}else{alert("正在执行中");}
			}

//console.log(arr);
//深度查找功能
				function preSearch(){
					//1、判断查找框是否为空
					if($('searchTxt').value!=""){
					Find(1);	
					}else{alert("查找内容不能为空！！！")}
				}
					function postSearch(){
					//1、判断查找框是否为空
					if($('searchTxt').value!=""){
					Find(2);	
					}else{alert("查找内容不能为空！！！")}
				}
				

function Find(fnn){//遍历显示数组中的元素
			if(symbol){
		switch(fnn){
			case 1:preorder($('demo'));
						break;
			case 2:postOrder($('demo'));
						break;
		}
			var old=null;
//			console.log(arr.length);
			symbol=false;
			for(var i=0;i<arr.length+1;i++){
			setTimeout(function(i){
					return  function(){
						if(arr.length==i){arr.length=0;symbol=true;}
						if(old!=null){
							var txt=old.innerText.split(" ");
						if(txt[0]==$('searchTxt').value){old.style.background="blue"}else{
						old.style.background="white"}};
						if(arr[i]==null){return;}
						arr[i].style.background="pink";
//					console.log('success')
						old=arr[i];
					}
			}(i),i*500)
				}
			}else{alert("正在执行中");}
			}












//事件绑定区域
divClick();//初始化 给所有div绑定事件
$("del").addEventListener("click",function(){removeElement(clickElement)},false);
$('add').addEventListener("click",addElement,false);
$('deepFirst').addEventListener('click',function(){
				display(1);
},false);
$('breadthFirst').addEventListener('click',function(){
				display(2);
},false);
$('deepS').addEventListener('click',preSearch,false);
$('breadthS').addEventListener('click',postSearch,false);
