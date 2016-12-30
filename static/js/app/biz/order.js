$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: 'code',
        title: '订单号'
    }, {
        field: 'productName',
        title: '参与活动'
    }, {
        field: 'realName',
        title: '真实姓名',
        value:sessionStorage.getItem('userName')
    },{
        field: 'idNo',
        title: '身份证号'
    },{
        field: 'mobile',
        title: '手机号',
        search: true
    },{
        field: 'totalNum',
        title: '人次'
    },{
    	field:'totalAmount',
        title: '订单总额',
        formatter: moneyFormat
    },{
        field: 'hotelName',
        title: '名宿名称'
    },{
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('order_status'),
        search: true,
        type: 'select',
        key: 'order_status'
       
    },{
        field: 'payDatetime',
        title: '支付时间',
        formatter: dateTimeFormat,
        type1: 'date',
        title1: '支付时间',
        field1: 'payBeginDatetime',
        field2: 'payEndDatetime',
        search: true
    },{
    	title: '备注',
		field: 'remark',
		maxlength: 250
		
	}];

    buildList({
        router: 'order',
        columns: columns,
        pageCode: '616212'
    });
      
    $('#refundBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "order_addedit.html?code=" + selRecords[0].code + "&name=5";
    });
    $('#contactBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "order_addedit.html?code=" + selRecords[0].code + "&name=2";
    });
    $('#visitedBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "order_addedit.html?code=" + selRecords[0].code + "&name=7";
    });
    
    
});