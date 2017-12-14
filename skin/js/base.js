/* 
*作者：一些事情
*时间：2012-6-28
*需要结合jquery和Validform和lhgdialog一起使用
----------------------------------------------------------*/
/*返回顶部*/
var lastScrollY = 0;
$(function(){
	$("body").prepend("<a id=\"gotop\" class=\"gotop\" href=\"#\" title=\"返回顶部\" onfocus=\"this.blur()\" onclick=\"window.scrollTo(0,0);\"></a>");
	window.setInterval("gotop()",1);
});
function gotop(){
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body)
		diffY = document.body.scrollTop
	else
		{/*Netscape stuff*/}
	percent=.1*(diffY-lastScrollY);
	if(percent>0)percent=Math.ceil(percent);
	else percent=Math.floor(percent);
	lastScrollY=lastScrollY+percent;
	if(lastScrollY<100){
	document.getElementById("gotop").style.display="none";
	} else {
	document.getElementById("gotop").style.display="block";
	}
}
/*搜索查询*/
function SiteSearch(send_url, divTgs, channel_name) {
    var strwhere = "";
    if (channel_name !== undefined) {
        strwhere = "&channel_name=" + channel_name
    }
	var str = $.trim($(divTgs).val());
	if (str.length > 0 && str != "输入关健字") {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val()) + strwhere;
	}
	return false;
}
/*切换验证码*/
function ToggleCode(obj, codeurl) {
    $(obj).children("img").eq(0).attr("src", codeurl + "?time=" + Math.random());
	return false;
}
//复制文本
function copyText(txt){
	window.clipboardData.setData("Text",txt); 
	$.dialog.tips("复制成功，可以通过粘贴来发送！",2,"32X32/succ.png");
} 
//全选取消按钮函数，调用样式如：
function checkAll(chkobj){
	if($(chkobj).text()=="全选"){
	    $(chkobj).text("取消");
		$(".checkall").prop("checked", true);
	}else{
    	$(chkobj).text("全选");
		$(".checkall").prop("checked", false);
	}
}

/*PROPS选择卡特效*/
function ToggleProps(obj, cssname){
	$(obj).parent().children("li").removeClass(cssname);
	$(obj).addClass(cssname);
}
//Tab控制选项卡
function tabs(tabId, event) {
    //绑定事件
	var tabItem = $(tabId + " #tab_head ul li a");
	tabItem.bind(event,function(){
		//设置点击后的切换样式
		tabItem.removeClass("current");
		$(this).addClass("current");
		//设置点击后的切换内容
		var tabNum = tabItem.parent().index($(this).parent());
		$(tabId + " .tab_inner").hide();
        $(tabId + " .tab_inner").eq(tabNum).show();
	});
}
//显示浮动窗口
function showWindow(objId){
	var box = '<div style="text-align:left;line-height:1.8em;">' + $('#' + objId).html() + '</div>';
	var tit = $('#' + objId).attr("title");
	var dialog = $.dialog({
		lock: true,
		min: false,
		max: false,
		resize: false,
		title: tit,
		content: box,
		width: 480,
		ok: function () {
		},
		cancel: false
	});
}

//执行删除操作
function ExecDelete(sendUrl, checkValue, urlId){
	var urlObj = $('#' + urlId);
	//检查传输的值
	if (!checkValue) {
		$.dialog.alert("对不起，请选中您要操作的记录！");
        return false;
	}
	var m = $.dialog.confirm("删除记录后不可恢复，您确定吗？", function () {
		$.ajax({
			type: "POST",
			url: sendUrl,
			dataType: "json",
			data: {
				"checkId":  checkValue
			},
			timeout: 20000,
			success: function(data, textStatus) {
				if (data.status == 1){
					$.dialog.tips(data.msg, 2, "32X32/succ.png", function(){
						if(urlObj){
							location.href = urlObj.val();
						}else{
							location.reload();
						}
					});
				} else {
					$.dialog.alert(data.msg);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				$.dialog.alert("状态：" + textStatus + "；出错提示：" + errorThrown);
			}
		});
	}, function(){ });
}

//单击执行AJAX请求操作
function clickSubmit(sendUrl){
	$.ajax({
		type: "POST",
		url: sendUrl,
		dataType: "json",
		timeout: 20000,
		success: function(data, textStatus) {
			if (data.status == 1){
				$.dialog.tips(data.msg, 2, "32X32/succ.png", function(){
					location.reload();
			    });
			} else {
				$.dialog.alert(data.msg);
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			$.dialog.alert("状态：" + textStatus + "；出错提示：" + errorThrown);
		}
	});
}


//智能浮动层函数
$.fn.smartFloat = function() {
	var position = function(element) {
		var top = element.position().top, pos = element.css("position");
		var w = element.innerWidth();
		$(window).scroll(function() {
			var scrolls = $(this).scrollTop();
			if (scrolls > top) {
				if (window.XMLHttpRequest) {
					element.css({
						width: w,
						position: "fixed",
						top: 0
					});	
				} else {
					element.css({
						top: scrolls
					});	
				}
			}else {
				element.css({
					position: pos,
					top: top
				});	
			}
		});
	};
	return $(this).each(function() {
		position($(this));						 
	}); 
};

/*表单AJAX提交封装(包含验证)*/
function AjaxInitForm(formId, btnId, isDialog, urlId, callback){
    var formObj = $('#' + formId);
	var btnObj = $("#" + btnId);
	var urlObj = $("#" + urlId);
	var argNum = arguments.length; //参数个数
	formObj.Validform({
		tiptype:3,
		callback:function(form){
			//AJAX提交表单
            $(form).ajaxSubmit({
                beforeSubmit: formRequest,
                success: formResponse,
                error: formError,
                url: formObj.attr("url"),
                type: "post",
                dataType: "json",
                timeout: 60000
            });
            return false;
		}
	});
    
    //表单提交前
    function formRequest(formData, jqForm, options) {
        btnObj.prop("disabled", true);
        btnObj.val("提交中...");
    }

    //表单提交后
    function formResponse(data, textStatus) {
		if (data.status == 1) {
            btnObj.val("提交成功");
			//是否提示，默认不提示
			if(isDialog == 1){
				$.dialog.tips(data.msg, 2, "32X32/succ.png", function(){
					if (argNum == 5) {
						callback();
					}else if(data.url){
						location.href = data.url;
					}else if(urlObj.length > 0 && urlObj.val() != ""){
						location.href = urlObj.val();
					}else{
						location.reload();
					}
				});
			}else{
				if (argNum == 5) {
					callback();
				}else if(data.url){
					location.href = data.url;
				}else if(urlObj){
					location.href = urlObj.val();
				}else{
					location.reload();
				}
			}
        } else {
            $.dialog.alert(data.msg);
            btnObj.prop("disabled", false);
            btnObj.val("再次提交");
        }
    }
    //表单提交出错
    function formError(XMLHttpRequest, textStatus, errorThrown) {
		$.dialog.alert("状态：" + textStatus + "；出错提示：" + errorThrown);
        btnObj.prop("disabled", false);
        btnObj.val("再次提交");
    }
}


//底部下拉菜单
$(function(){
	$(".footselect").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ !$(i.target).parents(".footselect").first().is(s) ? _hide():"";});
	})
})

