define(function(require,exports,module){
	require('director');
	require('jquery');
	require('bootstrap');
	var Lazy = require('utils/lazyRequire');
	module.exports={
		initialize:function(){
				var routes = {
						'/accelerate':function(){
							window.stop();
							Lazy.once(["pages/index","pages/allApp/accelerate"],function(index,accelerate){
								index.initialize(accelerate);
							});
						},
						'/inactive':function(){
							window.stop();
							Lazy.once(["pages/index","pages/allApp/inactive"],function(index,inactive){
								index.initialize(inactive);
							});
						},
						'/turnOn':function(){
							window.stop();
							Lazy.once(["pages/index","pages/wallet/turnOn"],function(index,turnOn){
								index.initialize(turnOn);
							});
						},
						'/basic':function(){
							window.stop();
							Lazy.once(["pages/index","pages/info/basic"],function(index,basic){
								index.initialize(basic);
							});
						},
						'/authorization':function(){
							window.stop();
							Lazy.once(["pages/index","pages/info/authorization"],function(index,authorization){
								index.initialize(authorization);
							});
						},
						'/safty':function(){
							window.stop();
							Lazy.once(["pages/index","pages/info/safty"],function(index,safty){
								index.initialize(safty);
							});
						}

				};
		      var router = Router(routes);

		      router.init('/accelerate');
		},
	};
});
