$(document).ready(function(){
  let cashInPocket;
  let budget4month = parseFloat($('.budget').val());
  let spentMoney = 0;
  let remainingBudget = budget4month - spentMoney;

  $('.startingApp').on('click',function(){
    budget4month = parseFloat($('.budget').val());
    cashInPocket = $('.start').val();
    remainingBudget = budget4month - spentMoney;
    console.log(budget4month);
    console.log(spentMoney);

  });

  $('.remainding-panel').html("<span>" + remainingBudget +" remaining</span>");
  console.log(budget4month);
  console.log(spentMoney);

  // When you click on button, values will be added to the list
  $(".add").on("click", function() {
    var value = $("#amt").val();
    var type = $("#type").val();
    $("ul").append("<li>"+value+"</li>");
    $("ul").append("<li>"+type+"</li>");

    $("input").val("");
  });

});
