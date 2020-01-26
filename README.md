# RoutedLibraries

This project is meant to show that compiled libraries with lazy routing are not supported.

## Library with a lazy loaded route
``` 
ng build lazy-routing-lib
```
Does not build with ng-packagr. FESM can be forced to build by hack but UMD does not support multiple bundles anyway.

## Library with a non-lazy loaded route
``` 
ng build non-lazy-routing-lib
```
Builds fine. Runs as expected.

