$(function(){
})
$(window).on("load resize",(function(){
   if($(window).width()<"991"){
      $('.sidebar').append($('.nav')); 
      $('.sidebar').find('.sidebar-filter__header').addClass('mobile');
      $('.mainBlock-filter__btn').find('.btn-filter').addClass('mobile');
      $('.mainBlock-table__column').find('.check--grid').unwrap();
      // if (/iPhone|iPad|/i.test(navigator.userAgent)) {
      //    // alert("Вы используете мобильное устройство (телефон или планшет).")
      //    $('.sidebar').css('padding-bottom','100px');
      //    $('.mainBlock-filter').css('padding-bottom','100px');
      // } else{
      //    $('.sidebar').css('padding-bottom','50px');
      //    $('.mainBlock-filter').css('padding-bottom','100px');
      //    // alert("Вы используете ПК.")
      // }
   }else{ 
      $('.header>.container').append($('.nav'));
      $('.sidebar').find('.sidebar-filter__header').removeClass('mobile');
      $('.mainBlock-filter__btn').find('.btn-filter').removeClass('mobile');
   }
}));
//
//burger
$('.burger').on('click',function(){
   $('.sidebar').toggleClass('open');
   $(this).toggleClass('open');
   $('.burger-second').removeClass('open');
   $('.mainBlock-filter').removeClass('open');
   $('.burger__profile').removeClass('open');
})
$('.burger-second').on('click',function(){
   $('.mainBlock-filter').toggleClass('open');
   $(this).toggleClass('open');
   $('.burger').removeClass('open');
   $('.sidebar').removeClass('open');
   $('.burger__profile').removeClass('open');
})
$('.btn-burger__profile').on('click',function(){
   $('.burger__profile').toggleClass('open');
   $('.burger').removeClass('open');
   $('.sidebar').removeClass('open');
   $('.burger-second').removeClass('open');
   $('.mainBlock-filter').removeClass('open');
})
//end burger
$('.js-btn').on('click',function(){
   if(!$(this).hasClass('mobile')){
      $(this).next().slideToggle('slow');
      $(this).toggleClass('open');
   }
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
//check box круглый
$('.check-round').on('click',function(){
   var checkBox = $(this).closest('.entry').find('.check-round');
   $(checkBox).each(function(){
      $(this).find('.check-Box').removeClass('active');
   })
   $(this).find('.check-Box').addClass('active');
})
//check box круглый конец
//
$('.btn-filter').on('click',function(){
   var btn = $(this);
   var btns = btn.closest('.mainBlock-filter__btn').find('.btn-filter');
   var btnBloks = btn.closest('.mainBlock-filter').find('.mainBlock-filter__body').find('.mainBlock-filter__item');
   if(!btn.hasClass('mobile')){
      if(btn.hasClass('active')){
         btn.removeClass('active');
         $(btnBloks).each(function(){
            $(this).hide('slow');
         })
      }else{
         var i = 0;
         $(btns).each(function(){
            $(this).removeClass('active');
         });
         $(btnBloks).each(function(){
            $(this).hide('slow');
         })
         btn.addClass('active');
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
   }else{
      $('.mainBlock-filter__btn').hide('slow');
      var i = 0;
      var breadCr = btn.find('.btn-filter__title').text();
      btn.addClass('active');
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
      $('.mainBlock-filter__breadcrumbs').text('/ ' + breadCr);
   }
})
$('.mainBlock-filter__subtitle, .btn-filter__back').on('click',function(){
   var btns = $('.mainBlock-filter__btn').find('.btn-filter');
   var body = $('.mainBlock-filter__body').find('.mainBlock-filter__item');
   $(body).each(function(){
      $(this).hide('slow');
   })
   $(btns).each(function(){
      $(this).removeClass('active');
   })
   $('.mainBlock-filter__btn').show('slow');
   $('.mainBlock-filter__breadcrumbs').text(' ');
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
   if($(this).closest('.mainBlock-table__item').hasClass('mainBlock-table__item--double') && !$(this).hasClass('check--double')){
      $(this).closest('.mainBlock-table__item--double').find('.entry').slideToggle('.slow')
      $(this).closest('.mainBlock-table__item--double').find('.entry').css('display','flex');
      $(this).closest('.mainBlock-table__item--double').find('.check--double').slideToggle('.slow')
   }
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

//create info выбор блоков
$('.profile__link-js').on('click',function(){
   var i = 0;//индекс блока по порядку
   var btns = $(this).closest('.profile__nav').find('.profile__item');
   var block = $(this).closest('.profile__nav').next().find('.mainBlock-table-js');
   //выбор кнопки
   $(btns).each(function(){
      $(this).find('.profile__link-js').removeClass('btn-primary').addClass('btn-contour');
   })
   $(this).removeClass('btn-contour').addClass('btn-primary');
   //выбор кнопки
   //находим индекс нужной кнопки
   $(btns).each(function(index){
      if($(this).find('.profile__link-js').hasClass('btn-primary')){
         i = index;
      }
   })
   //открываем нужный блок и закрываем не нужный
   $(block).each(function(index){
      if(index === i){
         $(this).show('slow');
      }else{
         $(this).hide('slow');
         $(this).removeClass('open');
      }
   })

})
//create info выбор блоков end
//create info popup 
$('.btn-popupCreate').on('click',function(){
   $('.popupCreate').fadeIn();
})
//end
//upDate info popup
$('.btn-popupUpdate').on('click',function(){
   $('.popupUpdate').fadeIn();
})
$('.btn-popupRegistration').on('click',function(){
   $('.popupRegistration').fadeIn();
})
$('.btn-popupEnter').on('click',function(){
   $('.popupEnter').fadeIn();
})
$('.popupEnter-link__create>a').on('click',function(){
   $(this).closest('.popup').fadeOut();
   $('.popupRegistration').fadeIn();
})
//end
//close popup btn-popupRegistration
$('.popup-link, .popup-close').on('click',function(){
   $(this).closest('.popup').fadeOut();
})
//close popup end


$('.faq__header').on('click',function(){
   var items = $(this).closest('.faq__list').find('.faq__item');
   if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).next().hide("slow");
   }else{
      $(items).each(function(){
         $(this).removeClass('active');
         $(this).find('.faq__body').hide("slow");
      })
      $(this).addClass('active');
      $(this).next().show("slow");
   }
})