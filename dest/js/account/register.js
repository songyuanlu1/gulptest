require.config({baseUrl:"http://localhost:2222/js",paths:{jquery:"lib/jquery/1.12.1/jquery",wx:"lib/weixin/1.0.0/jweixin",cookie:"plugins/cookie/jquery.cookie",validate:"plugins/validate/jquery.validate.min",header:"units/header",vdate:"units/vdate"}}),define("require.config",function(){}),require(["../require.config"],function(){require(["jquery","cookie","validate"],function(e,t,n){var r={init:function(){var e=this;e.vation()},vation:function(){var t=this;e("#register").validate({rules:{shopName:{required:!0,minlength:1,maxlength:20},lastname:"required",username:{required:!0,minlength:2},password:{required:!0,minlength:5},confirm_password:{required:!0,minlength:5,equalTo:"#password"},email:{required:!0,email:!0}},messages:{shopName:{required:"请输入店铺名称",minlength:"请输入1~20个字符",maxlength:"请输入1~20个字符"},lastname:"请输入您的姓氏",username:{required:"请输入用户名",minlength:"用户名必需由两个字母组成"},password:{required:"请输入密码",minlength:"密码长度不能小于 5 个字母"},confirm_password:{required:"请输入密码",minlength:"密码长度不能小于 5 个字母",equalTo:"两次密码输入不一致"},email:"请输入一个正确的邮箱"}})},events:function(){var e=this}};r.init()})}),define("account/register",function(){});