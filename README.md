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


