$(document).ready(function(){
    $(".group").mouseenter(function(){
      $(".group1").show(1000);
      $(".group2").show(5000);
      $(".group3").show(10000);
    });
    $(".main_heading1").mouseenter(function(){
        $(".main1").animate({left: '0em'});
      });
      $(".main_heading1").mouseenter(function(){
        $(".main2").animate({left: '0em'});
      });
  });