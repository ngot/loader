###Frontend loader script

####usage

*add script to the html：*
```
    <script src="src/loader.js"></script>
    <script>
        (function(){
            $l.setJs([]);
            $l.setCss([]);
            $l.start();
        })();
    </script>
```

####API
*$l is a global object.There three methodes which we can invoke as the above shows.*
- $l.setJs(); set the js files which we want to load;this method accept a array;
- $l.setCss(); set the css files which we want to load;this method accept a array;
- $l.start(); start to load files;

####develop
*run:*
```
    npm install
    grunt
```
you can see the example in browser at ([localhost](127.0.0.1:8000)) with port 8000;

####build your owen loader
*run:*
```
    grunt build
```