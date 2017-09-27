# .Net Core 2.0; Angular 4; Webpack 2; Bootstrap 4 Beta, Angular Cli ejected

## Doku:
 doku from http://www.dotnetcurry.com/angularjs/1366/angular-4-app-typescript-bootstrap

## Source
 source from 
 https://github.com/dotnetcurry/upgrade-angular-2-to-4
    
    
    ng eject

    npm install --save bootstrap@4.0.0-alpha.6

    npm install tether
    npm install adddep -g
    adddep tether

    npm install jquery

    npm install --save popper.js angular-popper


### webpack.config:

    "scripts": [
      "script-loader!./node_modules/jquery/dist/jquery.min.js",
      "script-loader!./node_modules/tether/dist/js/tether.min.js",
      "script-loader!./node_modules/popper.js/dist/umd/popper.min.js",      
      "script-loader!./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],

    devServer: {
        historyApiFallback: true
    }

    dings