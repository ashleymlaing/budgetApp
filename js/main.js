$(document).ready(function(){
  $('.startingApp').on('click',function(){
    var cashInPocket = $('.start').val();
    const budget4month = $('.budget').val();
  });
  // When you click on button, values will be added to the list
  $(".add").on("click", function() {
    var value = $("input").val();
    var type = $("#type").val();
    $("ul").append("<li>"+value+"</li>");
    $("ul").append("<li>"+type+"</li>");

    $("input").val("");
  });
});
