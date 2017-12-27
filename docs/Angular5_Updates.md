Changes in Angular version 5

- CLI uses build optimizer by default that makes deployment bundles smaller.
- introduction of ServerTransferStateModule and BrowserTransferStateModule to support server and client side rendering.
- try using "ng serve --aot" as it will be default in future releases of angular
- faster and smaller builds by compiler using typescript transforms and preserve whitespace chars
- Internationalized Number, Date, and Currency Pipes...these pipes are angular implememtaion rather than relying on browser for older version
- Reduced applicaton size by replacing ReflectiveInjector with StaticInjector
- Performance improvements by making zones faster by default and option to bypass zones entirely 
- "exportAs" to help users to migrate without breaking changes 
- @angular/http library is deprecated
- **To update to HttpClient,replace HttpModule with HttpClientModule from @angular/common/http in each of your modules, inject the HttpClient service, and remove any map(res =>res.json()) calls,      which are no longer needed.
- CLI v1.5 generates v5 projects by default
- Angular Forms adds updateOn Blur / Submit
- new lifecycle events are added to the router, allowing developers to track the cycle of the router from the start of running guards through to completion of activation
