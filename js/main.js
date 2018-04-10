require.config({
  paths: {
	  'jquery': 'libs/jquery.min',
	  'director':'libs/director.min',
    'bootstrap':'libs/bootstrap.min',
    'custom':'libs/custom.min',
    'radio_special':'libs/radio_special',
    'inputFile':'libs/inputFile',
    'fileupload':'libs/fileupload',


  },
  waitSeconds: 0,
  shim:{
    'bootstrap':{
		  deps:['jquery'],
		  exports:'bootstrap'
	  },
    'custom':{
		  deps:['jquery','bootstrap'],
		  exports:'custom'
	  },
    'radio_special':{
		  deps:['jquery'],
		  exports:'radio_special'
	  },
    'inputFile':{
		  deps:['jquery','bootstrap'],
		  exports:'inputFile'
	  },
    'fileupload':{
		  deps:['jquery','bootstrap'],
		  exports:'fileupload'
	  }


  }
});

require([
	'navigator',
], function(Navigator){
	Navigator.initialize();
});
