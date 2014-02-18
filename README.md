###Frontend loader script

####Usage

*add script to the html：*
```
  <script src="src/index.js"></script>
  <script>
    mil({
      js: [],
      css: []
    });
  </script>
```

####APIs
*mil() is a global function.It accepts a object as param*
- example:
```
  {
    js: 'index.js',
    css: 'style.css'
  }

  or

  {
    js: ['index.js'],
    css: ['style.css']
  }
```
- js can be a string or an array.
- css can be a string or an array.

####Develop
*run:*
```
  npm install
  grunt
```
you can see the example in browser at ([localhost](127.0.0.1:8000)) with port 8000;

####Build your owen loader
*run:*
```
  grunt build
```