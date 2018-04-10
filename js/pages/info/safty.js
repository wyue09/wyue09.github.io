define(function(require,exports,module){
	require('jquery');
	require('bootstrap');
	require('custom');



	module.exports = {
		initialize:function(subModule){
			var that=this;
			that.render();

			$("[href='#/safty']").parent().addClass('current-page').siblings().removeClass('current-page');
			$("[href='#/safty']").parents('.child_menu').css('display','block');
			$("[href='#/safty']").parents('.side-menu-li').addClass('active');

		},


		render:function(){
			$('#title_container').empty();
			var data={'title_label':'安全设定'}
			var title = ich.title_tmpl(data);
			$('#title_container').append(title);

			$('#content_container').empty();

			var saftyData={'saftyA':[
				{'saftyImg':'images/lock.png','saftyText':'交易密码：任何资产类交易都需要输入二级交易密码','saftyLink':'','saftyBtn':'设置密码'},
				{'saftyImg':'images/phone.png','saftyText':'密保手机：用户密码修改时短信提示和密码是重置密码','saftyLink':'.bh-modal-phone','saftyBtn':'设置手机'},
				{'saftyImg':'images/mail.png','saftyText':'密保邮箱：密保邮箱是用户找回账号密码的重要手段','saftyLink':'.bh-modal-mail','saftyBtn':'设置邮箱'},
				{'saftyImg':'images/question-fill.png','saftyText':'密保问题：用于忘记密码或账号被盗时快速重置密码','saftyLink':'','saftyBtn':'设置密保'},
				{'saftyImg':'images/locate.png','saftyText':'异地登录：设置常登陆地有助于判断账号是否异常','saftyLink':'','saftyBtn':'设置地区'},
			]};

			var saftyMd={'saftyM':[
				{'modalNamea':'bh-modal-phone','modalTitlea':'设置密保手机','mtextTa':'手机号','mtextCa':'*******7890','mtextTb':'输入验证码','mtextCb':'获取验证码','modalNext':'.bh-modal-phone2',
				'modalNameb':'bh-modal-phone2','modalTitleb':'设置密保手机','mtextTc':'请输入新手机号','mtextTd':'输入验证码','mtextCd':'获取验证码'},
				{'modalNamea':'bh-modal-mail','modalTitlea':'设置密保邮箱','mtextTa':'电子邮箱','mtextCa':'siii****@gmail.com','mtextTb':'输入验证码','mtextCb':'获取验证码','modalNext':'.bh-modal-mail2',
				'modalNameb':'bh-modal-mail2','modalTitleb':'设置密保邮箱','mtextTc':'请输入新的邮箱','mtextTd':'输入验证码','mtextCd':'获取验证码'},
			]};



			var content=ich.content_tmpl6(saftyData);
			$('#content_container').append(content);
			var content2=ich.content_tmpl6(saftyMd);
			$('#content_container').append(content2);

		},
		remove:function(){

		}
	};
});
