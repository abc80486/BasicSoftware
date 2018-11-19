$(function(){
    var $nvmore=$('.nvmore');
    var $w3cnav=$('.w3cnav');
    var $nav_li=$('.w3cnav>li').not('.nvmore');
    var $nav_a=$nav_li.find('a');
    
    var index=$nav_li.index('.active');
    var timer=null;
    function sl_show(){
            clearInterval(timer);
            $nvmore.addClass('hover')
                                    .find('ul').css({'display':'block'});
    }
    function sl_hide(){
            timer=setInterval(function(){
            $nvmore.removeClass('hover')
                                    .find('ul').css({'display':'none'});
            },1000);
    }
    
    $nvmore.mouseover(function(){
            sl_show();
            })
    $nvmore.mouseout(function(){
            sl_hide();
            })

    $nav_a.mouseover(function(){
                            $(this).parent().siblings('li').find('i')
                                                                                            .stop(true,true)
                                                                                            .animate({bottom:'-9px'},'fast');
                            $(this).next('i').animate({bottom:'0px'});
            }).mouseout(function(){
                            $(this).parent().siblings('li').find('i').stop(true,true);
                            $nav_li.not('.active').find('i').animate({bottom:'-9px'},'fast');
            }).click(function(){
                            index=$nav_li.index($(this).parent());

                            $nav_li.eq(index).addClass('active')
                                                    .siblings().removeClass('active');
            });

    $w3cnav.mouseleave(function(){
            $(this).find('i').stop(true,true);
            $nav_li.not('.active').find('i').animate({bottom:'-9px'},'fast');
            var v_bottom=parseInt($nav_li.eq(index).find('i').css('bottom'));
            if(v_bottom!=0){
                    $nav_li.eq(index).find('i').animate({bottom:'0px'},'fast');
                    }
            })
});