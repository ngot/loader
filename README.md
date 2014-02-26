###Frontend loader script

[![Build Status](https://travis-ci.org/ngot/mil.png?branch=master)](https://travis-ci.org/ngot/mil)

####Usage

*add script to the html：*
```
  <script src="src/index.js"></script>
  <script>
    mil({
      url: [],
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

  or

  {
    url: '127.0.0.1:8000'
    js: ['index.js'],
    css: ['style.css']
  }
```
- js/css is the file load path.They can be a string or an array.
- url is the domain which hostes the js/css files.

####Develop
*run:*
```
  npm install
  grunt
```
you can see the example in browser at ([localhost](http://127.0.0.1:8000)) with port 8000;

####Build your owen loader
*run:*
```
  grunt build
```