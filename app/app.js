var app = angular.module('myApp', []);
app.controller('panelCtrl', function($scope) {
	
	$scope.sidebar = [
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

	$scope.headbar = [
		{
			"name":"Dropdown header",
			"img":"./2-header/header-dropdown/dropdown.png",
			"link":"https://albertwhite.github.io/web-design-trend/2-header/header-dropdown/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/2-header/header-dropdown/index.html"
		},
		{
			"name":"Parallax scroll headbar",
			"img":"./2-header/header-parallax-scroll/parallax.png",
			"link":"https://albertwhite.github.io/web-design-trend/2-header/header-parallax-scroll/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/2-header/header-parallax-scroll/index.html"
		},
		{
			"name":"Sticky headbar",
			"img":"./2-header/header-stickyheader/sticky.png",
			"link":"https://albertwhite.github.io/web-design-trend/2-header/header-stickyheader/",
			"code":"https://github.com/AlbertWhite/web-design-trend/blob/gh-pages/2-header/header-stickyheader/index.html"
		}
	];

	$scope.panels = $scope.sidebar;

	$scope.update = function(type){
		if(type == "headbar"){
			$scope.panels = $scope.headbar;
		}else if(type == "sidebar"){
			$scope.panels = $scope.sidebar;
		}
	};

	$scope.hover = function(){
		var src = this.panel.img;
		var new_src = src.substr(0,src.lastIndexOf("."))+".gif";
		this.panel.img = new_src;
	};

	$scope.leave = function(){
		var src = this.panel.img;
		var new_src = src.substr(0,src.lastIndexOf("."))+".png";
		this.panel.img = new_src;
	};

});