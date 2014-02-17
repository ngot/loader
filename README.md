###Frontend loader script

#####usage

####add script to the html：
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

####explain
*$l is a global object.There three methodes which we can invoke as the above shows.*
- $l.setJs(); set the js files which we want to load;this method accept a array;
- $l.setCss(); set the css files which we want to load;this method accept a array;
- $l.start(); start to load files;




