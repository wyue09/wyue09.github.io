define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');

	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();
			subModule.initialize();

		    $('#sidebar-menu .side-menu-li').on('click', function() {

		        if ($(this).is('.active')) {
	                $(this).removeClass('active');
	                $('ul', this).slideUp();
	            } else {
	                $('#sidebar-menu li').removeClass('active');
	                $('#sidebar-menu li ul').slideUp();
	                $(this).addClass('active');
	                $('ul', this).slideDown();
	            }
		    });

		},

		render:function(){
			$('#nav_container').empty();

			var data={
				'firstNav':[
					{'icon':'desktop',
					'firstNavname':'全部应用',
					'secondNav':[{'secondNavname':'网络加速','nav_link':'#/accelerate'},{'secondNavname':'未激活应用','nav_link':'#/inactive'}]
					},
					{'icon':'puzzle-piece',
					'firstNavname':'账户钱包',
					'secondNav':[{'secondNavname':'网络加速开通/续费','nav_link':'#/turnOn'}]
					},
					{'icon':'users',
					'firstNavname':'账户信息',
					'secondNav':[{'secondNavname':'基本信息','nav_link':'#/basic'},{'secondNavname':'认证信息','nav_link':'#/authorization'},{'secondNavname':'安全设定','nav_link':'#/safty'}]
					},
					{'icon':'gear',
					'firstNavname':'设置',
					'secondNav':[{'secondNavname':'设置1','nav_link':'#/settingA'},{'secondNavname':'设置2','nav_link':'#/settingB'}]
					}
				]};
			var nav = ich.nav_tmpl(data);
			$('#nav_container').append(nav);



		},
		remove:function(){
			$('#sidebar-menu .child_menu li').off('click');
			$('#sidebar-menu .first-level-li').off('click');
		}
	};
});
