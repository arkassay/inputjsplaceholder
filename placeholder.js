var placeholder={init:function(e,t){if(t.length>0&&t!=undefined&&e.is("form")){placeholder.addValues(e,t);placeholder.focus(e,t);placeholder.blur(e,t);placeholder.submit(e,t)}},addValues:function(e,t){for(var n=0;n<t.length;n++){var r=$("#"+t[n].id,e);r.attr("value",t[n].value);r.addClass("placeholder")}},focus:function(e,t){$(".placeholder",e).focus(function(){var e=$(this);for(var n=0;n<t.length;n++){if(e.attr("id")==t[n].id&&e.val()==t[n].value){e.attr("value","");break}}})},blur:function(e,t){$(".placeholder",e).blur(function(){var e=$(this);for(var n=0;n<t.length;n++){if(e.attr("id")==t[n].id&&e.val()===""){e.attr("value",t[n].value);break}else{e.removeClass("no-submit")}}})},submit:function(e,t){var n;e.submit(function(){if(e.children().hasClass("no-submit")){return false}return true})}}

$(function(){
		//grab the value ofthe input field with placeholder
		var searchFormPlaceholderValue = $('#search').val();
		//insert form class here
		placeholder.init($('.searchform'),
				[{
					id:'search', //insert id of input field with placeholder here
					value: searchFormPlaceholderValue 
				}]
		);
});