menu_status=false
$(function(){
    $(window).on('load',function(){
        Resize()
        background_rotation()
        console.log('↓お前の情報')
        ip()
    })
    $(window).resize(Resize);
    $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        if(menu_status==false){
            menu_status=true
            $('#menu').css({right: '0%'})
        }else{
            menu_status=false
            $('#menu').css({right: '-31%'})
        }
    });
  });



function Resize(e){
    screen_width = document.documentElement.clientWidth
    screen_height = document.documentElement.clientHeight
    size_rate = screen_width/1440
    $('#textback').css({top: 961.5*size_rate+'px'})
    $('#back h2').css({fontSize: 100*size_rate+'px'})
    $('.select li a').css({fontSize: 50*size_rate+'px'})
    $('.select li p').css({fontSize: 60*size_rate+'px'})
    $('#textarea h2').css({fontSize: 50*size_rate+'px'})
    $('#textarea h3').css({fontSize: 40*size_rate+'px'})
    $('#textarea p').css({fontSize: 25*size_rate+'px'})
    $('#textarea a').css({fontSize: 25*size_rate+'px'})
    $('.font_test').css({fontSize: 40*size_rate+'px'})
    $('.iframe').css({height: screen_height*0.32+'px'})
    $('#ly_portfolio').css({height: screen_width*0.48+'px'})
}
function ip(){
    const script = document.createElement('script');
 
    script.src = 'https://ipinfo.io?callback=callback';
    document.body.appendChild(script);
    document.body.removeChild(script);
}

angle = 170
function background_rotation(){
    ID = setInterval(function(){
        angle+=0.1
        $('#textback').css({background: 'linear-gradient('+angle+'deg,#220650,#030034 33%,#1c3f3a 66%,#000039)'})
    },100)
}

function passcode(){
    if(document.getElementById('pass').value==10910937){
        document.getElementById('passcode_result').innerHTML = '迷路解答開示'
        $('#passcode_result').css({color: 'green'})
        $('#answer_zoom').css({display: 'block'})
    }else
    if(document.getElementById('pass').value==92736419){
        document.getElementById('passcode_result').innerHTML = '背景グラデーション回転停止'
        $('#passcode_result').css({color: 'green'})
        clearInterval(ID)
    }else
    if(document.getElementById('pass').value==61827351){
        document.getElementById('passcode_result').innerHTML = '背景グラデーション回転開始'
        $('#passcode_result').css({color: 'green'})
        background_rotation()
    }else{
        document.getElementById('passcode_result').innerHTML = 'パスコードが違います'
        $('#passcode_result').css({color: 'red'})
        $('#answer_zoom').css({display: 'none'})
    }
}