$(function() {
	
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'type',
		type: 'hidden',
		value: '4',
	}, 
	{
		field:"publisher",
		type:'hidden',
		value:sessionStorage.getItem('userName')
	},
	{
		title: '标题',
		field: 'title',
		required: true,
		maxlength: 255,
		readonly: view
	}, {
		title: '封面',
		field: 'pic',
		type:'img',
		required: true,
		readonly: view
	}, {
		title: '内容',
		field: 'content',
		required:true,
		type: "textarea",
		readonly: view
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '616191',
		editCode:'616182',
		addCode: '616180',
		view: view
	});
	
});