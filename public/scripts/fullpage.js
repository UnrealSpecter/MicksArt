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
    //if ismobile remove 300ms delay by using hammer events else just use the standard tooltips
    if(isMobile()){
        initMobileAccelleration();
    }
    styleNavigationTooltips();
};

window.isMobile = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

    return check;
};

function initMobileAccelleration() {

    $('.work').hammer().bind("tap", function(ev) {
        var workHidden = $($(ev.currentTarget).children().children()[0]).hasClass('d-none');
        if(workHidden){
            showOrHideWorkInformation(ev.currentTarget, 'reveal');
        }
        else {
            showOrHideWorkInformation(ev.currentTarget, 'hide');
        }
    });

}

//initiate fullpage scrolling and reveal sections
function loaded(){

    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        // Announce the new orientation number
        // alert(window.orientation);
        var url = window.location.href;
        var hash = url.substring(url.indexOf("#")+1);

        if(window.orientation === 90 && hash === 'gallerij' && !initialWorksRevealed){
            revealDesktopWorks('next');
        }
        if(window.orientation === 0 && hash === 'gallerij' && !initialMobileWorkRevealed){
            revealMobileWorks('next');
        }
        if(window.orientation === 90 && hash === 'hall-of-fame' && !initialArtistsRevealed){
            revealDesktopArtists('next');
        }
        if(window.orientation === 0 && hash === 'hall-of-fame' && !initialMobileArtistRevealed){
            revealMobileArtists('next');
        }
    }, false);

    $('.section, .active').removeClass('d-none').addClass('animated fadeIn');
    $('.section').removeClass('d-none').addClass('animated fadeIn');

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
            hideScrollIndicatorAndScrollArrows();
        },
        afterLoad: function(anchorLink, index){
            setActiveMenuItem(anchorLink);
            if(anchorLink === 'micksart'){
                revealScrollIndicatorAndArrows('scroll-gallerij');
            }
            if(anchorLink === 'gallerij'){

                // SHOW EXPLANATION TOOLTIPS
                showExplanationToast();

                // SHOW THE WORKS DESKTOP
                if(!initialWorksRevealed){
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        revealDesktopWorks('next');
                    }
                }

                // SHOW THE MOBILE VERSION OF THE WORKS
                if(!initialMobileWorkRevealed){
                    if (window.matchMedia("(orientation: portrait)").matches) {
                        revealMobileWorks('next');
                    }
                }

                // REVEAL SCROLL INDICATOR
                revealScrollIndicatorAndArrows('scroll-hall-of-fame');

            }
            if(anchorLink === 'hall-of-fame'){

                // SHOW EXPLANATION TOOLTIPS
                showExplanationToast();

                // SHOW ARTISTS
                if(!initialArtistsRevealed){
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        revealDesktopArtists('next');
                    }
                }

                // SHOW ARTISTS MOBILE
                if(!initialMobileArtistRevealed){
                    if (window.matchMedia("(orientation: portrait)").matches) {
                        revealMobileArtists('next');
                    }
                }

                // REVEAL SCROLL INDICATORS
                revealScrollIndicatorAndArrows('scroll-contact');
            }
        }
    });

    //hide nav on mobile and show only on desktop
    if(window.innerWidth < 1200){
        $('#fp-nav').addClass('d-none');
    }
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

function hideScrollIndicatorAndScrollArrows(){
    $('.scroll-indicator').not(hidden).addClass(hidden).removeClass('animated-slow').addClass('animated');
    $('.arrow-left, .arrow-right').not(hidden).addClass(hidden);
}

var scrollText = ' > .scroll-text';
var scrollArrow = ' > .scroll-arrow';
var scrollIndicator = '.scroll-indicator';
function revealScrollIndicatorAndArrows(section) {
    var section = '.' + section;
    $(scrollIndicator + section).removeClass(hidden);
    $('.arrow-left, .arrow-right').removeClass(hidden);
    playSectionBounceIntro(section);
}

