import $ from 'jquery';
$(function() {
    $(".shadow").mouseover(function() {
        $(this).css("opacity", "0")
        $(this).prev(".mag>img").css("filter", "grayscale(0)")
    })
    $(".shadow").mouseout(function() {
        $(this).css("opacity", "0.7")
        $(this).prev(".mag>img").css("filter", "grayscale(100%)")

    })
})