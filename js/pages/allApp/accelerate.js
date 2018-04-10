define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');

	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();

			$("[href='#/accelerate']").parent().addClass('current-page').siblings().removeClass('current-page');
			$("[href='#/accelerate']").parents('.child_menu').css('display','block');
			$("[href='#/accelerate']").parents('.side-menu-li').addClass('active');
		},


		render:function(){
			$('#title_container').empty();
			var data={'title_label':'网络加速'}
			var title = ich.title_tmpl(data);
			$('#title_container').append(title);

			$('#content_container').empty();
			var internetData={
				'internetA':[
					{
					'internetB':[{'label':'我的账号：','labelText':'844321444@qq.com'},
											{'label':'加速等级：','labelText':'普通','link':'立即升级'},
											{'label':'可用时间：','labelText':'每天累计30分钟'},
											{'label':'各地区可用连接数：','labelText':'美国/USA(1)','labelText2':'美国/USA(1)','labelText3':'美国/USA(1)'}]
					},
					{
					'internetB':[{'label':'注册时间：','labelText':'2017-10-01 19:12:58'},
											{'label':'累计活跃天数：','labelText':'53天'},
											{'label':'注册IP：','labelText':'192.168.1.1'},
											{'label':'注册地区：','labelText':'山东省青岛市'}]
					}
				]};

			var content=ich.content_tmpl(internetData);
			$('#content_container').append(content);

		},
		remove:function(){

		}
	};
});
