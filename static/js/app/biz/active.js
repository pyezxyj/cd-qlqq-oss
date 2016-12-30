$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '活动名称',
        maxlength: 255
    }, {
        field: 'fee',
        title: '单价',
        formatter: moneyFormat
    },
    {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('active_status'),
        search: true,
        type: 'select',
        key: 'active_status'
    },{
        field: 'signNum',
        title: '订单总数'
    },{
        field: 'publisher',
        title: '最近更新人'
    },{
        field: 'publishDatetime',
        title: '最近更新时间',
        formatter: dateTimeFormat
    },{
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];

    buildList({
        router: 'active',
        columns: columns,
        pageCode: '616120'
    });

    $('#groundingBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		var msg = selRecords[0].status == 1 ? "确认下架该活动": "确认上架该活动";

		confirm(msg).then(function() {
			reqApi({
				code: '616101',
				json: {"code": selRecords[0].code, location: 1,approver:sessionStorage.getItem('userName'),approveNote:"审核通过"}
			}).then(function() {
				toastr.info("操作成功");
				$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
			});
		});
	});
    
});