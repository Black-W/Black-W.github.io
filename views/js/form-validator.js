$(function () {
    $("#form-validator").bootstrapValidator({
        live: 'disabled',//验证时机，enabled是内容有变化就验证（默认），disabled和submitted是提交再验证
        excluded: [':disabled', ':hidden', ':not(:visible)'],//排除无需验证的控件，比如被禁用的或者被隐藏的
        submitButtons: '#btn form-validator',//指定提交按钮，如果验证失败则变成disabled，但我没试成功，反而加了这句话非submit按钮也会提交到action指定页面
        message: '通用的验证失败消息',//好像从来没出现过
        feedbackIcons: {//根据验证结果显示的各种图标
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {//检测非空,radio也可用
                        message: 'email can\'t be empty'
                    },
                    emailAddress: {//验证email地址
                        message: 'not an email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {//检测非空,radio也可用
                        message: 'password can\'t be empty'
                    },
                    stringLength: {//检测长度
                        min: 6,
                        max: 30,
                        message: 'the length of password is between 6 and 30'
                    }
                }
            }
        }
    });
    $("#btn form-validator").click(function () {//非submit按钮点击后进行验证，如果是submit则无需此句直接验证
        $("#form-validator").bootstrapValidator('validate');//提交验证
        if ($("#form-validator").data('bootstrapValidator').isValid()) {//获取验证结果，如果成功，执行下面代码
            bootbox.confirm({
                message: "是否确认提交？",
                callback: function (result) {
                    if (!result) {
                        return;
                    }
                    var dialog = showLoading();
                    var url = $form.attr("action");
                    $.ajax({
                        url: url,
                        type: "post",
                        async: true, // 是否异步请求（此处需这只为异步请求true，否则bootstrap的modal不会顺序显示）
                        cache: false, // 是否缓存此页面，每次都请求服务器
                        contentType: "application/x-www-form-urlencoded", // 内容编码类型，默认
                        dataType: "json", // 预期服务器返回数据格式
                        timeout: 60000, // 超时时间，60s
                        data: $form.serialize(), // 请求参数
                        beforeSend: function (xhr) {

                        }, // 发送请求预处理
                        error: function (xhr, errMsg, e) {
                            bootbox.alert("请求服务器失败！");
                        }, // 请求服务器失败的处理
                        dataFilter: function (data, type) {
                            return data;
                        }, // 请求成功预处理，返回的值为success的参数data
                        success: function (data) {
                            bootbox.alert(JSON.stringify(data));

                        }, // 请求服务器成功的处理
                        complete: function (xhr, ts) {
                            hideDialog(dialog);
                        } // 请求完成的处理，无论成功或失败

                    });
                }
            })
        }
    });
});    