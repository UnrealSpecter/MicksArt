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
      styleNavigationTooltips();
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
            setActiveMenuItem(anchorLink);
            if(anchorLink === 'micksart'){
                revealScrollIndicator('scroll-gallerij');
            }
            if(anchorLink === 'gallerij'){
                if(!initialWorksRevealed){
                    revealWorks('next');
                }
                revealScrollIndicator('scroll-hall-of-fame');
            }
            if(anchorLink === 'hall-of-fame'){
                if(!initialArtistsRevealed){
                    revealArtists('next');
                }
                revealScrollIndicator('scroll-contact');
            }
        }
    });
}

// give the nav tips on the right the colors matching the design.
function styleNavigationTooltips(){

    $( '#fp-nav > ul > li > a[href*="#micksart"] > span').css('background', '#e30b1a');
    $( '#fp-nav > ul > li > a[href*="#micksart"]').next().css('color', '#e30b1a');

    $( '#fp-nav > ul > li > a[href*="#gallerij"] > span' ).css('background', '#1d4354');
    $( '#fp-nav > ul > li > a[href*="#gallerij"]').next().css('color', '#1d4354');

    $( '#fp-nav > ul > li > a[href*="#hall-of-fame"] > span' ).css('background', '#bbc173');
    $( '#fp-nav > ul > li > a[href*="#hall-of-fame"]').next().css('color', '#bbc173');

    $( '#fp-nav > ul > li > a[href*="#contact"] > span' ).css('background', '#118bcc');
    $( '#fp-nav > ul > li > a[href*="#contact"]').next().css('color', '#118bcc');

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
// menu item
function setActiveMenuItem(anchorLink){
    $('.menu-item').removeClass('active');
    $('.' + anchorLink).addClass('active');
}

$('.arrow-left, .arrow-right').on('click', function(){
    var direction = $(this).data('direction');
    var currentPage = $(this).data('page');
    if(currentPage === 'works'){
        revealWorks(direction);
    } else {
        revealArtists(direction);
    }
});

// COUNTERS
var worksIndex = 0;
var works = document.getElementsByClassName('first-work').length;
var initialWorksRevealed = false;
function revealWorks(direction){
    if(initialWorksRevealed){
        console.log('amount of works: ', works, 'worksIndex: ', worksIndex, 'direction: ', direction);
        if(direction === 'next' && (worksIndex < (works - 1))){
            toggleWorks();
            worksIndex++;
            toggleWorks();
        }
        if(direction === 'previous' && worksIndex >= 1){
            toggleWorks();
            worksIndex--;
            toggleWorks();
        }
    }
    else {
        toggleWorks();
        initialWorksRevealed = true;
    }
}

var artistsIndex = 0;
var artists = document.getElementsByClassName('first-artist').length;
var initialArtistsRevealed = false;
function revealArtists(direction){
    if(initialArtistsRevealed){
        console.log('amount of artists: ', artists, 'artistsIndex: ', artistsIndex, 'direction: ', direction);
        if(direction === 'next' && (artistsIndex < (artists - 1))){
            toggleArtists();
            artistsIndex++;
            toggleArtists();
        }
        if(direction === 'previous' && artistsIndex >= 1){
            toggleArtists();
            artistsIndex--;
            toggleArtists();
        }
    }
    else {
        console.log('initial');
        toggleArtists();
        initialArtistsRevealed = true;
    }
}

function toggleWorks(){
    $(document.getElementsByClassName("first-work")[worksIndex]).toggle();
    $(document.getElementsByClassName("second-work")[worksIndex]).toggle();
    $(document.getElementsByClassName("third-work")[worksIndex]).toggle();
    $(document.getElementsByClassName("fourth-work")[worksIndex]).toggle();
    $(document.getElementsByClassName("fifth-work")[worksIndex]).toggle();
}

function toggleArtists(){
    $(document.getElementsByClassName("first-artist")[artistsIndex]).toggle();
    $(document.getElementsByClassName("second-artist")[artistsIndex]).toggle();
    $(document.getElementsByClassName("third-artist")[artistsIndex]).toggle();
    $(document.getElementsByClassName("fourth-artist")[artistsIndex]).toggle();
    $(document.getElementsByClassName("fifth-artist")[artistsIndex]).toggle();
}

// DISPLAY WORK OR ARIST INFORMATION
$('.work').hover(function(){
    var element = this;
    $(element).find('.work-information').css('height', '50%');
    setTimeout(function(){
        $(element).find('.work-information').find('.work-text').removeClass('d-none');
    }, 500);
}, function(){
    $(this).find('.work-information').css('height', '0%');
    $(this).find('.work-information').find('.work-text').addClass('d-none');
});

//set hover box information
function setHoverInformation(element){
    var container = $('.hover-information');
    if($(element).data('title')){
        $('.title').text($(element).data('title'));
        $('.name').text($(element).data('artist'));
    }
    // else {
    //     $('.title').text($(element).data('artist'));
    //     $('.name').text('');
    // }
    animate('hover-information', 'fadeIn', 'invisible fadeOut');
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
