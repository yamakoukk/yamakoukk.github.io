$(function(){

  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });

  $('.list1').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('body').removeClass('noscroll');
    $('.burger-btn').removeClass('close');
  });

  $('.list2').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('body').removeClass('noscroll');
    $('.burger-btn').removeClass('close');
  });

  $('.list3').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('body').removeClass('noscroll');
    $('.burger-btn').removeClass('close');
  });

  $('.list4').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('body').removeClass('noscroll');
    $('.burger-btn').removeClass('close');
  });

});
