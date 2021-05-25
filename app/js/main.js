$(function(){

})
$('.sidebar-filter__header').on('click',function(){
   $(this).next().slideToggle('slow');
   $(this).toggleClass('open');
})
$('.btn-filter').on('click',function(){
   var btns = $(this).closest('.mainBlock-filter__btn').find('.btn-filter');
   if($(this).hasClass('active')){
      $(this).removeClass('active');
   }else{
      $(btns).each(function(){
         $(this).removeClass('active');
      });
      $(this).addClass('active');
   }
})

//select
$('.select-header').on('click',function(){
   $(this).next().slideToggle('slow');
})
//end select