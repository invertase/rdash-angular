## AngularJS + Bootstrap Responsive Dashboard

This dashboard front-end was created as I was lacking a simple responsive but slick looking dashboard for another project of mine.  Other available dashboards were bloated with external plugins and required a lot of hackery/work out of the box - plus the fact many were powered by jQuery. The design takes inspiration from other dashboards around, but the code to create the layout is my own.

Compatibility/Tested:
* Chrome, Firefox, IE 11+
* Works best on screen sizes greater than ~335px

[Responsive Screenshots](http://ami.responsivedesign.is/?url=http://ehesp.github.io/Responsive-Dashboard/)

Live Example:
* http://ehesp.github.io/Responsive-Dashboard/

> jQuery version available on the [jQuery branch](https://github.com/Ehesp/Responsive-Dashboard/tree/jquery)!

### Usage

Simply clone, or download and unzip this repository and access the dist folder via your browser. There is only one page on show (`index.html`), and the relevant sections have been commented.

### Development

Requirements:
* [Node](http://nodejs.org/)
* [NPM](http://npmjs.org/)

The project uses:
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io/) 
* [AngularJS](https://angularjs.org/)

#### Getting Started

Clone the repo, run `npm install` to install all dependencies.
After that you can either: 
- Run `node_modules/.bin/gulp build` to build the project.
- Run `node_modules/.bin/gulp` to start a local webserver with **AWESOME** automatic compilation and [Livereload](http://livereload.com/) (We use [gulp-connect](https://github.com/avevlad/gulp-connect)).

### Stylesheets

#### Theme

Responsive Dashboard uses [LESS](http://lesscss.org/) for styling so we take advantage of variables to theme the dashboard. Take a look at `src/less/dashboard/variables.less` and customize with your own colors.

#### Bootstrap + Font Awesome

The grid layout and components are powered by [Bootstrap](http://getbootstrap.com/), also Font Awesome icons are ready to use.

##### Widgets

A widget is essentially a white container box with some styling, that will expand 100% of it's parent container. To separate these out, I suggest putting them inside a bootstrap grid item, e.g:

```HTML
<div class="col-lg-3">
	<div class="widget">
```

A widget has a `widget-title` and also a `widget-body` which can be used individually inside the widget.

Any content can be inside a `widget-body`, which will be padded by default. Three set sizes for the body are available and will provide a scroller for the content when the content breaks the height. Apply either `large` `medium` or `small` to the `widget-body` class, e.g: `<div class="widget-body medium">`.

> If no size is set, the content will expand vertically based on content size.

###### Widget Body

**Padding**

Padding inside widgets is set to 20px. To remove this padding, apply the `no-padding` class on the widget body, e.g: `<div class="widget-body no-padding">`.

**Tables**

Styling for tables is included. Ensure your table has the class `table` and feel free to apply other Bootstrap classes. For table headings use `thead` and the body `tbody`. Tables work well with the `no-padding` class.

**Messages & Errors**

A message can be set within the body whether it has padding or not - simply place a `<div>` within the body with the class of `message`, e.g:

```HTML
<div class="widget-body no-padding">
	<div class="message" ng-if="servers.length == 0">
		There are no servers in the application!
	</div>
</div>
```

If you wish to set this text to red, to display an error for example, simply replace `message` with `error`, e.g:

```HTML
<div class="widget-body no-padding">
	<div class="error" ng-if="error">
		An error occurred retrieving data from the server!
	</div>
</div>
```

### AngularJS

AngularJS is mainly being used to power the sidebar toggle (side in and out). It does a combination of detecting the browser size and managing a `toggle` cookie to keep the state the same when the page is reloaded. Check out the `src/js/dashboard/controllers/master-ctrl.js` file.

The idea is not for AngularJS to be used *just* to power this functionality, it's used to be compatible with your AngularJS project.

##### Loading Directive

The loading 'spinner' is a simple directive created with AngularJS within the `src/js/dashboard/directives/loading.js` file which replaces an HTML element with a defined template. In this case, the HTML template is taken from [this awesome spinkit repo](http://tobiasahlin.com/spinkit/), and the CSS placed in the `src/less/dashboard/loading.less`.

Usage of the directive: `<rd-loading></rd-loading>` or `<div rd-loading></div>`

If you want to change it, simply replace the template and CSS!

#### Widget component

Usage: 

```HTML
<rd-widget>	
	<rd-widget-header title="Hello World"><rd-widget-header>
	<!-- The if the loading parameter is true, it will show an spinner instead of the content.-->
	<rd-widget-body loading="true">Hello Universe<rd-widget-body>
<rd-widget>
```
