define(function(require,exports,module){
	require('echarts');
	var arrayUtil = require('utils/arrayUtil');
	module.exports={
		getColors:function(params) {
            // build a color map as your need.
            var colorList = [
              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
            ];
            return colorList[(params.dataIndex%colorList.length)]
        },
        mapChart:function(id,legends,series,max){
        	var myChart = echarts.init(document.getElementById(id),'macarons');
		    myChart.setOption({
		        title : {
		            text: '',
		            subtext: '',
		            x:'center'
		        },
		        tooltip : {
		            trigger: 'item',
		            formatter: function(val){
		            	var params = val[0].split(' ');
		            	params = arrayUtil.uniq(params);
		            	var value = '';
		            	for(var i=0;i<params.length;i++){
		            		value += params[i]+'<br>';
		            	}
		            	value += val[1]+': '+val[2];
		            	return value;
		            }
		        },
		        legend: {
		            orient: 'vertical',
		            x:'left',
		            data:legends
		        },
		        dataRange: {
		            min: 0,
		            max: max,
		            x: 'left',
		            y: 'bottom',
		            text:['多','少'],
		            calculable : true
		        },
		        toolbox: {
		            show: true,
		            orient : 'vertical',
		            x: 'right',
		            y: 'center',
		            feature : {
		                saveAsImage : {show: true}
		            }
		        },
		        roamController: {
		            show: true,
		            x: 'right',
		            mapTypeControl: {
		                'china': true
		            }
		        },
		        series : series
		    });
        },
        potChart:function(id,legends,series,unitx,unity){
        	var myChart = echarts.init(document.getElementById(id),'macarons');
		    myChart.setOption( {
		        title : {
		            text: '',
		            subtext: ''
		        },
		        tooltip : {
		            trigger: 'axis',
		            showDelay : 0,
		            formatter : function (params) {
		                if (params.value.length > 1) {
		                    return params.seriesName + ' :<br/>'
		                       + params.value[0]  + unitx +' : '
		                       + params.value[1] + unity;
		                }
		                else {
		                    return params.seriesName + ' :<br/>'
		                       + params.name + unitx +' : '
		                       + params.value + unity;
		                }
		            },  
		            axisPointer:{
		                show: true,
		                type : 'cross',
		                lineStyle: {
		                    type : 'dashed',
		                    width : 1
		                }
		            }
		        },
		        legend: {
		            data:legends
		        },
		        toolbox: {
		            show : true,
		            feature : {
		                saveAsImage : {show: true}
		            }
		        },
		        xAxis : [
		            {
		                type : 'value',
		                scale:true,
		                axisLabel : {
		                    formatter: '{value}'
		                }
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value',
		                scale:true,
		                axisLabel : {
		                    formatter: '{value}'
		                }
		            }
		        ],
		        series : series
		    });
        },
        pieChart:function(id,legends,series){
        	var myChart = echarts.init(document.getElementById(id),'macarons');
		    myChart.setOption( {
		        title : {
		            text: '',
		            subtext: '',
		            x:'center'
		        },
		        tooltip : {
		            trigger: 'item',
		            formatter: "{a} <br/>{b} : {c} ({d}%)"
		        },
		        legend: {
		            x : 'center',
		            y : 'bottom',
		            data:legends
		        },
		        toolbox: {
		            show : true,
		            feature : {
		                saveAsImage : {show: true}
		            }
		        },
		        calculable : true,
		        series : series
		    });
        },
        verticalColumnChart:function(id,categories,legends,series){
        	var myChart = echarts.init(document.getElementById(id),'macarons');
		    myChart.setOption({
		        title : {
		            text: '',
		            subtext: ''
		        },
		        tooltip : {
		            trigger: 'axis'
		        },
		        legend: {
		            data:legends
		        },
		        toolbox: {
		            show : true,
		            feature : {
		                magicType : {show: true, type: ['line', 'bar']},
		                saveAsImage : {show: true}
		            }
		        },
		        calculable : true,
		        xAxis : [
		            {
		                type : 'category',
		                data : categories
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value'
		            }
		        ],
		        series : series
		    });
        },
 multipleColumnChart:function(id,categories,legends,series){
        	
        	var myChart = echarts.init(document.getElementById(id),'macarons');
		    myChart.setOption({
		        tooltip : {
		            trigger: 'axis',
		            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        legend: {
		            data:legends
		        },
		        toolbox: {
		            show : true,
		            feature : {
		            	 magicType: {show: true, type: ['line', 'bar']},
			             saveAsImage : {show: true}
		            }
		        },
		        calculable : true,
		        xAxis : [
		            {
		              type : 'category',
		              data : categories,
		              show : true,  
                       axisLabel:{  
                           interval:0 ,  
                           formatter:function(val){  
                             return val;  
                           }  
                       }  
		            }
		        ],
		        yAxis : [
		            {
		                 type : 'value'
		            }
		        ],
		        series : series
		    });
        },
        columnChart:function(id,categories,legends,series){
        	var myChart = echarts.init(document.getElementById(id),'macarons');
		    myChart.setOption({
		        title : {
		            text: '',
		            subtext: ''
		        },
		        tooltip : {
		            trigger: 'axis'
		        },
		        legend: {
		            data:legends
		        },
		        toolbox: {
		            show : true,
		            feature : {
		                magicType : {show: true, type: ['line', 'bar']},
		                saveAsImage : {show: true}
		            }
		        },
		        calculable : true,
		        xAxis : [
		            {
		                type : 'category',
		                data : categories
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value'
		            }
		        ],
		        series : series
		    });
        }
	};
});