/**
 * Created by Administrator on 2017/6/16.
 */


/*导航栏点击滑到固定div的jquery*/
$(function(){
    $("#backToTop").click(function(){
        $("html,body").animate({scrollTop:'0px'},800);
    });
    $(".content>div>.button").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(1)").offset().top-120},800);
    });
    $(".navbar>.container-fluid>.navbar-content>nav>ul>li:nth-child(2)>a").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(1)").offset().top-120},800);
    });
    $(".navbar>.container-fluid>.navbar-content>nav>ul>li:nth-child(3)>a").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(2)").offset().top-120},800);
    });
    $(".navbar>.container-fluid>.navbar-content>nav>ul>li:nth-child(4)>a").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(3)").offset().top-120},800);
    });
    $(".navbar>.container-fluid>.navbar-content>nav>ul>li:nth-child(5)>a").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(4)").offset().top-120},800);
    });

})


/*返回顶层按钮的jquery*/

$(function(){
    $(window).on('scroll',function(){
        var $window = $(this).scrollTop();
        if($window<=$("#container>.sections>.section:nth-child(1)").offset().top){
            $("#backToTop").hide();
        }else{
            $("#backToTop").show();
        }
    })
})


/*项目经验点击切换的jquery*/
$(function(){
    $('.experience nav ul li').click(function(){
        $('.experience nav ul li.active').removeClass('active');
        $(this).addClass('active')
    })
    $('.experience nav ul li:nth-child(1)').click(function(){
        $('.experience .experience_divs .flex-wrap:nth-child(2)').hide();
        $('.experience .experience_divs .flex-wrap:nth-child(1)').show();
    })
    $('.experience nav ul li:nth-child(2)').click(function(){
        $('.experience .experience_divs .flex-wrap:nth-child(1)').hide();
        $('.experience .experience_divs .flex-wrap:nth-child(2)').show();
    })
})