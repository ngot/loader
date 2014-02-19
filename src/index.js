(function (w){
  var exports = w.mil = function(o){
    var obj = {
      url: [],
      js: [],
      css: []
    };
    /**
    *  param is null exit load function
    */
    if(!o) return;
    /**
     * parse the params
     */
    for (var k in obj){
      if(o[k]){
        switch (typeof o[k]){
          case 'string':
          obj[k] = [o[k]];
          break;
          case 'object':
          obj[k] = o[k];
          break;
        }
      }
    }
    /**
    * invoke load function
    */
    load(obj);
  };

  function load(obj){
    var s = location.search;
    if(s != '') {
      location = location.pathname + '#' + s.substr(1);
      return;
    }
    /**
     * load source after the dom load complete.
     */
    if(document.body)
      loader(obj);
    else
      w.onload = loader(obj);
  }
  /**
   * run the load task
   */
  function loader(obj){
    var domain = obj["url"] ? obj["url"][0] : '';
    var scripts = document.getElementsByTagName('script');
    var r = new RegExp("http://([^/]+)/").exec(scripts[scripts.length - 1].src);

    if(!domain){
      if(r)
        domain = r[1];
      else
        domain = location.host;
    }

    var js = obj['js'];
    var css = obj['css'];

    var body = document.body || document.getElementsByTagName('body')[0] || document.getElementsByTagName("head")[0] || document.documentElement;

    function run_load(){
      var script_id = 0;
      var ie9less = ("ActiveXObject" in w) && !("atob" in w);
      function load_script(){
        if(script_id < js.length) {
          var c = document.createElement("script");
          c.type = "text/javascript";
          if(c.readyState)
            c.onreadystatechange = function (){
              if(this.readyState == 'loaded')
                setTimeout(load_script, 0);
            };
            else
              c.onload = load_script;
            c.src = 'http://' + domain + "/" + js[script_id];
            body.appendChild(c);
            script_id++;
          }
        }
        load_script();
        for (var v in css) {
          if(ie9less && css[v].indexOf("phone/") > -1)
            continue;
          var c = document.createElement('link');
          c.type = 'text/css';
          c.rel = 'stylesheet';
          c.href = 'http://' + domain + '/' + css[v];
          document.getElementsByTagName("head")[0].appendChild(c);
        }        
      }
      if('cordova' in w)
        document.addEventListener("deviceready", run_load, false);
      else
        run_load();
    }

  })(window);