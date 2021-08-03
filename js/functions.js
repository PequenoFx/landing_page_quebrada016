$(function(){

    $('.menu-icon img').click(function(){
        $('.menu-mobile ul').toggle(100)
    })

    /*MENU FIM*/


    $(window).scroll(function(){
        $('.sessao').each(function(){
            var windowOffY = $(window).scrollTop();
            var windowHeight = $(window).height();
            var elOffY = $(this).offset().top;
            if(elOffY+300 < (windowOffY + windowHeight) &&
                elOffY+300+$(this).height() > windowOffY){
                    $('a').css('color','black');
                    var target = $(this).attr('target');
                    $('.'+target).css('color','#FF3F00');
                    return;
                }
        })
    })

    /*EACH FIM*/

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })

    /*SLICK*/

    $('.container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: true,
        dots: true,
        responsive:[

        {
            breakpoint:900,
            settings:{
                centerMode: false,
                slidesToShow: 2,
                arrows: false,
                infinite: true,
                dots: true
            }
        },

        {
            breakpoint: 500,
            settings:{
                centerMode: false,
                slidesToShow: 1,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000
            }
        }      
        ]
    })

    $('.vendas .vendas-container .flex-venda').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:[

        {
            breakpoint:900,
            settings:{
                centerMode: false,
                slidesToShow: 3,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000
            }
        },

        {
            breakpoint: 670,
            settings:{
                centerMode: false,
                slidesToShow: 2,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000
            }
        },

        {
            breakpoint: 380,
            settings:{
                centerMode: false,
                slidesToShow: 1,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000
            }
        
        }
        
        ]
    })
})