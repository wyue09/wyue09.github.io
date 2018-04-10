define(function(require,exports,module){
	module.exports={
		indexOf:function(array,target){
			for(var i=0;i<array.length;i++){
				if(array[i]===target){
					return i;
				}
			}
			return false;
		},
		
		deleteBy:function(array,target){
			array.splice(this._indexOf(array, target),1);
		},
		getByLevel:function(array,value){
			var list = [];
			for(var i=0;i<array.length;i++){
				if(array[i].level==value){
					list.push(array[i]);
				}
			}
			return list;
		},
		deleteId:function(array,index){
			array.splice(index,1);
		},
		numFormat:function(nStr){
				nStr += '';
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}
				return x1 + x2;
		},
		isHere:function(array,target){
			for(var z=0;z<array.length;z++){
				if(array[z]===target){
					return true;
				}
			}
			return false;
		},
		hasNext:function(array){
			if(array.length<1){
				return false;
			}else{
				return array[0];
			}
		},
		uniq:function (arr) { 
			var a = [], 
				o = {}, 
				i, 
				v, 
				len = arr.length; 

			if (len < 2) { 
				return arr; 
			} 

			for (i = 0; i < len; i++) { 
				v = arr[i]; 
				if (o[v] !== 1) { 
					a.push(v); 
					o[v] = 1; 
				} 
			} 

			return a; 
		} 
	};
});