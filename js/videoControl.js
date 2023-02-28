let winH=$(window).innerHeight();
let winW=$(window).innerWidth();
let vidH=$('#mainVideo').innerHeight();
let vidW=$('#mainVideo').innerWidth();
let videoPlay='on';//기본 켜진상태
let soundMuted='off';//기본 꺼진상태
let setIn;
console.log(winH);

$('#mainVideo').get(0).autoPlay=true;//호환성 위한 코딩
$('#mainVideo').get(0).muted=true;//소리끄기
$('#mainVideo').get(0).loop=0;//한 번 재생(1=연속재생)

//제이쿼리에서 플래이 기능 사용시엔 get(0)을 무조건 작성해야한다.




$('.palyPuaseIconBt').on({
    click:function(){
        if(videoPlay==='on'){
            $('#mainVideo').get(0).pause();
            videoPlay='off';
            $(this).find('img').attr('src','./img/icon-player-play.png');
        }else{
            $('#mainVideo').get(0).play();
            videoPlay='on';
            $(this).find('img').attr('src','./img/icon-player-pause.png');
            $('.section1-watch-again').hide();
        }
    }
});

$('.mutedIconBt').on({
    click:function(){
        if(soundMuted==='off'){
            $('#mainVideo').get(0).muted=false;
            soundMuted='on'
            $(this).find('i').attr('class','fas fa-volume-off');
            
        }else{
            $('#mainVideo').get(0).muted=true;
            soundMuted='off'
            $(this).find('i').attr('class','fas fa-volume-mute');
            
        }
    }
});

//videoTimeCountFn()
setIn=setInterval(videoTimeCountFn,100)
function videoTimeCountFn(){
    //console.log('현재 진행 비디오 시간:' + $('#mainVideo').get(0).currentTime);
    //console.log('전체 비디오 시간:' + $('#mainVideo').get(0).duration);
    //console.log('비디오 정지 여부:' + $('#mainVideo').get(0).ended);

     //if( $('#mainVideo').get(0).currentTime==$('#mainVideo').get(0).duration){};
    if($('#mainVideo').get(0).ended==true){
       $('.section1-watch-again').show();
       videoPlay='off';
       $('.palyPuaseIconBt').find('img').attr('src','./img/icon-player-play.png');
       clearInterval(setIn);
    };
};

$('.watchagainBt').on({
    click:function(){
        videoPlay='on';
        $('#mainVideo').get(0).play();
        $('.palyPuaseIconBt').find('img').attr('src','./img/icon-player-pause.png');
        $('.section1-watch-again').hide();
    }
});


$(window).resize(function(){
    videoResizeFn();
});

setInterval(videoResizeFn,100);
function videoResizeFn(){
    winH=$(window).innerHeight();
    winW=$(window).innerWidth();
    vidH=$('#mainVideo').innerHeight();
    vidW=$('#mainVideo').innerWidth();

    $('.section1-video').css({width: 100+'%', height: winH});
    if(winH>vidH){
        $('#mainVideo').css({width: 'auto', height: winH});
    };
    if(winW> vidW){
        $('#mainVideo').css({width: winW, height: 'auto'});
    };
    $('#mainVideo').css({marginTop: (winH-vidH)/2, marginLeft: (winW-vidW)/2});
};

$('.nextIconBt').on({
    click:function(){
        let section2=$('#section2').offset().top;
        //console.log(section2);
        $('html, body').animate({scrollTop:section2},1000);
}
});


