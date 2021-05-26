$(function(){

})
$('.sidebar-filter__header').on('click',function(){
   $(this).next().slideToggle('slow');
   $(this).toggleClass('open');
})
$('.btn-filter').on('click',function(){
   var btns = $(this).closest('.mainBlock-filter__btn').find('.btn-filter');
   var btnBloks = $(this).closest('.mainBlock-filter').find('.mainBlock-filter__body').find('.mainBlock-filter__item');
   if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(btnBloks).each(function(){
         $(this).hide('slow');
      })
   }else{
      var i = 0;
      $(btns).each(function(){
         $(this).removeClass('active');
      });
      $(btnBloks).each(function(index){
         $(this).hide('slow');
      })
      $(this).addClass('active');
      $(btns).each(function(index){
         if($(this).hasClass('active')){
            i = index;
         }
      });
      $(btnBloks).each(function(index){
         if(index === i){
            $(this).show('slow');
         }
      })

   }
})

//select
$('.select-header').on('click',function(){
   $(this).next().slideToggle('slow');
   $(this).toggleClass('open');
})
$('.select-item').on('click',function(){
   var text = $(this).find('.select-item__text').text();
   $(this).closest('.select').find('.select-header__title').text(text);
   $(this).closest('.select-body').slideToggle('slow');
   $(this).closest('.select').find('.select-header').removeClass('open');
})
//end select

//checkBox
$('.check').on('click',function(){
   $(this).find('.check-Box').toggleClass('active');
})
//checkBox end