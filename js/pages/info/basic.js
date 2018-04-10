define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');

	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();

			$("[href='#/basic']").parent().addClass('current-page').siblings().removeClass('current-page');
			$("[href='#/basic']").parents('.child_menu').css('display','block');
			$("[href='#/basic']").parents('.side-menu-li').addClass('active');

		},


		render:function(){
			$('#title_container').empty();
			var data={'title_label':'基本信息'}
			var title = ich.title_tmpl(data);
			$('#title_container').append(title);

			$('#content_container').empty();
			var formdata={'form':[
				{'for':'','formItem':'用户ID','itemId':'userid','placeHolder':''},
				{'for':'','formItem':'昵称','itemId':'nickname','placeHolder':''},
				{'for':'','formItem':'用户名','itemId':'username','placeHolder':''},
				{'for':'','formItem':'邮箱','itemId':'email','placeHolder':''},
			]};

			var content=ich.content_tmpl4(formdata);
			$('#content_container').append(content);

		},
		remove:function(){

		}
	};
});
