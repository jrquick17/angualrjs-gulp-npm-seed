# angularjs-gulp-npm-seed
  
![](logo.png =250x250)

## Index ##

* [About](#about)
* [Setup](#setup)
* [Documentation](#documentation)

## About ##

A seed for quickly starting an AngularJS project using Gulp and NPM.
 
Technologies
* AngularJS (1.7+)
* Gulp (3.9+)
* NPM
* SASS (4.0+)

* Visit [my website](https://jrquick.com) for me cool stuff!

## Setup ##

* Clone the repo
```commandline
git clone git@github.com:jrquick17/angularjs-gulp-npm-seed.git
```

* Install dependencies
```commandline
npm install
```

* Run
```commandline
gulp serve
```

* Install dependencies

```commandline
npm install gulp babelify browserify browser-sync vinyl-buffer gulp-concat gulp-angular-embed-templates gulp-jshint gulp-rename browserify-resolutions run-sequence gulp-sass vinyl-source-stream gulp-sourcemaps gulp-uglify --save-dev
```

## Documentation

#### build
Build the project.
```commandline
gulp build
```

#### build & watch
Build the project anytime there is a change.
```commandline
gulp
```

#### build & watch & launch server
Build the project anytime there is a change and run on a server.
```commandline
gulp serve
```

#### build & watch & launch proxy server
Build the project anytime there is a change and run on a proxy server.
```commandline
gulp proxy
```
