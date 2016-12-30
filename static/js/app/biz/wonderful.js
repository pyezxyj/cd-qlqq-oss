$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '标题',
        search: true,
        maxlength: 255
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('yesterday_status'),
        search: true,
        key: 'yesterday_status'
    }, {
        field: 'location',
        title: 'UI位置',
        formatter: Dict.getNameForList('location_status'),
        search: true,
        type: 'select',
        key: 'location_status'
    },{
        field: 'publisher',
        title: '最近更新人',
        valueName: "updater"

    },{
    	field:'publishDatetime',
        title: '最近更新时间',
        formatter: dateTimeFormat

    },{
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];

    buildList({
        router: 'wonderful',
        columns: columns,
        pageCode: '616190',
        searchParams:{type:"4"}
//        addCode:''
    });

    
	$('#frameBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		var msg = "确认上架该活动？";
		if(selRecords[0].status == 1){
			msg = "确认下架该活动？";
		}

		confirm(msg).then(function() {
			reqApi({
				code: '616183',
				json: {"code": selRecords[0].code}
			}).then(function() {
				toastr.info("操作成功");
				$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
			});
		});
	});
	
	$('#topBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		if(selRecords[0].location == 1){
			toastr.warning("该活动已置顶");
			return;
		}
		
		confirm("确认置顶该活动？").then(function() {
			reqApi({
				code: '616184',
				json: {"code": selRecords[0].code, location: 1}
			}).then(function() {
				toastr.info("操作成功");
				$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
			});
		});
	});

	
});