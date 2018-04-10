// import push service
function phoneImportMsg(msg){
	console.log(window.page);
	if(window.page == "import_task"){
		if(msg == "import finish"){
			$('#importTaskTable').bootstrapTable('refresh');
		}
	}
}

function newImportProgress(msg){
	$('.import-progress').text(msg);
}
function getAPI(msg){

	var api = JSON.parse(msg);
	console.log(api);
	
}

function receiveNews(msg){
	
	console.log(msg);
	$.ajax({
		type: "POST",
		url: "./api/news/viewNews",
		data:'type=current',
		cache:false,
		error:function(data){
			NProgress.done();
		},
		success: function(news){
			news = news.rows;
			var news_list = [];
			var count = 0;
			for(var i=0;i<news.length;i++){
				if(news[i].status == 'unread'){
					count++;
					if(count<=5){
						news_list.push(news[i]);
					}
				}
			}
			
			
			var news_list_tmp = ich.news_list_tmpl({news_list:news_list}); 
			$('#menu1').empty();
			$('#menu1').prepend(news_list_tmp)
			
			if(count > 0){
				var news_view_more = ich.news_view_more(); 
				$('#menu1').append(news_view_more);
				$('.info-number .badge').remove();
				$('.info-number').append('<span class="badge bg-green">'+count+'</span>');
				$('.news_dropdown').show();
			}else{
				$('.info-number .badge').remove();
				$('.news_dropdown').hide();
			}
			
			if(msg == "update"){
				if(window.page == "manage_news"){
					$('#templateTable').bootstrapTable('refresh');
				}
			}
			
			if(msg == "add"){
				if(window.page == "inbox"){
					location.reload();
				}
			}
			
		}
		
	});

}

function updateMessageTask(msg){
	console.log(window.page);
	if(window.page == "message_task"){
		if(msg == "send message task finish"){
			$('#sendMsgTaskTable').bootstrapTable('refresh');
		}
	}
}

function logOut(msg){
	console.log(msg);
	window.location.href = './';
}
