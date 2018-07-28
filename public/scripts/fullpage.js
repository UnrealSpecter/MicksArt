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
            if(anchorLink === 'gallerij'){
                revealWorks('next');
            }
        }
    });
}

var worksIndex = 0;
$('.arrow-left, .arrow-right').on('click', function(){
    revealWorks($(this).data('direction'));
});

function revealWorks(direction){

    console.log(direction);

    $(document.getElementsByClassName('first-work')[worksIndex]).removeClass('invisible');
    $(document.getElementsByClassName("second-work")[worksIndex]).removeClass('invisible');
    $(document.getElementsByClassName("third-work")[worksIndex]).removeClass('invisible');
    $(document.getElementsByClassName("fourth-work")[worksIndex]).removeClass('invisible');
    $(document.getElementsByClassName("fifth-work")[worksIndex]).removeClass('invisible');
}

// DISPLAY WORK OR ARIST INFORMATION
$('.work').on('mouseenter', function(){
    setHoverInformation(this);
});

$('.artist').on('mouseenter', function(){
    setHoverInformation(this);
});

$('.work').on('mouseout', function() {
    animate('hover-information', 'fadeOut', 'fadeIn');
});

$('.artist').on('mouseout', function() {
    animate('hover-information', 'fadeOut', 'fadeIn');
});

//set hover box information
function setHoverInformation(element){
    var container = $('.hover-information');
    if($(element).data('title')){
        $('.title').text($(element).data('title'));
        $('.artist').text($(element).data('artist'));
    }
    else {
        $('.title').text($(element).data('name'));
    }
    animate('hover-information', 'fadeIn', 'invisible fadeOut');
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

// MENU OVERLAY ON/OFF
function on() {
    $('.menu-overlay').removeClass('invisible').removeClass('no-pointer-events');
}

function off() {
    $('.menu-overlay').addClass('invisible').addClass('no-pointer-events');
}

//simple animate function to make animating easier and remove user errors like appending the correct classes
function animate(element, animationToAdd, animationToRemove, delay) {

    //check if the animated class is available.
    if(!$('.' + element).hasClass('animated')){
        $('.' + element).addClass('animated');
    }

    //on the elment remove the desired animation that needs to be removed and add the new one
    $('.' + element).removeClass(animationToRemove).addClass(animationToAdd);

}
