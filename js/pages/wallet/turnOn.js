define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');
	require('radio_special');

	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();

			$("[href='#/turnOn']").parent().addClass('current-page').siblings().removeClass('current-page');
			$("[href='#/turnOn']").parents('.child_menu').css('display','block');
			$("[href='#/turnOn']").parents('.side-menu-li').addClass('active');

			$(function(){
	      $(':input').labelauty();
	    });

		},


		render:function(){
			$('#title_container').empty();
			var data={'title_label':'付款中心'}
			var title = ich.title_tmpl(data);
			$('#title_container').append(title);

			$('#content_container').empty();

			var radioData={
				'radioA':[
					{'radioLabel':'充值时间：',
					'radioB':[{'itemClass':'','radioName':'radio','radioItem':'一个月'},{'itemClass':'','radioName':'radio','radioItem':'一季度<i>9.5折</i>'},{'itemClass':'','radioName':'radio','radioItem':'半年<i>8.5折</i>'},{'itemClass':'','radioName':'radio','radioItem':'半年<i>8.5折</i>'}]
					},
					{'radioLabel':'加速类型：',
					'radioB':[{'itemClass':'','radioName':'radio2','radioItem':'北美及日韩线路'},{'itemClass':'','radioName':'radio2','radioItem':'中国大陆线路'},{'itemClass':'','radioName':'radio2','radioItem':'综合线路'}]
					},
					{'radioLabel':'充值方式：',
					'radioB':[{'itemClass':'wechat','radioName':'radio3','radioItem':'微信扫码'},{'itemClass':'alipay','radioName':'radio3','radioItem':'支付宝扫码'},{'itemClass':'bank','radioName':'radio3','radioItem':'网上银行'}]
					}

				]};


			var content=ich.content_tmpl3(radioData);
			$('#content_container').append(content);

		},
		remove:function(){

		}
	};
});
