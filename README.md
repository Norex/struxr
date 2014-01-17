struxr
======

Front-end Boilerplate


## What is it?
======

struxr is a front-end, responsive website/app boilerplate built with experienced front-end developers in mind. It uses a combination of HTML5 and CSS3 (SCSS) along with basic JavaScript (jQuery) to create an easy-to-understand and malleable platform for converting static website designs into HTML/CSS templates. With an incredibly basic starting point and open-ended framework, it allows quick and easy rapid prototyping of your web projects.


## Who should use it?
======
Users of struxr should have an intermediate to strong understanding of HTML structure and CSS. In addition, it relies on the use of [SCSS](http://sass-lang.com) (a newer syntax of SASS), so a bit of knowledge there would be of great help as well. struxr is best suited to front-end developers who prefer to do a bit more hand-coding than usual in order to ensure complete control. The framework already includes styling for elements such as forms, buttons, lists, etc. but things like grids and columns are up to you.


## How does it differ from other frameworks?
======

The primary difference between struxr and other frameworks is the lack of dozens of class names that you have to remember. Typical frameworks include things like column grids which means you have to memorize an endless amount of class names in order to accomplish what you want. struxr allows its users to rapidly create the necessary layout and structure elements by hand while ensuring all extraneous elements have already been addressed. There are only a handful of reusable class names contained within struxr.


## What does it include?
======

struxr includes some amazing bits of genius by some very smart people. These plug-ins and helpers will aid the quick development of most web projects. In no way do I take credit for the development or creation of any of the following creations. They are merely here to provide support.

- [jQuery 1.10.2](http://jquery.com/)
- [FontAwesome](http://fontawesome.io) - webfont icons
- [animate.css](https://daneden.me/animate/) - a collection of pre-made CSS-based animations
- [Gallery CSS](http://benschwarz.github.io/gallery-css/) - pure CSS slider/gallery/carousel 
- [normalize](http://necolas.github.io/normalize.css/) - CSS reset
- [Owl Carousel](http://owlgraphic.com/owlcarousel/) - lightweight, responsive 
- [iCheck](http://fronteed.com/iCheck/) - custom radio buttons and checkboxes
- [FitVids.js](http://fitvidsjs.com/) - responsive video embeds
- [Modernizr](http://modernizr.com/) - feature detection toolkit


## Usage
=====

1. Clone the struxr repo to a local folder.
2. Set up [Compass](http://compass-style.org/) (a CSS pre-processor). This will help to easily compile and update your SCSS to regular CSS on the fly.
3. Create your page structure using HTML5 in index.html.
4. Style your website using main.scss.

## Usage Notes
=====

1. Basic page styles and re-usable variables and mixins are located in /sass/_settings.scss.
2. Always make sure you are "watching" your root folder (the folder with your config.rb file) when writing your SCSS. By doing so, your CSS will automatically re-compile on-the-fly.
3. Please read all necessary documentation of the included helpers and plug-ins in order to fully understand how to implement each of them properly.


## Need Help?
=====
If you notice a problem with struxr, or have suggestions for improving it, please [add an issue on Github.](https://github.com/Norex/struxr/issues)
