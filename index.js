/**
 * Created by Administrator on 2016/4/27.
 */
$(function () {
    var text = $("#new-todo").val();

    var cunchu = function () {
        var input = $("<input>");
        input.value = text;
        input.appendTo($(".view"));
    }

    $(document).on("keydown", function (e) {
        if (e.keyCode === 13 && text.length > 0) {
            cunchu();
        }else{
            alert("请输入内容！")
        }
    })
})