function playSectionBounceIntro(section){
    setTimeout(function(){
        // console.log($(section + ' > a'+ scrollArrow));
        $(section + ' > a'+ scrollArrow).removeClass(fadeInUp).addClass(bounce).addClass('animated-slow');
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
        if (window.matchMedia("(orientation: landscape)").matches) {
            revealDesktopWorks(direction);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            revealMobileWorks(direction);
        }
    } else {
        if (window.matchMedia("(orientation: landscape)").matches) {
            revealDesktopArtists(direction);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            revealMobileArtists(direction);
        }
    }
});

// COUNTERS
var worksIndex = 0;
var works = document.getElementsByClassName('first-work').length;
var initialWorksRevealed = false;
function revealDesktopWorks(direction){
    if(initialWorksRevealed){
        // console.log('amount of works: ', works, 'worksIndex: ', worksIndex, 'direction: ', direction);
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

var mobileWorksIndex = 0;
var mobileWorks = document.getElementsByClassName('mobile-work').length;
var initialMobileWorkRevealed = false;
function revealMobileWorks(direction){
    if(initialMobileWorkRevealed){
        // console.log('amount of works: ', works, 'worksIndex: ', worksIndex, 'direction: ', direction);
        if(direction === 'next' && (mobileWorksIndex < (mobileWorks - 1))){
            toggleMobileWork();
            mobileWorksIndex++;
            toggleMobileWork();
        }
        if(direction === 'previous' && mobileWorksIndex >= 1){
            toggleMobileWork();
            mobileWorksIndex--;
            toggleMobileWork();
        }
    }
    else {
        toggleMobileWork();
        initialMobileWorkRevealed = true;
    }
}

var mobileArtistsIndex = 0;
var mobileArtists = document.getElementsByClassName('mobile-artist').length;
var initialMobileArtistRevealed = false;
function revealMobileArtists(direction){
    if(initialMobileArtistRevealed){
        // console.log('amount of works: ', works, 'worksIndex: ', worksIndex, 'direction: ', direction);
        if(direction === 'next' && (mobileArtistsIndex < (mobileArtists - 1))){
            toggleMobileArtist();
            mobileArtistsIndex++;
            toggleMobileArtist();
        }
        if(direction === 'previous' && mobileArtistsIndex >= 1){
            toggleMobileArtist();
            mobileArtistsIndex--;
            toggleMobileArtist();
        }
    }
    else {
        toggleMobileArtist();
        initialMobileArtistRevealed = true;
    }
}

var artistsIndex = 0;
var artists = document.getElementsByClassName('first-artist').length;
var initialArtistsRevealed = false;
function revealDesktopArtists(direction){
    if(initialArtistsRevealed){
        // console.log('amount of artists: ', artists, 'artistsIndex: ', artistsIndex, 'direction: ', direction);
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
        toggleArtists();
        initialArtistsRevealed = true;
    }
}

function toggleMobileWork(){
    $(document.getElementsByClassName("mobile-work")[mobileWorksIndex]).toggle();
}

function toggleMobileArtist(){
    $(document.getElementsByClassName("mobile-artist")[mobileArtistsIndex]).toggle();
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
    showOrHideWorkInformation(this, 'reveal');
}, function(){
    showOrHideWorkInformation(this, 'hide');
});

function showOrHideWorkInformation(element, animation){
    // console.log(element);
    if(animation === 'reveal'){
        $(element).find('.work-information').css('height', '100%');
        $(element).find('.work-information').find('.work-text').removeClass('d-none');
        $(element).find('.work-information').find('.work-text-description').removeClass('d-none');
    }
    if(animation === 'hide'){
        $(element).find('.work-information').css('height', '0%');
        $(element).find('.work-information').find('.work-text').addClass('d-none');
        $(element).find('.work-information').find('.work-text-description').addClass('d-none');
    }
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

var shownExplanation = false;
function showExplanationToast(){
    if(!shownExplanation){

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": 'toast-top-center',
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        toastr["info"]("Tap de pijltjes om te navigereren tussen de werken. Tap het kunstwerk om meer informatie te zien.");



        shownExplanation = true;
    }
}
