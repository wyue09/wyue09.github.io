define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');

	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();

			$("[href='#/inactive']").parent().addClass('current-page').siblings().removeClass('current-page');
			$("[href='#/inactive']").parents('.child_menu').css('display','block');
			$("[href='#/inactive']").parents('.side-menu-li').addClass('active');
		},


		render:function(){
			$('#title_container').empty();
			var data={'title_label':'未激活应用'}

			var title = ich.title_tmpl(data);
			$('#title_container').append(title);
			$('#content_container').empty();
			var content=ich.content_tmpl2();
			$('#content_container').append(content);

		},
		remove:function(){

		}
	};
});
