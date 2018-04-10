var title_portal = "Automation Portal";
var content_welcome = "Welcome";
var langMap ={};
define(function(require,exports,module){
	module.exports={
		initLang:function(){
			console.log(lang);
			lang='CN';
			if(lang=='CN'){
				title_portal = "短信群发平台";
				content_welcome = "欢迎使用";
				langMap['Phone Number']="手机号码";
				langMap['Import Phone Number']="导入号码";
				langMap['Manage Phone Number']="手机号码管理";
				langMap['Import Task']="列表方式发送";
				langMap['New Password']="新密码";
				langMap['Price Levels']="价格等级";
				langMap['Daily Consumption']="用户费用使用走势";
				langMap['User Consumption Pie']="用户费用使用分布";
				langMap['Consumption']="消费";
				langMap['Short Message']="短信群发";
				langMap['Reader']="接收者";
				langMap['unread']="未读";
				langMap['read']="已读";
				langMap['Read Time']="阅读时间";
				langMap['News List']="信息列表";
				langMap['Manage News']="消息管理";
				langMap['User Basic Info']="基本信息";
				langMap['User Discount']="用户返利";
				langMap['User Discount List']="用户返利列表";
				langMap['Discount Price']="返利价格";
				langMap['Discount Amount']="返利总额";
				langMap['Sent Cost']="消费总额";
				langMap['Discount Log']="返利记录";
				langMap['Discount Time']="返利时间";
				langMap['Discount User']="执行者";
				
				langMap['Daily Sent SMS']="用户发送短信走势";
				langMap['User Sent SMS Pie']="用户发送短信分布";
				langMap['Sent SMS']="发送短信";
				langMap['User Stats']="用户统计";
				langMap['Edit Message']="修改短信";
				
				langMap['Daily Import Phone']="用户导入数据走势";
				langMap['User Import Phone Pie']="用户导入数据分布";
				langMap['Import Phone']="导入数据";
				langMap['View Send Message Task Stats']="短信状态统计";
				
				langMap['Message']="号码管理";
				langMap['yes']="是";
				langMap['no']="否";
				langMap['nosend']="未发送";
				langMap['View']="查看";
				langMap['Stats']="统计";
				langMap['Export']="导出";
				langMap['Cost']="费用";
				langMap['Send Message']="短信发送";
				langMap['Simple Send']="短信发送";
				langMap['Message Template']="短信模板";
				langMap['Message Task']="发送列表";
				langMap['SMS Overview']="统计报告";
				langMap['Update Time']="更新时间";
				langMap['Price']="价格";
				langMap['Level']="等级";
				langMap['Price Level List']="价格等级列表";
				langMap['Edit Price Level']="编辑价格";
				langMap['edit price level']="编辑价格";
				langMap['Add Price Level']="新建价格等级";
				
				langMap['Analysis']="统计";
				langMap['reset password']="修改密码";
				langMap['Phone Number Analysis']="号码统计";
				langMap['Message Analysis']="短信发送统计";
				langMap['Failed Rate']="失败率";
				
				langMap['API']="API管理";
				langMap['User']="用户";
				langMap['API History']="API调用历史";
				langMap['Cost History']="费用列表";
				langMap['SMS Price']="单价";
				langMap['add a phone']="添加手机号";
				
				
				langMap['Settings']="设置";
				langMap['Reset Password']="密码重置";
				langMap['Log Out']="退出登录";
				langMap['Manage User']="用户管理";
				langMap['Manage Role']="权限管理";
				
				langMap['Phone Number Category']="新建分类";
				
				langMap['TaskID']="任务编号";
				langMap['Filename']="文件名";
				langMap['Phone Count']="手机总数";
				langMap['Valid Count']="有效数";
				langMap['Invalid Count']="无效数";
				langMap['Duplicate Count']="重复数";
				langMap['Start Time']="开始时间";
				langMap['End Time']="结束时间";
				langMap['Status']="状态";
				
				langMap['Delete']="删除";
				langMap['Select All']="全选";
				langMap['Diselect All']="取消全选";
				langMap['ISP']="运营商";
				langMap['Province']="省份";
				langMap['City']="城市";
				langMap['Category']="分类";
				langMap['Importer']="导入者";
				langMap['Import Time']="导入时间";
				langMap['Send Times']="发送次数";
				
				
				langMap['Mark']="标记";
				langMap['Change Category']="修改分类";
				langMap['add a tag']="添加标记";
				langMap['Creater']="创建者";
				langMap['Create Time']="创建时间";
				
				langMap['Phone Number Category Distribution']="手机号码标记分布";
				langMap['Count']="数量";
				langMap['Actions']="管理";
				langMap['Create Time']="创建时间";
				
				langMap['Next']="下一步";
				langMap['Previous']="上一步";
				langMap['Finish']="发送";
				
				langMap['Phone Number Selection Confirmation']="确认要发送的手机号码";
				langMap['You selected ']="你选择了";
				langMap[' phone numbers to send message, please confirm.']="个手机号码发送短信，请确认。";
				
				langMap['Cancel']="取消";
				langMap['Confirm']="确认";
				langMap['OK']="确认";
				
				langMap['Message Templates']="短信模板";
				langMap['Title']="标题";
				langMap['Content']="内容";
				langMap['Add Template']="添加短信模板";
				
				
				langMap['Send Message Tasks']="发送任务";
				langMap['Platform']="发送平台";
				langMap['Message Content']="短信内容";
				langMap['Phone Numbers']="手机号码";
				langMap['Phone Number Count']="手机号码数量";
				langMap['Task Details']="任务详情";

				langMap['View Sent Phone Numbers']="查看发送号码";
				langMap['View Task Details']="查看任务详情";
				langMap['No Balance']="余额不足";
				
				langMap['Please Select at Least One Message Tempalte']="请选择短信模板进行发送";
				langMap['Select at least one message tempalte, if there is no message template created yet, please click on "+" button to craete one!']="至少选择一个短信模板进行发送，如果未创建模板，请点击“+”进行添加。";
				
				langMap['Default']="默认";
				langMap['Overview']="概况";
				langMap['Phone Overview']="号码发送统计";
				langMap['Delivery Time']="到达时间";
				
				langMap['sending']="状态未更新";
				langMap['delivered']="发送成功";
				langMap['failed']="发送失败";
				langMap['rejected']="运营商拒绝";
				langMap['accepted']="运营商接收";
				langMap['unknown']="未知错误";
				langMap['Inbox']="系统信息";
				langMap['Menu List']="菜单管理";
				langMap['Sent Count']="已发送";
				langMap['Delivery Rate']="送达率";
				langMap['Balance (RMB)']="余额";
				
				
				langMap['Sent SMS ISP Distribution']="已发送短信运营商分布";
				langMap['Sent SMS Status Distribution']="已发送短信状态分布";
				langMap['Sent SMS Error Distribution']="已发送短信错误分布";
				
				langMap['SMS Fallback Rate']="短信回调率";
				langMap['The rate of SMS count get fallback status']="发送短信后，收到状态回调的比率";
				langMap['Phone Number Sent Times Distribution']="手机号码发送次数分布";
				langMap['Phone Number City Rank']="手机号数量城市排名";
				langMap['Phone Number Area Distribution']="手机号码地区分布";
				langMap['Block Phone']="加入黑名单";
				langMap['Blocked Phone']="手机号码黑名单";
				langMap['Blocked Count']="黑名单手机数";
				
				langMap['Sent SMS Count']="已发送短信数量";
				langMap['SMS Delivery Rate']="短信发送成功率";
				langMap['SMS Failed Rate']="短信发送失败率";
				langMap['The rate of delivery SMS']="发送成功的短信的占比";
				langMap['The rate of failed SMS']="发送失败的短信的占比";
				langMap['The count of phone numbers']="已导入系统中的手机号码数量";
				langMap['The count of sent SMS']="总共发送的短信数量";
				langMap['Sent SMS Area Distribution']="已发送短信区域分布图";
				langMap['Failed Times']="失败次数";
				langMap['SMS Status']="短信发送结果";
				langMap['Error Category']="错误分类";
				langMap['API Overview']="接口概况";
				
				langMap['Discard Failed Phone Numbers']="去除之前发送失败的手机号";
				langMap['In the phone numbers you selected, there are ']="在选择的手机号码中，有";
				langMap[' phone numbers sent the message failed before, are you want to discard these phone numbers or keep them?']="个手机号码在之前发送短信时发送失败，或者尚未收到发送结果回执。为了提高短信发送的成功率，建议去除这些手机号码。你希望去除它们还是保留它们？";
				
				
				langMap['Discard']="去除";
				langMap['Keep']="保留";
				
				langMap['sms_error_1']="未知错误";
				langMap['sms_error_2']="消息无法送达（停机、关机、无信号等";
				langMap['sms_error_3']="号码已停止使用或无效号码";
				langMap['sms_error_4']="用户拒收短信";
				langMap['sms_error_5']="信息被运营商拒绝";
				langMap['sms_error_99']="其他运营商错误";
				
				
				langMap['Super Admin']="超级管理员";
				langMap['Admin']="管理员";
				langMap['Agent']="代理";
				
				langMap['Enable']="启用";
				langMap['Enabled']="可用的";
				langMap['Disable']="禁用";
				langMap['Disabled']="不可用的";
				langMap['Selected']="选中";
				langMap['Sender']="发送者";
				
				langMap['Third Party API']="第三方短信平台";
				langMap['View Send Message Task Detail']="短信发送详情";
				langMap['Message Category']="信息分类";
				
				langMap['User Name']="用户名";
				langMap['Role']="角色";
				langMap['SMS Price']="短信发送单价";
				langMap['Balance']="账户余额";
				langMap['Deposit Amount']="充值总额";
				langMap['Import Phone Count']="导入数据量";
				langMap['Success SMS Count']="发送成功数量";
				langMap['Contact Info']="负责人联系方式";
				langMap['APIs']="开发接口";
				langMap['User List']="用户列表";
				langMap['edit user']="编辑用户";
				langMap['delete user']="删除用户";
				langMap['deposit']="充值";
				langMap['Deposit']="充值";
				langMap['Add User']="添加用户";
				langMap['Password']="密码";
				langMap['Deposit Value']="充值数额";
				langMap['Deposit Log']="充值记录";
				langMap['Deposit Time']="充值时间";
				langMap['Deposit Account']="充值账号";
				langMap['Balance Before']="充值前余额";
				langMap['Balance After']="充值后余额";
				langMap['User Info']="用户信息";
				langMap['Profile']="用户信息";
				langMap['Deposit Action']="操作";
				langMap['The balance of current user']="当前用户的账户余额";
				
				langMap['Percentage']="百分比";
				langMap['SMS Count']="短信数量";
				
				langMap['Export File List']="导出文件列表";
				langMap['File Name']="文件名";
				langMap['Export Time']="导出时间";
				langMap['Downloaded Times']="下载次数";
				langMap['Download']="下载";
				langMap['Total Sent Count']="总发送数";
				langMap['Succeed Count']="成功数";
				langMap['Failed Count']="失败数";
				langMap['Succeed Rate']="成功率";
				
			}
		}	
	}
});




function mapLang(str){
	if(langMap[str] != undefined){
		return langMap[str];
	}else{
		return str;
	}
}
