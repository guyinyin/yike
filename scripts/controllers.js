//该文件用于存放控制器
//创建一个独立的模块,该模块的作用就是创建不同的控制器,
//方便其他模块之间使用
angular.module("Ctrls",[])
//创建控制器navs,模拟导航栏数据
.controller("navs",["$scope",function($scope){
	$scope.navs = [
		{"href":"#/index","icon":"icon-home","text":"今日一刻"},
		{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"href":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"href":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"href":"#/settings","icon":"icon-cog","text":"设置"}
	];
}])

//index 控制器
.controller("indexCtrl",["$scope","$rootScope","$filter",function($scope,$rootScope,$filter){
	$rootScope.num = 0;
	var time=new Date();
	$scope.time=$filter("date")(new Date(),"yyyy-MM-dd");
	$rootScope.timeStr=$filter("date")(time,"yyyy-MM-dd");
	$rootScope.title = "今日一刻";
}])