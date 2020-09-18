$(function () {
    var interval;
    // 메뉴열기 : 웹/태블릿
    $('.gnb > ul > li').hover(
        function () {
            // 메뉴 열기
            clearInterval(interval);
            $('.gnb_bg').css('display', 'block');
            $(this).children('div.submenu').css('display', 'block');
        },
        function () {
            // 메뉴 닫기
            $('.gnb_bg').css('display', 'none');
            $(this).children('div.submenu').css('display', 'none');
            $('.pcmbg').removeClass('on');
        }
    )

    $.each($('.gnb #head_menu li a'), function () {
        $(this).bind('hover focus', function () {
            // 메뉴 열기
            clearInterval(interval);
            $('.gnb_bg').css('display', 'block');
            $(this).parent().children('div.submenu').css('display', 'block');
        })
    });


    $(document).mouseup(function (e) {
        var container = $('ul.side-menu');
        if ((!container.is(e.target) && container.has(e.target).length === 0) &&
            (!($('a.menu-icon').is(e.target)) && $('a.menu-icon').has(e.target).length === 0)) {
            container.removeClass("in");
            $('body, div.navigation').removeClass("open");
            $('ul.side-menu li').css("top", "100%");
        }
    });

    $("a.menu-icon").click(function (e) {
        e.preventDefault();
        if ($('div.navigation, body').hasClass('open')) {
            $('div.navigation').removeClass('open');
            $('body').removeClass('open');

        } else {
            $('div.navigation').addClass('open');
            $('body').addClass('open');
        }

    })

    //메인 슬라이드
    setImageSlide('#main-visual div.main-visual-box', true, 3000);
    function setImageSlide(selector, status, speed) {
        var numSlide = $(selector).find('ul.slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var timerId = '';
        var timerSpeed = speed;
        var isTimerOn = status;
        var startX = 0;
        var startY = 0;
        var delX = 0;
        var delY = 0;
        var offsetX = 0;

        //초기화
        $(selector).find('ul.slide li').each(function(i) {
            $(selector).find('ul.indicator').append('<li><a href="#">' + (i + 1) + '번 슬라이드 보기</a></li>\n');
            $(this).css({'display': 'block', 'left': (i * 100) + '%'});
        });
        if (isTimerOn === true) {
            $('#main-visual a.play').addClass('on');
        } else {
            $('#main-visual a.play').removeClass('on');
        }
        showSlideAnimation(1);

        $(selector).find('a.prev').on('click', function() {
            $(this).stop(true).animate({'left': '-5px'}, 50).animate({'left': '10px'}, 100);
            showSlideAnimation(slidePrev);
        });
        $(selector).find('a.next').on('click', function() {
            $(this).stop(true).animate({'right': '-5px'}, 50).animate({'right': '10px'}, 100);
            showSlideAnimation(slideNext);
        });
        $(selector).find('ul.indicator li a').on('click', function() {
            var index = $('#main-visual ul.indicator li').index($(this).parent());
            showSlideAnimation(index + 1);
        });
        $('#main-visual a.play').on('click', function() {
            if (isTimerOn === true) {
                clearTimeout(timerId);
                $(this).removeClass('on');
                isTimerOn = false;
            } else {
                timerId = setTimeout(function() {showSlideAnimation(slideNext);}, timerSpeed);
                $(this).addClass('on');
                isTimerOn = true;
            }
        });
        //모바일 스와이프
        $(selector).find('ul.slide').on('touchstart', function(e) {
            if ($(window).width() < 1025) {
                e.preventDefault();
                clearTimeout(timerId);
                $(this).css({'transition' : 'none'});
                startX = e.touches[0].clientX;
                offsetX = $(this).position().left;
                $(document).on('touchmove', function(e) {
                    delX = e.touches[0].clientX - startX;
                    if ((delX > 0 && slideNow === 1) || (delX < 0 && slideNow === numSlide)) {
                        delX = delX / 10;
                    }  
                    $(selector).find('ul.slide').css({'left': (offsetX + delX) + 'px'});
                });
                $(document).on('touchend', function(e) {
                    if (delX < -50 && slideNow !== numSlide) {
                        showSlideAnimation(slideNext);
                    } else if (delX > 50 && slideNow !== 1) {
                        showSlideAnimation(slidePrev);
                    } else {
                        showSlideAnimation(slideNow);
                    }
                    $(document).off('touchmove touchend');
                });
            }
        });
        
        function showSlideAnimation(n) {
            clearTimeout(timerId);
            if (slideNow === 0) {
                $(selector).find('div ul.slide').css({'transition': 'none','left': -((n - 1) * 100) + '%'});
            } else {
                $(selector).find('div ul.slide').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
            }
            $(selector).find('ul.indicator li').removeClass('on');
            $(selector).find('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n - 1) < 1 ? numSlide : n - 1;
            slideNext = (n + 1) > numSlide ? 1 : n + 1;
            if (isTimerOn === true) {
                timerId = setTimeout(function() {showSlideAnimation(slideNext);}, timerSpeed);
            }
        }
    }
});