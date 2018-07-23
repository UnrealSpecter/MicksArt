//script variables
var hidden = 'd-none';
var invisible = 'invisible';

var startedLoaderQuoteCycling = false;
var isRevealedInitialWhoAreWeAnimation = false;

var slideInLeft     = 'slideInLeft';
var slideInRight    = 'slideInRight';
var slideInUp       = 'slideInUp';
var slideInDown     = 'slideInDown';
var fadeIn          = 'fadeIn';
var fadeOut         = 'fadeOut';
var fadeInUp        = 'fadeInUp';
var fadeInDown      = 'fadeInDown';
var fadeInRight     = 'fadeInRight';
var fadeInLeft      = 'fadeInLeft';
var bounce          = 'infinite bounce';
var delay           = '500';

var animated = 'animated';
var halfSecond = 'half-a-second';
var oneSecond = 'one-second';

var animationTypes  = [animated, halfSecond, oneSecond];
var animations      = [slideInLeft, slideInRight, slideInUp, slideInDown, fadeIn, fadeOut, fadeInUp, fadeInDown, fadeInRight, fadeInLeft, bounce];

//on page load function (waits till the whole page is loaded)
window.onload = function(){
      window.document.body.onload = loaded(); // note removed parentheses
};

//initiate fullpage scrolling and reveal sections
function loaded(){

    $('.section, .active').removeClass('d-none').addClass('animated fadeIn');
    $('.section').removeClass('d-none').addClass('animated fadeIn');
    // $('.load-wrapper').addClass('animated fadeOut');

    $('.button').on('click', function(){
        cycleWhoAreWe();
    });

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['micksart', 'gallerij', 'hall-of-fame', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['micksart', 'gallerij', 'hall-of-fame', 'contact'],
        showActiveTooltip: false,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
            hideScrollIndicator();
        },
        afterLoad: function(anchorLink, index){
            if(anchorLink == 'jeugd-juridisch-advies'){
                logoAnimation();
                changeAnbiStyling('home');
        	}
            if(anchorLink == 'waar-helpen-we-mee'){
                if(!startedLoaderQuoteCycling){
                    startQuoteCycling();
                    startedLoaderQuoteCycling = true;
                }
                revealScrollIndicator('scroll-quotes');
                changeAnbiStyling('quotes');
        	}
            if(anchorLink == 'wie-zijn-wij'){
                if(!isRevealedInitialWhoAreWeAnimation){
                    $('.paragraph').first().removeClass(hidden);
                    $('.image-render').first().removeClass(hidden).addClass('fadeInUp');
                    isRevealedInitialWhoAreWeAnimation = true;
                }
                revealScrollIndicator('who-are-we');
                changeAnbiStyling('who-are-we');
        	}
            if(anchorLink == 'contact'){
                phoneAnimation();
                changeAnbiStyling('contact');
        	}
        }
    });
}

function hideScrollIndicator(){
    $('.scroll-indicator').not(hidden).addClass(hidden);
}

var scrollText = ' > .scroll-text';
var scrollArrow = ' > .scroll-arrow';
var scrollIndicator = '.scroll-indicator';

function revealScrollIndicator(section) {
    var section = '.' + section;
    $(scrollIndicator + section).removeClass(hidden);
    playSectionBounceIntro(section);
}

function playSectionBounceIntro(section){
    setTimeout(function(){
        $(scrollIndicator + section + scrollText).removeClass(fadeIn).addClass(bounce);
        $(scrollIndicator + section + scrollArrow).removeClass(fadeInUp).addClass(bounce);
    }, 1500);
}

//animate event to make animating stuff easier
function animate(selector, animationToAdd, classToRemove, duration, wait, onCompleteClassAdd) {

    var element, delay;
    wait ? delay = wait : delay = 0;
    selector instanceof jQuery ? element = selector : element = $('.' + selector);

    //remove existing animations and reset to a baseline
    $.each(animationTypes, function(index, type){
        if(element.hasClass(type)){
            $.each(animations, function(index, animation){
                element.removeClass(type).removeClass(animation);
            });
        }
    });

    // if there are miliseconds specified wait before applying the animation
    duration ? element.addClass(duration) : element.addClass('animated');
    setTimeout(function(){
        element.removeClass(classToRemove).addClass(animationToAdd);
    }, delay);

}
