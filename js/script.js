$('.appbarBt').click(function(){
    $('.mobile-menu').stop().animate({left:0},500)
    $('.header-mobile-menu-bar>div').stop().animate({left:100+'%'},500)
});
$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500)
    $('.header-mobile-menu-bar>div').stop().animate({left:0},500)
});

//section3 tab

let tabs=$('.section3-tabMenu>ul>li');
let tabContents=$('.section3-gallery-wrap>div');

tabs.on('click', function(){
    let tg=$(this);
    let i=tg.index();
    //console.log(i);
    tabs.find('>a').removeClass('addTab');
    tg.find('>a').addClass('addTab');

    tabContents.css('display','none');
    tabContents.eq(i).css('display','block');
});