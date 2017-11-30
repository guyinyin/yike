// 创建应用模块
var app = angular.module("yike",["Ctrls","ngRoute"]);
//run方法的作用是在模块创建好之后直接执行
//因为toggle切换页面的方法对所有页面都有效,所以将该方法绑定在根作用域上
app.run(["$rootScope",function($rootScope){
	//在根目录绑定collapse属性,初始值为false,
	//表示navs header body 没有弹出
	$rootScope.collapsed = false;
	//绑定toggle方法:点击菜单,页面来回切换
	$rootScope.toggle=function(){
		$rootScope.collapsed=!$rootScope.collapsed;
		//将导航栏的小标题添加显示和隐藏效果
		//获取所有的dd
		var dds = document.querySelectorAll("dd");
		//循环遍历每一个dd,修改dd的样式,达到显示隐藏的效果
		if ($rootScope.collapsed) {
			//如果这个值为true,表示显示
			//遍历每一个dd,显示
			for(var i = 0;i < dds.length;i++){
				//设置位置的移动
				dds[i].style.transform = "translate(0)";
				//时间差
				dds[i].style.transitionDuration = (i+2)*0.15+"s";
			}
		}else{
			//这个值为false,表示隐藏
			for(var i = 0;i < dds.length;i++){
			dds[i].style.transform = "translate(-100%)";
			dds[i].style.transitionDuration = (dds.length-i)*0.15+"s";
			}
		}
	}
}]);
// 修改angularJS路由锚点错误的bug
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}])
//配置路由
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		redirectTo:"/index"
	}).when("/index",{
		templateUrl:"./views/list.html",
		controller:"indexCtrl"
	}).when("/older",{
		templateUrl:"./views/older.html"
	}).when("/author",{
		templateUrl:"./views/author.html"
	}).when("/category",{
		
	}).when("/favourite",{
		
	}).when("/settings",{
		
	}).otherwise({
		redirectTo:"/index"
	})
}])