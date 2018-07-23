# Dhevak-Code-Base
#### Inhouse CMS + Framework base that sits at the core of every project.

## Base
- Laravel v5.6.
- Voyager v1.1.

## Packages
- intervention/image v2.4

## The Philosophy 
Laravel is used as a base encapsuling everything. On top of that Voyager is used to create a CMS.
Internally we have a couple of different parts.
  - Views
  - Plugins
  - Public

## The Views
The views are divided the following parts: 
 - Master   (resources/views/master.blade.php)
 - Meta     (resources/views/meta.blade.php)
 - Scripts  (resources/views/scripts.blade.php)
 - Style    (resources/views/style.blade.php)
 
### Master   
The master is the layout which holds the base html template. This is the base for everything.
 
### Meta      
The meta holds all of the meta data of the project.
 
### Scripts  
The scripts file holds all of the scripts. It's divided into the following parts: 
  - The base holds all of the scripts that need to be loaded into every page on the site. (e.g bootstrap, jquery, etc)
  - The dynamic part holds all of the scripts that need to be loaded on that specific page.
    
 ### Style    
 The style partial holds all of the style files and has the same setup as the scripts. As follows: 
  - The base holds all of the project wide styles. (bootstrap, animate, etc)
  - The dynamic part adds the page specific styles.
 
 ## The Public
 The public folder holds all of the assets.
  - assets  (public/assets)
  - plugins (public/plugins)
  - styles  (public/styles)
  - scripts (public/scripts)
 
### Assets
The assets folder is where all of the project's assets are stored. It can be further divided into more folder to store the assets based on the page or functionality.
 
### Plugins
The plugin folder is used to store all of the plugins required for the project. Each plugin has it's own folder. The plugin folder itself is divided into the following:
 - The JS folder holds all of the plugins scripts.   (public/plugins/plugin/js)
 - The CSS folder holds allf ot the plugins styles.  (public/plugins/plugin/css)
 
 The current default plugins that are used in the base project are the following:
 
 - Jquery                   v3.2.1 (https://jquery.com/)
 - Bootstrap                v4.0   (https://getbootstrap.com/docs/4.0/getting-started/introduction/)
 - Hammer                   v0.0   (https://hammerjs.github.io/)
 - Tether                   v0.0   (http://tether.io/)
 - Normalize                v0.0   (https://necolas.github.io/normalize.css/)
 - Animate                  v0.0   (https://daneden.github.io/animate.css/)
 - google-analytics         v0.0   (https://www.google.com/analytics/)
 - modernizr                v.0.0  (https://modernizr.com/)
 - outdatedbrowser          v.0.0  (http://outdatedbrowser.com/nl)
 
 #### Available.
 - clipboard (https://github.com/zenorocha/clipboard.js.git)
 - cookie (https://github.com/js-cookie/js-cookie)
 - dragend (http://stereobit.github.io/dragend/)
 - flipping_text (https://github.com/peachananr/flipping_text)
 - fullpage-scroll (https://alvarotrigo.com/fullPage/)
 - fullscreen-form (https://github.com/codrops/FullscreenForm)
 - goal-progress (https://github.com/tinacious/goalProgress)
 - hamburger (https://jonsuh.com/hamburgers/)
 - hover (http://ianlunn.github.io/Hover/)
 - imageMapResizer (https://github.com/davidjbradshaw/image-map-resizer)
 - justified-gallery (http://miromannino.github.io/Justified-Gallery/)
 - maximage (http://www.aaronvanderzwan.com/maximage/)
 - moment (https://momentjs.com/)
 - pagepilling (https://alvarotrigo.com/pagePiling/#page1)
 - popper (https://popper.js.org/)
 - sidebar-menu (https://tympanus.net/Development/SidebarTransitions/)
 - stellar (http://markdalgleish.com/projects/stellar.js/)
 - swipebox (http://brutaldesign.github.io/swipebox/#basic)
 - textinputeffects (https://github.com/codrops/TextInputEffects)
 - toastr (https://github.com/CodeSeven/toastr)
 - turnjs4 (http://www.turnjs.com/)
 - videojs (https://videojs.com/)
 - viewportchecker (https://github.com/dirkgroenen/jQuery-viewport-checker)
 
 
 ### Styles
 The styles folder holds all of the projects styles. This can be further divided into folders to hold the style for a functionality or a page. The page specific styles are referenced in that pages View(s).
 
 ### Scripts
The Scripts folder holds all of the projects scripts. This can also be divided into folders to hold the scripts for a certain page or functionality. The page specific scripts can be added on that pages View(s).

## Helpers
- iSeed (automatic seed generation) (https://github.com/orangehill/iseed)
- Telegram (do projets together) (https://atom.io/packages/atom-telegram) 

## Models
the models are stored in their own folder. (/app/Models)

## Controllers
Controllers are divided into the following folders
- frontend
- backend
