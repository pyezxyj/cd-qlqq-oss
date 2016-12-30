$(function () {
	
	
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'openId',
        title: '微信号',
        search: true
    },{
        field: 'mobile',
        title: '手机号',
        search: true
    },{
        field: 'realName',
        title: '真实姓名'
      
    },{
        field: 'idNo',
        title: '身份证号'
    },{
    	field:'createDatetime',
        title: '加入时间',
        formatter: dateTimeFormat
    }];

    buildList({
        router: 'member',
        columns: columns,
        pageCode: '805054',
        searchParams: {
        	kind: "f1"
        }
    });
    
   
});