$(function(){
})
$(window).on("load resize",(function(){
   if($(window).width()<"991"){
      $('.sidebar').append($('.nav')); 
      $('.sidebar').find('.sidebar-filter__header').removeClass('js-btn');
   }else{ 
      $('.header>.container').append($('.nav'));
      $('.sidebar').find('.sidebar-filter__header').addClass('js-btn');
   }
}));
//
//burger
$('.burger').on('click',function(){
   $('.sidebar').toggleClass('open');
   $(this).find('.icon-burger').toggleClass('d-none');
   $(this).find('.icon-close').toggleClass('d-none');
})
$('.burger-second').on('click',function(){
   $('.mainBlock-filter').toggleClass('open');
   $(this).find('.icon-burger').toggleClass('d-none');
   $(this).find('.icon-close').toggleClass('d-none');
})
//end burger

$('.js-btn').on('click',function(){
   $(this).next().slideToggle('slow');
   $(this).toggleClass('open');
})
//
$('.sidebar-choice__item').on('click',function(){
   var items = $(this).closest('.sidebar-choice__list').find('.sidebar-choice__item');
   if($(this).hasClass('active')){
      $(this).removeClass('active');
   }else{
      $(items).each(function(){
         $(this).removeClass('active');
      })
      $(this).addClass('active');
   }
})
//
//
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
//Лайк
$('.cardEmployee-title>.icon-heart').on('click',function(){
   $(this).toggleClass('likes');
})
//Лайк конец

//dots на карточке 
$('.cardEmployee-title__list').on('click',function(){
   $(this).find('.cardEmployee-popup').show('slow');
})
$(document).on('click', function(e) {
   if (!$(e.target).closest(".cardEmployee-popup").length && !$(e.target).closest(".cardEmployee-title__list").length) {
     $('.cardEmployee-popup').hide('slow');
   }
   e.stopPropagation();
 });
//dots на карточке end

