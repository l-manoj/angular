# ng-cli-demo
This is a sample application that is created to build, test and manage an angular app using Angular CLI.

GENERATING CODE FROM BLUEPRINTS:
Components:
ng g c customer -d
ng g c customer
ng g c customer2 -ve Emulated -cd OnPush -d
ng g c customer2 -ve Emulated -cd OnPush

Directives:
ng g d search-box -d
ng g d search-box
ng g d search-box2 --flat false -d
ng g d search-box2 --flat false

Services:
ng g s sales-data -d
ng g s sales-data
ng g s sales-data2 -m app.module -d
ng g s sales-data2 -m app.module

Class, Interface and Enum: 
ng g cl models/product -d
ng g cl models/product
ng g i models/order
ng g e models/gender

Pipe:
ng g p shared/currency -d
ng g p shared/currency

Module:
ng g m login -d
ng g m login --spec true -d
ng g m login
ng g c login -m login/login.module -d
ng g c login -m login/login.module

TIP: We can set project wide settings too
ng set defaults.component.flat true
ng set defaults.directive.flat true
ng set defaults.styleExt scss


GENERATING ROUTING FEATURES
ng new ngcli-routing-demo --routing
ng g c customers
ng g c dashboard
ng g m admin --routing
ng g c admin
ng g c admin/users
ng g c admin/emails

Building and Serving 

ng build <options>

Build are stored as bundles or webpack in /dist folder(by default).
Output folder can be configured in .angular-cli.json file
Common Build File are below:

Inline.bundle.js       Webpack
Main.bundle.js         App Code
Polyfills.bundle.js    Browser polyfills
Styles.bundle.js       Styles
Vendor.bundle.js       Angular and vendor files

In order to explore the source in bundles a tool can be used that 
reveals exactly which modules and classes are in the bundle.
https://github.com/danvk/source-map-explorer
Install:  npm install source-map-explorer  --save-dev
Use: node_modules/.bin/source-map-explorer dist/main.bundle.js


What is build environment and what is build target?
Build Environment: Indicates which file  to use between environment.ts and environmnet.prod.ts
Build Target: Defines how and(if) files are optimized 

Comparing Dev and Prod Build Targets 
                 ng build                        ng build --prod
Environment      environment.ts                  environment.prod.ts
Cache busting    Only images referenced in CSS   All build files
Source maps      Generated                       Not generated
Extracted CSS    Global CSS output to .js        Yes, to CSS file(s)
Uglification     No                              Yes
Tree-Shaking     No                              Yes
AOT              No                              Yes
Bundling         Yes                             yes
			
Common ng build Options
Options             Alias               Description
--sourcemap         -sm                 Generate a source map
--aot                                   Ahead of time compilation
--watch              -w                 Watch and rebuild 
--environment        -e                 Build environment
--target             -t                 Build Target
--dev                                   Shortcut for dev env and target
--prod                                  Shortcut for prod env and target

Example:
ng build --aot
ng build --prod
ng build --prod -sm

Common ng serve options(plus all ng build options)
Options         Alias       Description
--open          -o          Opens in the default browser
--port          -p          Port to listen to when serving
--live-reload   -lr         Reload when change occurs
--ssl                       Serve using HTTPS
--proxy-config  -pc         Proxy configuration file

In the background Angulsr uses webpack for serving and building. 
What if you do not want to use CLI for serve/build or 
what if you want to know what is inside webpack configuration and play with it
ng eject ---->deletes CLI config with zwebpack config for building and serving 