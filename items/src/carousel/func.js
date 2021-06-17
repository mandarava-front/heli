import $ from 'jquery'
$(function() {
    setTimeout(carousel, 3000)

})


var a = 0

//轮播函数
function carousel() {
    $(".swiper>ul>:eq(" + a + ")").fadeOut(500);
    $(".swiper>ul>li:eq(" + (a + 1) + ")").fadeIn(500)
    $(".dots>span:eq(" + (a + 1) + ")").addClass("activenow").siblings().removeClass()
    a++;
    if (a == 4) {
        a = 0
        $(".dots>span:eq(0)").addClass("activenow").siblings().removeClass()
        $(".swiper>ul>:eq(0)").css("display", "block");
        $(".swiper>ul>li:eq(4)").css("display", "none")
    }
    var i1 = setTimeout(carousel, 3000)

}