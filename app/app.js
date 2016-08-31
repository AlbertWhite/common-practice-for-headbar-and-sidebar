var app = angular.module('myApp', []);
app.controller('panelCtrl', function($scope) {
	
	$scope.panels = [
		{
			"name":"Hidden Sidebar",
			"img":"./1-sidebar/sidebar-hidden/hidden.png",
			"link":"https://albertwhite.github.io/web-design-trend/1-sidebar/sidebar-hidden/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/1-sidebar/sidebar-hidden/index.html"
		},
		{
			"name":"Bootstrap Sidebar",
			"img":"./1-sidebar/sidebar-bootstrap/bootstrap.png",
			"link":"https://albertwhite.github.io/web-design-trend/1-sidebar/sidebar-bootstrap/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/1-sidebar/sidebar-bootstrap/index.html"
		},
		{
			"name":"Bootstrap Customized Sidebar",
			"img":"./1-sidebar/sidebar-bootstrap-customize/customize.png",
			"link":"https://albertwhite.github.io/web-design-trend/1-sidebar/sidebar-bootstrap-customize/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/1-sidebar/sidebar-bootstrap-customize/index.html"
		},
		{
			"name":"Sidebar item collapse",
			"img":"./1-sidebar/sidebar-collapse/collapse.png",
			"link":"https://albertwhite.github.io/web-design-trend/1-sidebar/sidebar-collapse/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/1-sidebar/sidebar-collapse/index.html"
		},
		{
			"name":"Sidebar item collapse",
			"img":"./1-sidebar/sidebar-li-animation/animation.png",
			"link":"https://albertwhite.github.io/web-design-trend/1-sidebar/sidebar-li-animation/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/1-sidebar/sidebar-li-animation/index.html"
		},
		{
			"name":"Multiple level sidebar",
			"img":"./1-sidebar/sidebar-multiple-level/multilevel.png",
			"link":"https://albertwhite.github.io/web-design-trend/1-sidebar/sidebar-multiple-level/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/1-sidebar/sidebar-multiple-level/index.html"
		}




	];



});