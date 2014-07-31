## AngularJS + Bootstrap Responsive Dashboard

This dashboard front-end was created as I was lacking a simple responsive but slick looking dashboard for another project of mine.  Other free dashboards were bloated with external plugins and required a lot of hackery out of the box - plus the fact many were powered by jQuery. The design takes inspiration from other dashboards around, but the code to create the layout is my own. Feel free to chop it up as much as you want.

Live Example:
* http://elliothesp.co.uk/responsive-dashboard

Screenshots:
* [Screen Shot 1](http://i.imgur.com/MRzDg7x.jpg)
* [Screen Shot 2](http://i.imgur.com/ARI6LDM.jpg)
* [Screen Shot 3](http://i.imgur.com/WbCtM0Y.jpg)

### Usage

Simply clone, or download and unzip this repository and access the root via your browser. There is only one page on show (`index.html`), and the relevant sections have been commented.

#### AngularJS

AngularJS is simply being used to power the sidebar toggle (side in and out). It does a combination of detecting the browser size and managing a `toggle` cookie to keep the state the same when the page is reloaded. Check out the `js/angular/bootstrap.js` file.

This functionality can easily be replaced using jQuery, however this wasn't used in my project.

#### Theme

Three different colour files (blue, green & red) have been included in `css/themes`, which changes the colour of the sidebar. Blue is on by default, the others are commented out in the `index.html` file.

#### Bootstrap + Font Awesome

The grid layout and components are powered by [Bootstrap](http://getbootstrap.com/), also Font Awesome icons are ready to use.

#### Custom Items

The `css/dashboard/dashboard.min.css` file is the base CSS file for the dashboard, however it also contains the styling for the "widgets".

##### Widgets

A widget is essentially a white container box with some styling, that will expand 100% of it's parent container. To seperate these out, I suggest putting them inside a bootstrap grid item, e.g:

```
<div class="col-lg-3">
	<div class="widget">
```

A widget has a `widget-title` (title area) and also a `widget-body` (main content) which can be used individually inside the widget.

Any content can be inside a `widget-body`, which will be padded by default. Three set sizes for the body are available and will provide a scroller for the content when the content breaks the height. Apply either `large` `medium` or `small` to the `widget-body` class, e.g: `<div class="widget-body medium">`.

> If no size is set, the content will expand vertically based on content size.

Widget table styling is also included. Simply place a bootstrap table inside your `widget-body`. It's recommended you remove padding on the `widget-body` to take the table to maximum width by applying `no-padding` to the class, e.g: `<div class="widget-body no-padding">`.

##### Loading Directive

The loading 'spinner' is a simple directive created by AngularJS within the `js/angular/bootstrap.js` file which replaces an HTML element with a define template. In this case, the HTML template is taken from [this awesome spinkit repo](http://tobiasahlin.com/spinkit/), and the CSS placed in the `css/dashboard/loading.css` file (which is imported at the top of the `dashboard.css` file).

Usage of the directive: `<loading></loading>` or `<div loading></div>`

Want to change it, simple replace the template and CSS!