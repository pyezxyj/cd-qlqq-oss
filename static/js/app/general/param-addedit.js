$(function() {
	var code = getQueryString('code');
	var ckey = getQueryString('ckey');
	
	var fields = [{
		title: '参数键',
		field: 'ckey',
		required: true,
		maxlength: 20
	}, {
		title: '参数值',
		field: 'cvalue',
		required: true,
		maxlength: 200,
	}, {
		title: '参数说明',
		field: 'note',
		required: true,
		maxlength: 30
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	ckey == "actTip" && (fields[1].type = "textarea");
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '616912',
		editCode: '616900'
	});
});