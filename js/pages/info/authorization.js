define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');
	require('inputFile');
	require('fileupload');

	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();

			$("[href='#/authorization']").parent().addClass('current-page').siblings().removeClass('current-page');
			$("[href='#/authorization']").parents('.child_menu').css('display','block');
			$("[href='#/authorization']").parents('.side-menu-li').addClass('active');

		},


		render:function(){
			$('#title_container').empty();
			var data={'title_label':'认证信息'}
			var title = ich.title_tmpl(data);
			$('#title_container').append(title);

			$('#content_container').empty();
			var formdata={'form':[
				{'for':'','formItem':'微信','itemId':'','placeHolder':''},
				{'for':'','formItem':'支付宝','itemId':'','placeHolder':''},
				{'for':'','formItem':'联系人姓名','itemId':'','placeHolder':''},
				{'for':'','formItem':'联系人身份证号','itemId':'','placeHolder':''},
				{'for':'','formItem':'联系人地址','itemId':'','placeHolder':''},
				{'for':'','formItem':'手机号码','itemId':'','placeHolder':''},
			],'formId':[
				{'idLabel':'身份证扫描或拍照 (正面)'},
				{'idLabel':'(背面)'},
				{'idLabel':'手持身份证拍照 (正面)'}
			]
		};

			var content=ich.content_tmpl5(formdata);
			$('#content_container').append(content);

		},
		remove:function(){

		}
	};
});
