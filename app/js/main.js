$(window).on("load resize",(function(){
   if($(window).width()<"991"){
      $('.sidebar').append($('.nav')); 
      $('.sidebar').find('.sidebar-filter__header').addClass('mobile');
      $('.mainBlock-filter__btn').find('.btn-filter').addClass('mobile');
      $('.mainBlock-table__column').find('.check--grid').unwrap();
   }else{ 
      $('.header>.container').append($('.nav'));
      $('.sidebar').find('.sidebar-filter__header').removeClass('mobile');
      $('.mainBlock-filter__btn').find('.btn-filter').removeClass('mobile');
   }
   if($(window).width()<"992"){
      //employee page
      $('.employee-description').append($('.employee-files__video'));
      //employee page end
   }else{
      //employee page
      $('.employee-files').append($('.employee-files__video'));
      //employee page end
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
$(document).mouseup(function (e) {
   var sidebar = $(".sidebar");
   var filter = $('.mainBlock-filter');
   var profile = $('.burger__profile');
   if (sidebar.has(e.target).length === 0 && $('.burger').has(e.target).length === 0){
      sidebar.removeClass('open');
      $('.burger').removeClass('open');
   }
    if (filter.has(e.target).length === 0 && $('.burger-second').has(e.target).length === 0){
      filter.removeClass('open');
      $('.burger-second').removeClass('open');
   }
});
$(document).on('click', function(e) {
   if (!$(e.target).closest(".burger__profile").length && !$(e.target).closest(".icon-profile").length) {
     $('.burger__profile').removeClass('open');
   }
   e.stopPropagation();
 });
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
//fancybox
$('.employee-files__images').on('click',function(){
   // var img = $(this).find('img').attr('src');
   // $('.employee-files__img').find('img').attr('src', img)
   var img = $(this).find('img').attr('src');
   $('.popupFancyBox-img').find('img').attr('src', img);
   $('.popupFancyBox').fadeIn();
})
//fancybox end
//end
//close popup btn-popupRegistration
$('.popup-link, .popup-close').on('click',function(){
   $(this).closest('.popup').fadeOut();
})
$(document).on('click', function(e) {
   if (!$(e.target).closest(".popup-body").length && !$(e.target).closest('.btn-popupRegistration').length
   && !$(e.target).closest('.btn-popupEnter').length && !$(e.target).closest('.btn-popupUpdate').length && !$(e.target).closest('.btn-continue').length && !$(e.target).closest('.employee-files__images').length) {
     $('.popup').fadeOut();
   }
   e.stopPropagation();
 });
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

//кликабельные блоки 
$('.cardEmployee-title span, .cardEmployee-photo').on('click',function(){
   location.href='https://yandex.ua/';
   // alert();
})
//кликабельные блоки конец
//slider
   $('.slick').slick({
      infinite: true,
      slidesToShow:4,
      slidesToScroll:1,
      arrows:true,
      dots:false,
      vertical:true,
      verticalSwiping: false,
      responsive:[
         {
            breakpoint: 1200,
            settings:{
               vertical:false,
               arrows:false,
            }
         }
      ]
   
    });
 $('.slick').on('wheel', (function(e) {
   e.preventDefault();
 
   if (e.originalEvent.deltaY > 0) {
     $(this).slick('slickNext');
   } 
   // else {
   //   $(this).slick('slickPrev');
   // }
 }));
 $(function(){
   $('.slick-next').html('<span class="icon icon-triangle-down"></span>');
 })
 $('.slick-item__img').on('click',function(){
    var img = $(this).find('img').attr('src');
    $('.employee-files__img').find('img').attr('src', img)
 })
//slider end
//hover
$(function(){
   var count = 0;
   $('.icon-star-js').mouseover(function(){
      count = 0;
      var i = 0;
      var thisParent = $(this).closest('.card-score__stars');
      var thisItem = thisParent.find('.icon-star-js');
      $(thisItem).each(function(){
         if($(this).hasClass('active')){
            count++;
         }
      })
      $(thisItem).each(function(){
         $(this).removeClass('active');
      })
      $(this).addClass('js-prov');
      $(thisItem).each(function(){
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function(index){
         if($(this).hasClass('js-prov')){
            i = index;
         }
      })
      $(thisItem).each(function(index){
         if(index < i+1){
            $(this).addClass('js-hover');
         }
      })
   })
   $('.icon-star-js').mouseout(function(){
      $(this).removeClass('js-prov');
      var thisParent = $(this).closest('.card-score__stars');
      var thisItem = thisParent.find('.icon-star-js');
      $(thisItem).each(function(){
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function(index){
         if(index < count){
            $(this).addClass('active');
         }
      })
   })
   $('.icon-star-js').on('click',function(){
      count = 0;
      var i = 0;
      $(this).addClass('active');
      var thisParent = $(this).closest('.card-score__stars');
      var thisItem = thisParent.find('.icon-star-js');
      $(thisItem).each(function(index){
         if($(this).hasClass('active')){
            i = index;
         }
      })
      $(thisItem).each(function(){
         $(this).removeClass('active');
      })
      $(thisItem).each(function(index){
         if(index < i+1){
            $(this).addClass('active');
         }
      })
      
   })
})
//hover end
//video 
$(function(){
   // document.getElementsByTagName('video')[0].webkitEnterFullscreen();
})
//video end
