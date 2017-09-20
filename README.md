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
      "script-loader!./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],

    devServer: {
        historyApiFallback: true
    }