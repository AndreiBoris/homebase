* [Top](#home-website)
* [Status](#status)
    * [Planned Features](#planned-features)
    * [Next Steps](#next-steps)
* [Instructures](#how-to-view)
* [Tests](#running-tests)
* [Associated Licenses](#license)

# Home Website

Will be transferred to an appropriate hosting service soon.

### Status

Here I will post the current state of this project.

ETA for generally complete project: **End of April 2016**

#### Planned Features

* A blog with comments enabled
* Backbone single page application
* Communicate with backend server that stores a database of blog entries
* Solid Jasmine testing suite
* Components broken up into requireJS modules

Current: The old version of this website is currently available on the master
branch. It is a bare, Skeleton-based website. Best feature: it loads fast.

#### Next Steps:

* Incorporate requireJS and Backbone scaffolding. Remove gh-pages hosting to
allow for cleaner directory structure. (DONE Fri Mar 18 2016)
* Design UI (DONE Mar 20 2016)
* Currently in a big detour learning about working with servers and SQL...
likely will be changing the plan to create a smaller-shorter term project using
SQL and Backbone and then coming back to this project to work on some other
technologies. (2016-03-30 09:092016-03-30 09:09)

### How to view

In your favourite command line, clone the respository:

```
git clone https://github.com/AndreiCommunication/homebase.git repository
```

Enter the repository

```
cd repository
```

Get all dependencies

```
npm install
```

Build the project

```
gulp
```

View the page by opening `dist/index.html` in your favourite browser.

### Running tests

Once you have the npm dependencies, you should be able to run Jasmine tests
by using the command

```
npm test
```

**NOTE** the way it is configured it opens up Google Chrome to show the result
of your tests. If this is undesirable you can change the `test` script in
`package.json` or build the project using `gulp` and then opening
`dist/tests/SpecRunner.html` in your favourite browser.

### License

[Backbone.js](https://github.com/jashkenas/backbone),
[Underscore.js](https://github.com/jashkenas/underscore),
[jQuery](https://github.com/jquery/jquery),
[Require.js](https://github.com/requirejs/requirejs),
[Filament Group's LoadCSS script](https://github.com/filamentgroup/loadCSS),
[Jasmine](https://github.com/jasmine/jasmine),
and
[Skeleton-Sass](https://github.com/WhatsNewSaes/Skeleton-Sass)
are under the MIT license with the licenses provided with each component are
available in the directories from which they are used (mostly within `dist`).
The exception being Skeleton-Sass which didn't provide a copied version of the
license but [a link to the online version.](http://opensource.org/licenses/mit-license.php)

My website is licensed under the
[Creative Commons Attribution 4.0 International Public License.](https://github.com/AndreiCommunication/homebase/blob/master/LICENSE)
