## AngularJS + Bootstrap Responsive Dashboard

This AngularJS driven dashboard was created as there is a lack of free, open-source, readable and bloat free admin templates. Many premium templates require a lot of hackery out of the box - this template is intended to have only the extra features we think are needed to get up and running as quick as possible.

> [Live Demo!](http://ehesp.github.io/Responsive-Dashboard)

[*Want the dashboard without AngularJS and build functionality?*](https://github.com/Ehesp/Responsive-Dashboard/tree/barebones)

### Requirements
* [Node](http://nodejs.org/)
* [NPM](http://npmjs.org/)

### Usage

This project uses the following tools:
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io/) 
* [AngularJS](https://angularjs.org/)

#### Getting Started

1. Clone the repository and run `npm install` to install all dependencies. This will also run the `bower install` automatically after completion.
2. There are now two `gulp` commands to choose from:
- `node_modules/.bin/gulp build` to build the project.
- `node_modules/.bin/gulp` to start a local webserver with **AWESOME** automatic compilation and [Livereload](http://livereload.com/) (We use [gulp-connect](https://github.com/avevlad/gulp-connect)).
3. The files will now be built into the `dist` directory.

### Styling

Currently, only the sidebar colours can be easily be changed. [LESS](http://lesscss.org/) is used for styling so we take advantage of variables - checkout `src/less/dashboard/variables.less` and change the sidebar base colour, the others will be converted for you.

#### Hamburg Menu

By default the responsive dashboard menu on a small sized screen sticks to the left side of the screen. If you wish the menu to have 'native app' menu functionality, where the sidebar overlaps the content from the left and side, simply add the `hamburg` class to the body:

```HTML
<body class="hamburg">
```

### Bootstrap & Font Awesome

The grid layout and components are powered by [Bootstrap](http://getbootstrap.com/), also [Font Awesome](http://fontawesome.io/) icons are ready to use.

#### Widgets

A widget is essentially a white container box with some styling, that will expand 100% of it's parent container. To separate these out, I suggest putting them inside a bootstrap grid item, e.g:

```HTML
<div class="col-lg-3">
	<div class="widget">
```

A widget has a `widget-title` and also a `widget-body` which can be used individually inside the widget.

Any content can be inside a `widget-body`, which will be padded by default. Three set sizes for the body are available and will provide a scroller for the content when the content breaks the height. Apply either `large` `medium` or `small` to the `widget-body` class, e.g: `<div class="widget-body medium">`.

> If no size is set, the content will expand vertically based on content size.

##### Widget Body

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

##### Widget component

Instead of hardcoding the widget HTML directly, AngularJS widget component functionality is ready to use:

```HTML
<rd-widget>	
	<rd-widget-header title="Hello World"><rd-widget-header>
	<!-- The if the loading parameter is true, it will show an spinner instead of the content.-->
	<rd-widget-body loading="true">Hello Universe<rd-widget-body>
</rd-widget>
```

### FAQ

#### What is the dashboard compatible with?

The dashboard uses CSS3 for animations along with other style enhancements meaning browsers supporting this (Chrome, Firefox, IE11+) are compatible.
As for smaller screen sizes, the dashboard works best on screen sizes greater than ~335px.

#### Any screenshots?

Checkout [am-i-responsive](http://ami.responsivedesign.is/?url=http://ehesp.github.io/Responsive-Dashboard), this doesn't have the Hamburg menu enabled though.

#### I don't want to use AngularJS or NPM/Bower/Gulp!

No worries, theres a barebones branch available with the basic HTML and CSS!