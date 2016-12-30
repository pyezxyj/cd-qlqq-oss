$(function() {

	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'ckey',
		title : '参数键',
		search: true
	},{
		field : 'cvalue',
		title : '参数值'
	},{
    	field : 'note',
		title : '参数说明'
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'param',
		columns: columns,
		pageCode: '616911'
	});
	$("#edit1Btn").on('click', function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		
		location.href = "./param_addedit.html?code="+selRecords[0].id + "&ckey=" + selRecords[0].ckey;
	});
});

