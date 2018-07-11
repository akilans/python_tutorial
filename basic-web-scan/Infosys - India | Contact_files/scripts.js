//Adobe DTM Datalayer
$("#btnSearchForJs").click(function () {

    if ($("#txtSearch").val() != "") {
        var DTM_search_keyword = $("#txtSearch").val();
        digitalData = {
            search: {
                'internalSearchKeywords': DTM_search_keyword
            }
        };
    }
});
//Adobe DTM Datalayer END


head.js("/Style%20Library/JSFiles/responsive/all.min.js", "/Style%20Library/JSFiles/responsive/jquery.cycle.all.js", "/Style%20Library/JSFiles/responsive/ertefunction.js", "/Style%20Library/JSFiles/responsive/jquery.cookie.js", "/Style%20Library/JSFiles/responsive/jquery.placeholder.js", "/Style Library/JSFiles/responsive/jquery.prettyPhoto.js", "/style library/jsfiles/responsive/cmsinfy.js", "/style library/jsfiles/responsive/mihu.js", "//code.jquery.com/jquery-migrate-1.0.0.js", "/Style%20Library/JSFiles/responsive/imageMapResizer.min.js");
head.ready(function () {
    Execute_ERTE();
    $('.toogle-mobile-menu').click(function (e) {
        e.preventDefault();
    });
    $(".search-wrap button").click(function () {
        $(this).parent().find('input.text').toggle();
        $(this).parent().toggleClass('on');
    });
    function e(e) {
        var t = e.toLowerCase(),
            n = function (e) {
                return t.indexOf(e) > -1
            }, r = "gecko",
            i = "webkit",
            s = "safari",
            o = "opera",
            u = "mobile",
            a = document.documentElement,
            f = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + RegExp.$1 : n("firefox/2") ? r + " ff2" : n("firefox/3.5") ? r + " ff3 ff3_5" : n("firefox/3.6") ? r + " ff3 ff3_6" : n("firefox/3") ? r + " ff3" : n("gecko/") ? r : n("opera") ? o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.$1 : /opera(\s|\/)(\d+)/.test(t) ? " " + o + RegExp.$2 : "") : n("konqueror") ? "konqueror" : n("blackberry") ? u + " blackberry" : n("android") ? u + " android" : n("chrome") ? i + " chrome" : n("iron") ? i + " iron" : n("applewebkit/") ? i + " " + s + (/version\/(\d+)/.test(t) ? " " + s + RegExp.$1 : "") : n("mozilla/") ? r : "", n("j2me") ? u + " j2me" : n("iphone") ? u + " iphone" : n("ipod") ? u + " ipod" : n("ipad") ? u + " ipad" : n("mac") ? "mac" : n("darwin") ? "mac" : n("webtv") ? "webtv" : n("win") ? "win" + (n("windows nt 6.0") ? " vista" : "") : n("freebsd") ? "freebsd" : n("x11") || n("linux") ? "linux" : "", "js"];
        c = f.join(" ");
        a.className += " " + c;
        return c
    }
    $("body").addClass("desktop-devices");

    $(window).ready(function () {
        var e = $(window).width();
        $(window).resize(function () {
            var e = $(window).width();
            if (e <= 768) {
                $("body").addClass("mobile-devices").removeClass("tablet-devices").removeClass("desktop-devices")
            } else if (e <= 1024) {
                $("body").addClass("tablet-devices").removeClass("mobile-devices").removeClass("desktop-devices")
            } else {
                $("body").addClass("desktop-devices").removeClass("tablet-devices").removeClass("mobile-devices")
            }
        })
    });
    e(navigator.userAgent);
    var n = $(document).height();
    var r = $(document).width();
    var i = $(".nav-mobile-wrapper");
    $(".btn-navbar").click(function () {
        $(this).toggleClass("on");
        $(i).slideToggle()
        $('.sub-nav,.deep-nav').hide();
        $('.nav-primary-mobile .on').addClass('.off').removeClass('on');
    });
    $(".dropdown-wrap p").click(function () {
        $(this).toggleClass("on");
        $(".advanced-wrapper").fadeToggle()
    });
    //$("html").append('<a class="go-top btn" id="dtop" onclick="window.scrollTo(0,0)" style="outline:none"><i class="icon-arrow-up"></i></a>');
    //$(window).scroll(function () {
    //    if ($(this).scrollTop() > 200) {
    //        $(".go-top").show();
    //    } else {
    //        $(".go-top").hide();
    //    }
    //});
    $(".sub-nav").hide();
    $(".third-nav ul  > li  a.third-nav-anchor").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("on");
        $(this).parent().find(".sub-nav").slideToggle()
    });
    $(".toogle-mobile-menu").click(function () {
        $(this).toggleClass("on");
        $(".nav-footer-wrap").slideToggle();
    });
    //$(".nav-primary-mobile > li.mob-nav-global a").click(function () {
    //    $(this).toggleClass("on");
    //    $(this).parent().find("ul.sub-nav").toggle()
    //});
    $(document).on('click', '.nav-primary-mobile > li.mob-nav-global a', function () {
        $(this).toggleClass("on");
        $(this).parent().find("ul.sub-nav").toggle()
    });
    $(".sub-nav > li a").click(function () {
        $(this).parent().toggleClass("on");
        $(this).parent().find("ul.deep-nav").toggle();
        $('.sub-nav li.on a.on .icon-plus').addClass('hide-deep-plus-icon');
    });
    var s = $("html").attr("class");
    var chksliderClass = $('body').find('.bg-slide-wrapper').html();
    if (chksliderClass != undefined) {
        var windowHeight = $(window).height();
        var windowWidthSize = $(window).width();
        if (windowWidthSize > 1024 && windowHeight > 807) {
            fixedFooter()
        };
    }
    var contHeight = $('.content').height();
    var windowHeight = $(window).height();
    if (windowHeight > 1090 && contHeight < 250) {
        fixedFooter()
    }
    if ($(".bg-slide-wrapper.bg-slide-wrapper-infosys").length > 0) {


        $('.footer-widget-wrapper-outer').removeClass('fixed-footer');
        $('footer').removeClass('fixed-footer');

    }


    function fixedFooter() {

        $('.no-mobile .footer-widget-wrapper-outer').addClass('fixed-footer');
        $('.no-mobile footer').addClass('fixed-footer');
        $('.no-mobile .spotlight').addClass('adjusted-position');
        var homeFooterHeight = 300
        var homeHeaderOuter = $('.header-outer').height();
        var homenavPrimaryWrap = $('.nav-primary-wrap').height();
        var balancePixels = (windowHeight - (homeFooterHeight + homeHeaderOuter + homenavPrimaryWrap)) / 3;
        $('.no-mobile .spotlight').css('marginTop', balancePixels);
        var footerOuterHeight = $('.desktop footer').outerHeight();
        $('.no-mobile .footer-widget-wrapper-outer').css('bottom', footerOuterHeight + 70);

    }
    $('.eq-ie8.lt-1024 .table-wrap table,.eq-ie9.lt-1280 .table-wrap table').each(function () {
        tablcolCount = $('.eq-ie8.lt-1024 .table-wrap table tbody tr:first td,.eq-ie9.lt-1280 .table-wrap table tbody tr:first td').size();
        if (tablcolCount >= 3) {
            $('.table-wrap table').width(800);
        } else {
            $('.eq-ie9.lt-1280 .table-wrap,.eq-ie8.lt-1024 .table-wrap').css('overflow-x', 'visible');
        }
        $('.eq-ie9.mobile .table-wrap table').width('800');
        $('.eq-ie9.mobile .table-wrap').css('overflow-x', 'auto');
    });
    $(window).resize(function () {
        if ($(window).width() < 1025) {
            var tablcolCount = $('.eq-ie8 .table-wrap table tbody tr:first td').size();
            if (tablcolCount > 3) {
                $('.eq-ie8 .table-wrap table').width('800');
            } else {
                $('.eq-ie8 .table-wrap').css('overflow-x', 'auto');
            }
        }
    });
    $('#fgSlider').cycle({
        cleartype: true,
        cleartypeNoBg: true,
        speed: 800,  // speed of the transition (any valid fx speed value) 
        speedIn: 1600,  // speed of the 'in' transition 
        speedOut: 900,  // speed of the 'out' transition 
        timeout: 10000,
        fx: 'fade',
        pager: '.spotlight-pagination'
    });
    $('#bgSlideImages').cycle({
        cleartype: true,
        cleartypeNoBg: true,
        speed: 800,  // speed of the transition (any valid fx speed value) 
        speedIn: 1600,  // speed of the 'in' transition 
        speedOut: 900,  // speed of the 'out' transition 
        fx: 'fade',
        timeout: 10000
    });
    $('.carousel').carousel({ interval: 3000, cycle: true });
    //$('#fgSlider').cycle({
    //    pager: '.spotlight-pagination'
    //});
    $('#goto1').click(function () {
        $('#bgSlideImages, .spotlight ul').cycle(0);
        return false;
    });
    $('#goto2').click(function () {
        $('#bgSlideImages, .spotlight ul').cycle(1);
        return false;
    });
    $('#goto3').click(function () {
        $('#bgSlideImages, .spotlight ul').cycle(2);
        return false;
    });
    $('.spotlight-pagination a').click(function () {
        var leadno = $(this).text();
        $('#bgSlideImages, .spotlight ul').cycle(leadno - 1);
        return false;
    });
    //if ($('html').hasClass('mobile')) {
    //    $('footer .col-md-12').append('<div class="nav-footer no-bdr-btm"><ul class="best-view-text"><li><a>The website is best experienced on the following versions (or higher) of Android 4.0 Stock, Chrome 32, Safari 6, Blackberry 7.0 and Internet Explorer 9 browsers</a></ul></div>');
    //} else {
    //    $('footer .col-md-12').append('<div class="nav-footer no-bdr-btm"><ul class="best-view-text"> <li> <a>The website is best experienced on the following version (or higher) of Chrome 31, Firefox 26, Safari 6 and Internet Explorer 9 browsers</a></li></ul></div>');
    //}
    $('table').each(function () {
        var headerVal = $(this).find('thead').html();
        if (headerVal == undefined) {
            $(this).addClass('no-header-table');
        }
    });
    $(window).on('scroll', function () {
        $('h3 a,.multiple-links-container a').css('color', '#015D97');
    });
    $(window).resize(function () {
        if ($(window).width() < 1190) {
            $('#fgSlider,#fgSlider>li').css('width', '100%')
        }
        if ($(window).height() < 1000) {
            $('footer,.footer-widget-wrapper-outer').removeClass('fixed-footer');
        } else {
            $('footer,.footer-widget-wrapper-outer').addClass('fixed-footer');
        }
        if ($(window).width() >= 1900) {
            $('footer,.footer-widget-wrapper-outer').removeClass('fixed-footer');
        }
    });

    $(document).on('click', '.logged-in-info a', function () {
        $(this).toggleClass('active')
        $(this).next().slideToggle('fast');
    });

    $('map').imageMapResize();
    $(document).on("click", ".close-nav", function () {

        $('.cookie-outer').hide();

    });



    function isMacintosh() {
        return navigator.platform.indexOf('Mac') > -1

    }

    var isMac = isMacintosh();

    if (isMac == true) {
        $('footer,.footer-widget-wrapper-outer').removeClass('fixed-footer')
        $('.footer-widget-wrapper-outer').addClass('macFooter');

    }

    /* Scripts added by Raji - For new design of 5 pages */

    if (window.location.hash) {
        var options = {};
    }

    $('.infy-r-prod-sublist li a').bind('click', function (event) {
        event.stopPropagation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    /* Smooth scroll to specific div on click */
    window.smoothScroll = function (target) {
        var scrollContainer = target;

        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        scroll = function (c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () { scroll(c, a, b, i); }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }
    /* //Smooth scroll to specific div on click */

    var slidingHamMenu_show = false;

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if (slidingHamMenu_show == false) {
            if ($(this).scrollTop() > 100) {
                $('.infy-r-scrollToTop').fadeIn();
                $('#header-2, .infy-r-page_header_mobile').addClass('fixTop');
                $('#header-2 a').removeClass('active');
            } else {
                $('.infy-r-scrollToTop').fadeOut();
                $('#header-2, .infy-r-page_header_mobile').removeClass('fixTop');
                $('.infy-r-header_title').removeClass('highlight');
                $('.infy-r-menuCont').slideUp();
            }
        }
    });

    //Click event to scroll to top
    $('.infy-r-scrollToTop').on('click touchstart', function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
        //return false;
    });

    $(".infy-r-custom-select").select2();

    //$('#home-page-carousel,#industries-carousel,#services-carousel,#product-carousel').carousel();
    $('.carousel').carousel();

    /* sub menu click active- start */
    $('ul.infy-r-prod-sublist li a').click(
		function () {
		    $(this).closest('ul').find('.infy-r-selected-sub-list').removeClass('infy-r-selected-sub-list');
		    $(this).parent().addClass('infy-r-selected-sub-list');
		});
    /* sub menu click active - end */

    $('.infy-r-search_icon').on("click", function (event) {
        //$('.infy-r-searchArea').show();
        $('.search_input').focus();
    });

    /*$('.close_search').click(function (e) {
        $('.infy-r-searchArea').hide();
    });*/

    $('.infy-r-mobileHeader .infy-r-search_icon').click(function (e) {
        $('.infy-r-mobileHeader').addClass('mobileHeader_bg');
        $('.infy-r-mobileHeader .search_input').show().focus();
        $('.close_search').show();
    });

    $('.close_search').click(function (e) {
        $('.infy-r-mobileHeader').removeClass('mobileHeader_bg');
        $('.infy-r-mobileHeader .search_input, .close_search').hide();
    });

    $('.search_input').focus(function (e) {
        $('.search_cont').addClass('highlight');
    });

    $('.search_input').blur(function (e) {
        $('.search_cont').removeClass('highlight');
    });


    $('.infy-r-iconShareBx .infy-r-iconsshare').hide();
    $('.infy-r-icon-share ').on("click", function (event) {
        $(this).siblings('.infy-r-iconShareBx').find('.infy-r-iconsshare').show();
    });

    $('.infy-r-close_share').click(function (e) {
        $(this).parent().parent().parent('.infy-r-iconsshare').hide();
    });

    $('.infy-r-menu_icon').click(function () {
        //$('.infy-r-overlay').show();
        $('body').addClass('infy-r-no-scroll');
        $(".infy-r-slidingHamMenu").show().animate({ right: 0 }, 200, function () {
            slidingHamMenu_show = true;
        });
    });

    $('.infy-r-slidingClose').click(function () {
        $(".infy-r-slidingHamMenu").animate({ right: "-320px" }, 200, function () {
            $('.infy-r-overlay').hide();
            $('body').removeClass('infy-r-no-scroll');
            if ($('html').hasClass('mobile') && $('html').hasClass('eq-ie9')) {
                $('.infy-r-slidingHamMenu').hide();
            }
            slidingHamMenu_show = false;
        });
    });

    if ($('html').hasClass('desktop') && $('html').hasClass('eq-ie9')) {
        $("link[href*='all.min.css']").attr('disabled', 'disabled');
        $("link[href*='all.min.css']").attr('disabled', true);
        $("link[href*='all.min.css']").remove();
    }

    $('.cookie-outer .close-nav').click(function (e) {
        $('.cookie-outer').hide();
    });

    $('.popOverMenu').hide();
    /*popover Menu*/
    $(document).on('click', '.popOver', function (e) {
        e.stopPropagation();
        if ($(this).closest('li').find('.popOverMenu').is(':visible')) {
            $('.popOverMenu').hide();
        } else {
            $('.popOverMenu').hide();
            $(this).closest('li').find('.popOverMenu').show();
        }
    })

    $('.popOverMenu li a').on('click', function (e) {
        e.stopPropagation();
        $('.popOverMenu').hide();
    })

    /*$(document).click(function (e) {
        $('.dd_option').css({ "display": "none" });
    });*/

    $(document).on('click', '.dd_val', function (event) {
        if ($(this).siblings('.dd_option').css("display") == "none") {
            $('.dd_option').hide();
        }
        $(this).siblings('.dd_option').toggle();
    });

    $('.dd_option ul li').click(function () {
        var curObj = $(this).parentsUntil('div.dd_option').parent().siblings('.dd_val');
        curObj.html($(this).find('a').html());
        $(this).parent().parent('.dd_option').toggle();
        if ($(this).parent().parent().parent().hasClass('infy-r-pageSelect')) {
            var cur_val = $(this).find('a').attr('href');
            var scroll_topVal = $(cur_val).offset().top - 50;
            $('html, body').stop().animate({ scrollTop: scroll_topVal }, 200); // Visible Header Height is 50
        }
    });



    var $sections = $('section .infy-r-navigation');

    // The user scrolls
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        var $currentSection

        $sections.each(function () {
            var divPosition = $(this).offset().top - 70;

            if (divPosition - 1 < currentScroll) {
                $currentSection = $(this);

                var id = $currentSection.attr('id');
                $('#header-2 a').removeClass('active');
                $("[href=#" + id + "]").addClass('active');

                /* For Mobile - drop down option change while scrolling */
                $('.infy-r-pageSelect ul li').each(function () {
                    if ($(this).find('a').attr('href') == '#' + id) {
                        $('.infy-r-pageSelect .bc_text').html($(this).find('a').html());
                        $('.infy-r-pageSelect .bc_text').attr('title', $(this).find('a').html());
                    }
                })

            }

        })
    });

    $('#header-2 .infy-r-header_title').click(function (e) {
        if ($('.infy-r-menuCont').css('display') == 'none') {
            $(this).addClass('highlight');
        } else {
            $(this).removeClass('highlight');
        }
        $('.infy-r-menuCont').slideToggle();

    });

    $('.infy-r-menuClose').click(function (e) {
        $('.infy-r-header_title').removeClass('highlight');
        $('.infy-r-menuCont').slideUp();
    });

    $('.infy-r-page_header_mobile .infy-r-header_title').click(function (e) {
        $('.infy-r-menuContMobile').slideDown();
        $('body').addClass('infy-r-no-scroll');
    });

    $('.infy-r-menuClose-mobile').click(function (e) {
        $('.infy-r-menuContMobile').slideUp();
        $('body').removeClass('infy-r-no-scroll');
    });

    $('.infy-r-expand').click(function (e) {
        $(this).hide();
        $(this).parent().siblings().hide();
        $(this).parent().addClass('infy-r-noBorder');
        $(this).siblings('div.infy-r-second-level').slideDown();
    });

    $('.navigate-back').click(function (e) {
        $(this).parent().hide();
        $(this).parent().siblings().show();
        $(this).parent().parent().removeClass('infy-r-noBorder');
        $(this).parent().parent().siblings('li').show();
    });

    $('.infy-r-section-article a').bind('click', function (event) {
        var anchor_href = $(this).attr('href');
        if (!$(this).parent().hasClass('panel-title')) {// To solve accordion issue
            if (!$(this).hasClass('listing-share')) {// To open modal while clicking share
                if (anchor_href.indexOf('#') != -1 && anchor_href.indexOf('#') == 0) {
                    event.stopPropagation();
                    var elem_name = anchor_href.split('#');
                    var anchor_elem = $("a[name=" + elem_name[1] + "]");
                    $('html, body').stop().animate({
                        scrollTop: anchor_elem.offset().top - 50
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                }
            }
        }
    });

    var panel_articleHeight = $('.panel-article').height();
    var fixedControlHeight = $('.fixedControl').height();

    if (panel_articleHeight > fixedControlHeight) {
        $('.fixedControl_cont').css('height', panel_articleHeight);
    } else {
        $('.fixedControl_cont').css('height', fixedControlHeight);
    }

    $(window).scroll(function (e) {
        if ($(this).scrollTop() + fixedControlHeight < panel_articleHeight) {
            $('.fixedControl').removeClass('affixTop');
        } else {
            $('.fixedControl').addClass('affixTop');
        }
    });

    /* Scripts Added by Raji - End */

    /* Scripts Added by Binoy - Starts */
    function isEmpty(el) {
        return !$.trim(el.html())
    }
    if (isEmpty($('#section6 div div'))) {
        $('#section6').addClass('padding-clear');
    }
    /* Scripts Added by Binoy - Ends */

});

if (navigator.userAgent.match(/iPhone/i)) {
    $('select[multiple]').each(function () {
        var select = $(this).on({
            "focusout": function () {
                var values = select.val() || [];
                setTimeout(function () {
                    select.val(values.length ? values : ['']).change();
                }, 1000);
            }
        });
        var firstOption = '<option value="" disabled="disabled"';
        firstOption += (select.val() || []).length > 0 ? '' : ' selected="selected"';
        firstOption += '>Â« Select ' + (select.attr('title') || 'Options') + ' Â»';
        firstOption += '</option>';
        select.prepend(firstOption);
    });


}